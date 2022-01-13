const { initializeApp } = require('firebase/app');
const { getFirestore, collection } = require('firebase/firestore/lite');

const firebaseConfig = {
  apiKey: 'AIzaSyD4KkxZc6zsZxcWfW531VCd3R2VxhobEoQ',

  authDomain: 'e-commerce-backend-7bf6a.firebaseapp.com',

  projectId: 'e-commerce-backend-7bf6a',

  storageBucket: 'e-commerce-backend-7bf6a.appspot.com',

  messagingSenderId: '225405716000',

  appId: '1:225405716000:web:ef8be5e5e852a3a7079e45',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Product = collection(db, 'products');

module.exports = Product;
