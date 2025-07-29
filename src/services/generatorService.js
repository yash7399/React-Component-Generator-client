// src/services/generatorService.js
import axios from 'axios';

const API_URL = 'https://react-component-generator-server.onrender.com/api/generate'; // Your backend URL

const generate = (prompt) => {
  // Get the auth token from localStorage
  const token = localStorage.getItem('token');

  return axios.post(
    API_URL,
    { prompt },
    {
      headers: {
        // Send the token to the protected backend route
        'Authorization': `Bearer ${token}`
      }
    }
  );
};

const generatorService = {
  generate,
};

export default generatorService;
