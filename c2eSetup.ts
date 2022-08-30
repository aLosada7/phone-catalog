import { config as environmentConfig } from 'dotenv';

import axios from 'axios';

const HOST = 'http://localhost:3333'; // in a real app taken from .env

// Configure environment variables
environmentConfig();

export default function c2eSetup() {
  // If it has been configured before, we directly return the promise
  if (axios.defaults.baseURL === HOST) return Promise.resolve();

  axios.defaults.baseURL = HOST;

  return true;
}
