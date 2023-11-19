import firebaseAdmin, { ServiceAccount } from 'firebase-admin';
import serviceAccount from './firebaseServiceAccount.json';

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount as ServiceAccount),
});

export default firebaseAdmin;
