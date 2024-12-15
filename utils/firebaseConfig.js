import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuração do Firebase para sua aplicação web
const firebaseConfig = {
  apiKey: "AIzaSyCzSwbAQtLTDLe6747YiAi1hWt0VmLXF1Q",
  authDomain: "reparo-automotivo.firebaseapp.com",
  projectId: "reparo-automotivo",
  storageBucket: "reparo-automotivo.firebasestorage.app",
  messagingSenderId: "115086067470",
  appId: "1:115086067470:web:df9823797e160cd7b4395f",
  measurementId: "G-ZYXPXNWC8G"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância de autenticação do Firebase
const auth = getAuth(app);

export { auth };