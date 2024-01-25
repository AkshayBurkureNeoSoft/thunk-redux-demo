// src/api.ts

// Replace this with your actual API endpoint
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

export const fetchPostsApi = async () => {
  const response = await fetch(`${API_ENDPOINT}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};
