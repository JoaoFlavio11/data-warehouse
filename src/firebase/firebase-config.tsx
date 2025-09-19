import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importe o método de autenticação

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOBrvbT3xz1KYBwE7OKMRKB-7Z6cSm-Pk",
  authDomain: "data-warehouse-a01e7.firebaseapp.com",
  projectId: "data-warehouse-a01e7",
  storageBucket: "data-warehouse-a01e7.firebasestorage.app",
  messagingSenderId: "1091831854376",
  appId: "1:1091831854376:web:e7ade7c770bf14d4af4c1d"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Firebase Authentication e obtenha uma referência para o serviço
const auth = getAuth(app);

export { auth }; // Exporte a referência 'auth' para que possa ser usada em outros arquivos