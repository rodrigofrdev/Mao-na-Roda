import dotenv from 'dotenv';  // Importando o dotenv
dotenv.config();  // Carregando as variáveis do arquivo .env
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import checkAuth from './middlewares/authMiddleware.js';

const app = express(); // Inicializando o express

// Configurando o servidor
const PORT = process.env.PORT || 5000; // Defina a porta para o servidor

// Middleware para permitir o CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para lidar com requisições JSON e dados no corpo das requisições
app.use(bodyParser.json());

// Usando as rotas de autenticação
app.use('/auth', authRoutes);

// Definindo a rota de exemplo que exige autenticação
app.get('/profile', checkAuth, (req, res) => {
  console.log("User: ", req.user || "No user");
  res.status(200).json({ message: 'Bem-vindo ao seu perfil!', user: req.user });
});

// Rota de exemplo para testar o middleware de autenticação
app.post('/secure-data', checkAuth, (req, res) => {
  console.log("User: ", req.user || "No user");
  // Aqui você pode adicionar qualquer lógica para dados que precisem de autenticação
  res.status(200).json({ message: 'Dados seguros recebidos', data: req.body });
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
