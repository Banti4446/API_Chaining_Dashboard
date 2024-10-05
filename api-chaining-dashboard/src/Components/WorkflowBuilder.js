// src/components/WorkflowBuilder.jsx
import React, { useState } from 'react';
import ApiSelector from './ApiSelector';
import ResponseMapper from './ResponseMapper';
import DataFlowVisualizer from './DataFlowVisualizer';
import {getUsers, createPost, getCommentsByPost} from  '../Services/api.js'

//import { getUsers, createPost, getCommentsByPost } from '../Services/Api.js'; 

const WorkflowBuilder = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchUsers = async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (title, body) => {
    if (!selectedUser) {
      setError('No user selected.');
      return;
    }
    setLoading(true);
    try {
      const response = await createPost({ title, body, userId: selectedUser.id });
      setPost(response.data);
    } catch (err) {
      setError('Failed to create post.');
    } finally {
      setLoading(false);
    }
  };

  const handleFetchComments = async () => {
    if (!post) {
      setError('No post to fetch comments for.');
      return;
    }
    setLoading(true);
    try {
      const response = await getCommentsByPost(post.id);
      setComments(response.data);
    } catch (err) {
      setError('Failed to fetch comments.');
    } finally {
      setLoading(false);
    }
  };

  const handleExecuteWorkflow = async () => {
    setError(null);
    setPost(null);
    setComments([]);
    await handleFetchUsers();
    // Assuming user selects a user after fetching
    // Implement logic for user selection
  };

  return ( 
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">API Chaining Dashboard</h1>
      {/* Workflow Steps */}
      <ApiSelector users={users} setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
      {selectedUser && (
        <ResponseMapper
          createPost={handleCreatePost}
          post={post}
          fetchComments={handleFetchComments}
          comments={comments}
        />
      )}
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <DataFlowVisualizer selectedUser={selectedUser} post={post} comments={comments} />
    </div>
  );
};

export default WorkflowBuilder;
