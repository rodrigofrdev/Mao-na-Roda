const express = require('express');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

// Carregar a chave da conta de serviço
const serviceAccount = require('./config/serviceAccountKey.json');

// Inicializar o Firebase Admin SDK com as credenciais
initializeApp({
  credential: cert(serviceAccount)  // Usando a chave da conta de serviço
});

// Obter referência ao Firestore
const db = getFirestore();

// Criar a aplicação Express
const app = express();
// Habilitar o uso de JSON no corpo das requisições
app.use(express.json());

// Definir um endpoint de exemplo
app.get('/', (req, res) => {
  res.send('Hello, Firebase!');
});

// Exemplo de endpoint para adicionar dados ao Firestore
app.get('/adicionar', async (req, res) => {
  try {
    // Adicionando dados no Firestore na coleção 'reparo-automotivo'
    const docRef = await db.collection('reparo-automotivo').add({
      nome: 'Usuário de teste',
      idade: 30,
    });

    res.status(201).json({ message: 'Usuário adicionado com sucesso!', id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar usuário', details: error });
  }
});

app.get('/listar', async (req, res) => {
  try {
    // Listando todos os documentos da coleção 'reparo-automotivo'
    const querySnapshot = await db.collection('reparo-automotivo').get();
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários', details: error });
  }
});

// Definir a porta do servidor
const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
