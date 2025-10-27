import axios from 'axios';
import { auth } from '../firebase/firebase-config'

// variáveis de ambiente
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_TIMEOUT = Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 30000;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// interceptor para adicionar token em todas as requisições
apiClient.interceptors.request.use(
  async (config) => {
    // ... (lógica de obtenção de token Firebase) 
    const user = auth.currentUser;
    if (user){
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratamento de erros
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401){
      // Redirecionamento para o login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);