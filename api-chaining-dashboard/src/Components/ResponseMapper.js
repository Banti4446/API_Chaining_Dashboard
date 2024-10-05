// src/components/ResponseMapper.jsx
import React, { useState } from 'react';

const ResponseMapper = ({ createPost, post, fetchComments, comments }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(title, body);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>

      {post && (
        <div className="mt-4 p-4 border border-green-300 rounded-md">
          <h3 className="text-lg font-semibold">Post Created:</h3>
          <p><strong>ID:</strong> {post.id}</p>
          <p><strong>Title:</strong> {post.title}</p>
          <p><strong>Body:</strong> {post.body}</p>
          <p><strong>User ID:</strong> {post.userId}</p>
          <button
            onClick={fetchComments}
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
          >
            Fetch Comments
          </button>
        </div>
      )}

      {comments.length > 0 && (
        <div className="mt-4 p-4 border border-yellow-300 rounded-md">
          <h3 className="text-lg font-semibold">Comments:</h3>
          <ul>
            {comments.map(comment => (
              <li key={comment.id} className="mb-2">
                <p><strong>Name:</strong> {comment.name}</p>
                <p><strong>Email:</strong> {comment.email}</p>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResponseMapper;
