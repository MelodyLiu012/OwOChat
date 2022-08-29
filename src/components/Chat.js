import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import InputBar from './InputBar'
import { useMessages } from '../util/useMessages'

const Chat = ( {username, owoSetVis, owoLevel, setOwoSetVis} ) => {

  const messages = useMessages();

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
        <div ref={botDivRef}></div> {/* dummy div for autoscroll to bottom*/}
      </div>
      
      <InputBar username={username} owoSetVis={owoSetVis} setOwoSetVis={setOwoSetVis} owoLevel={owoLevel}/>
    </div>
  )
}

export default Chat