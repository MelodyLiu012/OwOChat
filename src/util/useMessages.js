import { useEffect, useState } from 'react';

import { onValue } from 'firebase/database'
import { messagesRef } from '../firebase'


const JSONtoArray = (data) => {
  const result = [];
  for (const [key, value] of Object.entries(data)) {
    result.push(value);
  }
  return result;
}

const getMessages = (callback) => {  // CALLBACK HAS TO BE "setMessage()"!!!
  return onValue(messagesRef, (snapshot) => { // returns unsubscribe function
    console.log("onValue");
    const data = snapshot.val();
    callback(JSONtoArray(data));
  });
}


export const useMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = getMessages(setMessages);
    return unsubscribe; // func returned inside useEffect is cleanup func
  }, []);

  return messages;
}


