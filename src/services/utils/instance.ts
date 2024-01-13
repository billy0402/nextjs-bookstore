import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import { BASE_API_URL } from '@/fixtures/constants';

const instance = applyCaseMiddleware(
  axios.create({
    baseURL: BASE_API_URL,
  }),
);

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default instance;
