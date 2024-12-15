import { signupWithEmailAndPassword } from '../services/authService.js';

export const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await signupWithEmailAndPassword(email, password);
    res.status(200).json({ message: 'Usuário criado com sucesso', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
