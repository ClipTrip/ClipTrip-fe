import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    } else {
      return Promise.reject(new Error('알 수 없는 오류가 발생하였습니다.'));
    }
  }
);
