import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCepmUzvXeOrP0CCMuwqS9APYNnVRIw8Y",
  authDomain: "netflix-168bc.firebaseapp.com",
  projectId: "netflix-168bc",
  storageBucket: "netflix-168bc.appspot.com",
  messagingSenderId: "729663866211",
  appId: "1:729663866211:web:2e0b939c3c0ee109547f56"
};

const app = initializeApp(firebaseConfig); // chứa thông tin cần thiết đến firebase 
const auth = getAuth(app); // lấy dịch vụ xác thực 
const db = getFirestore(app); // lấy cơ sở dữ liệu 

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, logout, signup };
