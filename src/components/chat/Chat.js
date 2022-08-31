import React, { useEffect, useRef, useState } from 'react'
import InputBar from './InputBar'
import { useMessages } from '../../util/useMessages'
import OwOSetModal from './OwOSetModal'
import ChatHistory from './ChatHistory'

const Chat = ( {
  username, 
  owoSetVis, 
  owoLevel, 
  setOwoLevel, 
  setOwoSetVis,
  owoCount,
  setOwoCount,
  uwuCount,
  setUwuCount
} ) => {

  const messages = useMessages();
  
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
      position: 'relative'
    }}>

      <ChatHistory messages={messages}/>

      <OwOSetModal visible={owoSetVis} setVisible={setOwoSetVis} setOwoLevel={setOwoLevel}/>

      <InputBar 
        username={username} 
        owoSetVis={owoSetVis} 
        setOwoSetVis={setOwoSetVis} 
        owoLevel={owoLevel}
        owoCount={owoCount}
        setOwoCount={setOwoCount}
        uwuCount={uwuCount}
        setUwuCount={setUwuCount}/>
    </div>
  )
}

export default Chat