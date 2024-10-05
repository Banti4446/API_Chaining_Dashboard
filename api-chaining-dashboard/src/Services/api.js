// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => axios.get(`${API_BASE_URL}/users`);

export const createPost = (postData) => axios.post(`${API_BASE_URL}/posts`, postData);

export const getCommentsByPost = (postId) => axios.get(`${API_BASE_URL}/comments`, {
  params: { postId }
});
