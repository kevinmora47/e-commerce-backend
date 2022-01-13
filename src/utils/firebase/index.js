const admin = require('firebase-admin');
const serviceAccount = require('./config/e-commerce-backend-7bf6a-firebase-adminsdk-j2cva-7057655ce7.json');

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();

module.exports = { db };
