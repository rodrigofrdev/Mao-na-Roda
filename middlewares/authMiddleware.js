import { auth } from '../utils/firebaseConfig.js';

const checkAuth = (req, res, next) => {
  const user = auth.currentUser;
  console.log("User: ", user);
  if (user) {
    req.user = user; // Adicionando o usuário autenticado ao objeto de requisição
    next();
  } else {
    res.status(401).json({ message: 'Usuário não autenticado' });
  }
};

export default checkAuth;
