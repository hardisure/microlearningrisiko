import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBIwePIzhgX4iWXpi9jQCWoaAN34L1M_IY",
    authDomain: "microlearningrisiko.firebaseapp.com",
    databaseURL: "https://microlearningrisiko-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "microlearningrisiko",
    storageBucket: "microlearningrisiko.firebasestorage.app",
    messagingSenderId: "78881395903",
    appId: "1:78881395903:web:0115c92d89c91945a5a20a",
    measurementId: "G-84SB1VJWCB"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, onValue };
