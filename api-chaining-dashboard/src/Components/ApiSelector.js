// src/components/ApiSelector.jsx
import React, { useEffect } from 'react';

const ApiSelector = ({ users, setSelectedUser, selectedUser }) => {
  useEffect(() => {
    // Fetch users on component mount
    // This can be triggered differently based on workflow
  }, []);

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Select User:</label>
      <select
        value={selectedUser ? selectedUser.id : ''}
        onChange={(e) => {
          const user = users.find(u => u.id === parseInt(e.target.value));
          setSelectedUser(user);
        }}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
      >
        <option value="">-- Select a User --</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ApiSelector;
