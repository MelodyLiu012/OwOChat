import React, { useEffect, useRef, useState } from 'react'
import { Message } from './Message'

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      sender: "User #1",
      content: "This is a placeholder message text."
    },
    {
      sender: "User #2",
      content: "This is the second placeholder message text."
    },
    {
      sender: "User #1",
      content: "This is a placeholder message text."
    },
    {
      sender: "User #2",
      content: "This is the second placeholder message text."
    },
    {
      sender: "User #1",
      content: "This is a placeholder message text."
    },
    {
      sender: "User #2",
      content: "This is the second placeholder message text."
    },
    {
      sender: "User #1",
      content: "This is a placeholder message text."
    },
    {
      sender: "User #2",
      content: "This is the second placeholder message text."
    },
    {
      sender: "User #1",
      content: "This is a placeholder message text."
    },
    {
      sender: "User #2",
      content: "This is the second placeholder message text."
    },
    {
      sender: "User #1",
      content: "This is a placeholder message text."
    },
    {
      sender: "User #2",
      content: "This is the second placeholder message text."
    },
    {
      sender: "User #1",
      content: "This is a placeholder message text."
    },
    {
      sender: "User #2",
      content: "This is the second placeholder message text."
    },
  ])

  const botDivRef = useRef();
  const scrollToBottom = () => {
    botDivRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      
      <div 
        contentEditable={true}
        className='textInput'
        placeholder='Swend a messwage uwu'
        style={{
          padding: "0.4rem",
          boxSizing: "border-box",
          width: "99%",
          height: "7%",
          border: "none",
          borderTop: "2px solid lightpink",
          textAlign: "left",
          overflowY: "scroll",
          scrollbarWidth: "none"
        }}
      >
      </div>
      
    </div>
  )
}

export default Chat