import React, { useEffect, useRef, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5"

const OwOSetModal = ( {visible, setVisible, setOwoLevel} ) => {
  const sliderRef = useRef();
  const [closeHover, setCloseHover] = useState(false);

  return (
    <div 
      style={{
        display: visible ? "flex" : "none",
        width: "41%",
        height: "20%",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: "3px solid lightpink",
        borderRadius: "10px",
        padding: "0.7% 0.7% 1.7% 0.7%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "7.5%",
        right: "9%"
      }}
    >
      {/* <div style={{
        width: "100%",
        // background: "blue",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "2%",
      }}>
        <IoCloseOutline 
          style={{
            width: "1.5rem",
            height: "1.5rem",
            borderRadius: "1.5rem",
            padding: "0.1rem",
            cursor: closeHover ? "pointer" : "default",
            background: closeHover ? "rgba(255, 182, 193, 0.5)" : "none",
          }} 
          onClick={() => { setVisible(false) }}
          onMouseEnter={() => {setCloseHover(true)}}
          onMouseLeave={() => {setCloseHover(false)}}
        />
      </div> */}

      <div style={{fontSize: "1.1rem"}}>How OwO are you feeling?</div>
      
      <div style={{
        marginTop: "10%",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          fontSize: "1rem"
        }}>
          <div>owo</div>
          <div>uwu</div>
          <div>uvu</div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          fontSize: "0.6rem"
        }}>
          <div>|</div>
          <div>|</div>
          <div>|</div>
        </div>

        <input 
          ref={sliderRef}
          type="range" 
          className="owoSlider" 
          min="0"
          max="20" 
          step="10" 
          defaultValue="0"
          onInput={() => {setOwoLevel(sliderRef.current.value);}}
          onChange={() => {setOwoLevel(sliderRef.current.value);}}
        />

      </div>
      

    </div>
  )
}

export default OwOSetModal