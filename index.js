import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import checkAuth from './middlewares/authMiddleware.js';

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware para permitir o CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para lidar com requisições JSON e dados no corpo das requisições
app.use(bodyParser.json());

app.use('/auth', authRoutes);

// Rotas de teste
app.get('/profile', checkAuth, (req, res) => {
  console.log("User: ", req.user || "No user");
  res.status(200).json({ message: 'Bem-vindo ao seu perfil!', user: req.user });
});

app.post('/secure-data', checkAuth, (req, res) => {
  console.log("User: ", req.user || "No user");
  res.status(200).json({ message: 'Dados seguros recebidos', data: req.body });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
