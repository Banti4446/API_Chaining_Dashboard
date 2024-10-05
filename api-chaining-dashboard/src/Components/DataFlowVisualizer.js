// src/components/DataFlowVisualizer.jsx
import React from 'react';

const DataFlowVisualizer = ({ selectedUser, post, comments }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Data Flow</h2>
      <div className="space-y-4">
        <div className="p-4 border border-blue-300 rounded-md">
          <h3 className="font-semibold">1. Get Users List (GET)</h3>
          {selectedUser ? (
            <p>Selected User: {selectedUser.name} (ID: {selectedUser.id})</p>
          ) : (
            <p>No user selected.</p>
          )}
        </div>
        <div className="p-4 border border-green-300 rounded-md">
          <h3 className="font-semibold">2. Create New Post (POST)</h3>
          {post ? (
            <p>Post ID: {post.id} created by User ID: {post.userId}</p>
          ) : (
            <p>No post created yet.</p>
          )}
        </div>
        <div className="p-4 border border-yellow-300 rounded-md">
          <h3 className="font-semibold">3. Get Comments by Post (GET)</h3>
          {comments.length > 0 ? (
            <p>Fetched {comments.length} comments for Post ID: {post.id}</p>
          ) : (
            <p>No comments fetched yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataFlowVisualizer;
