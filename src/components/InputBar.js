import React, { useState, useRef } from 'react'
import { TbSend } from "react-icons/tb"
import { writeMessage } from '../firebase'
import { MdOutlineSettingsSuggest } from 'react-icons/md'

const InputBar = () => {
  const [hoveringSend, setHoveringSend] = useState(false);
  const [hoveringSet, setHoveringSet] = useState(false);


  const inputRef = useRef();
  // const sendBtnRef = useRef();

  return (
    <div style={{
      width: "100%",
      height: "7%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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
      ></div>


      <div 
        // ref={sendBtnRef}
        onMouseEnter={() => { setHoveringSet(true); }}
        onMouseLeave={ () => { setHoveringSet(false); } }
        onClick={() => { 
          // TODO: make uwu setting modal appear
        }}
        style={{
          height: "90%",
          width: "9%"/*(sendBtnRef.current.clientHeight).toString() + "px"*/,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "0.4rem solid rgba(0,0,0,0)",
          borderRadius: "1000px",
          backgroundColor: hoveringSet ? "rgba(255, 182, 193, 0.5)" : "rgba(0,0,0,0)",
          cursor: "pointer", // dont need "hovering" since pointer doesnt show outside of this div anyway
      }}>
        <MdOutlineSettingsSuggest style={{width: "100%", height: "100%"}} />
      </div>
      <div 
        // ref={sendBtnRef}
        onMouseEnter={() => { setHoveringSend(true); }}
        onMouseLeave={ () => { setHoveringSend(false); } }
        onClick={() => { 
          if (inputRef.current.innerText != "") {
            writeMessage("Test User", inputRef.current.innerText); 
            inputRef.current.innerText = "";
          }
        }}
        style={{
          height: "90%",
          width: "9%"/*(sendBtnRef.current.clientHeight).toString() + "px"*/,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "0.5rem solid rgba(0,0,0,0)",
          borderRadius: "1000px",
          backgroundColor: hoveringSend ? "rgba(255, 182, 193, 0.5)" : "rgba(0,0,0,0)",
          cursor: "pointer", // dont need "hovering" since pointer doesnt show outside of this div anyway
      }}>
        <TbSend style={{width: "100%", height: "100%"}} />
      </div>
  
    </div>
  )
}

export default InputBar