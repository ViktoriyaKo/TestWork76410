import axios from 'axios';
import { createAxiosInstance } from './createAxiosInstance';

const baseURL = 'https://dummyjson.com'; // в реальном проекте вынести в конфинг и в .env

export const axiosRequest = axios.create({
  baseURL,
});
export const axiosAuthRequest = createAxiosInstance(baseURL);
