import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwQM5iOt6dvVmDgDpoj29RoUxc45qW5kE",
  authDomain: "tarefas-next-53172.firebaseapp.com",
  projectId: "tarefas-next-53172",
  storageBucket: "tarefas-next-53172.appspot.com",
  messagingSenderId: "120087372090",
  appId: "1:120087372090:web:8d512a59cea1552490f003"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export { db };