import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import InputBar from './InputBar'

import { onValue, set } from 'firebase/database'
import { messagesRef } from '../firebase'

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      sender: "First Sender",
      content: "first message."
    }
  ]);

  const botDivRef = useRef();
  const scrollToBottom = () => {
    botDivRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // onValue(messagesRef, (snapshot) => {
  //   const data = snapshot.val();
  //   setMessages(data);
  // })
  

  return (
    <div style={{
      margin: "1%",
      width: "40%",
      height: "90%",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "7px double lightpink",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
      fontSize: "1.15rem",
    }}>
      <div className="chatHistory" style={{
        padding: "2%", 
        width: "100%",
        height: "92%",
        boxSizing: "border-box",
        overflowY: "scroll",
      }}>
        {
          messages.map((message, i) => (
            <Message 
              sender={message.sender}
              content={message.content}
            />
          ))
        }
        <div ref={botDivRef}></div> {/* dummy div */}
      </div>
      
      <InputBar />
    </div>
  )
}

export default Chat