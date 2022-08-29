import React, { useEffect, useRef } from 'react'

const OwOSetModal = ( {visible, setOwoLevel} ) => {
  const sliderRef = useRef();

  return (
    <div style={{
      display: visible ? "flex" : "none",
      width: "15%",
      height: "11%",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      border: "3px solid lightpink",
      borderRadius: "10px",
      padding: "1.5% 0.7% 1.5% 0.7%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      
    }}>
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