import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './serviceAccountKey.json'; // Caminho para o arquivo da chave da conta de serviço

// Inicializa o Firebase Admin SDK com as credenciais da conta de serviço
const app = initializeApp({
  credential: cert(serviceAccount), // Usando a chave da conta de serviço
});

// Exportando as instâncias do Firestore para uso posterior
const firestore = getFirestore(app);

module.exports = { firestore };