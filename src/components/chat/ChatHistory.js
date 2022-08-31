import React, { useEffect, useRef } from 'react'
import Message from './Message'

const ChatHistory = ( {messages} ) => {

  const botDivRef = useRef();
  const scrollToBottom = () => {
    botDivRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]); 

  return (
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
  )
}

export default ChatHistory