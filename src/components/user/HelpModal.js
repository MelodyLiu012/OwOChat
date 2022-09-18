import React from 'react'

const HelpModal = ( {visible} ) => {
  return (
    <div 
      style={{
        position: "absolute",
        background: "rgba(255, 255, 255, 0.8)",
        width: "9rem",
        height: "4rem",
        fontSize: "0.8rem",
        border: "2px lightpink solid",
        right: "0%",
        // left: "50%",
        padding: "5%",
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <div className="helpParagraph">
        Only owo's and uwu's from messages before owoifying are counted. 
      </div>
      
    </div>
  )
}

export default HelpModal