import React, { useState, useRef } from 'react'
import { TbSend } from "react-icons/tb"
import { writeMessage } from '../firebase'

const InputBar = () => {
  // const [hovering, setHovering] = useState(false);

  const inputRef = useRef();

  return (
    <div style={{
      width: "100%",
      height: "7%",
      display: "flex",
      justifyContent: "space-between",
      borderTop: "2px solid lightpink",
    }}>
      <div 
        ref={inputRef}
        contentEditable={true}
        className='textInput'
        placeholder='Swend a messwage uwu'
        style={{
          padding: "0.4rem",
          boxSizing: "border-box",
          width: "90%",
          height: "100%",
          border: "none",
          textAlign: "left",
          overflowY: "scroll",
          scrollbarWidth: "none"
        }}
      />
      <TbSend 
        style={{
          width: "9%",
          height: "55%",
          border: "0.5rem solid rgba(0,0,0,0)",
          // cursor: hovering ? "pointer" : "default",
          cursor: "pointer", // dont need "hovering" since pointer doesnt show outside of this div anyway
        }}
        // onMouseEnter={() => { setHovering(true) }}
        // onMouseLeave={ () => { setHovering(false) } }
      onClick={() => { 
        if (inputRef.current.innerText != "") {
          writeMessage("Test User", inputRef.current.innerText); 
          inputRef.current.innerText = "";
        }
        // console.log(inputRef.current.innerText);
      }} 
      />
    </div>
  )
}

export default InputBar