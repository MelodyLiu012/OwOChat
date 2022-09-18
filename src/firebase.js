import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "owochat-3acf9.firebaseapp.com",
  projectId: "owochat-3acf9",
  storageBucket: "owochat-3acf9.appspot.com",
  messagingSenderId: "1067896324132",
  appId: "1:1067896324132:web:6c87710a7d08bda21b18b1",
  databaseURL: "https://owochat-3acf9-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database 
const db = getDatabase(app);

export const messagesRef = ref(db, "messages/");

export const writeMessage = (sender, content) => {
  console.log("Writing message attempted.")
  // const messagesRef = ref(db, "messages/")
  try {
    push(messagesRef, {
      sender: sender,
      content: content
    })
    console.log("Writing message successful.")
  }
  catch (e) {
    console.log("Error writing message: " + e);
  }
}
