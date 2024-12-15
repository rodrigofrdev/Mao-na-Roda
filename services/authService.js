import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig.js';

export const signupWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("userCredential", userCredential);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// export const loginWithEmailAndPassword = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     return userCredential.user;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// Caso queira adicionar outras formas de login (Google, Phone), use algo como:
// export const loginWithGoogle = async () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     return result.user;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
