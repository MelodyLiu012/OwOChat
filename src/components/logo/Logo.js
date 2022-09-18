import React from 'react'

const Logo = () => {
  return (
    <div style={{
      width: "20%",
      height: "30%",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "7px double lightpink",
      borderRadius: "10px",
      padding: "2% 1% 2% 1%",
    }}>
      <img 
        src={require("../../assets/owochat-logo.png")}
        style={{
          width: "85%",
        }}
      />
      <p style={{fontSize: "1.1rem"}}>A c-chat app that owoifies your spweech!! ★~(◡△◡✿)</p>
      <br></br>
      <hr style={{borderColor: "lightpink", backgroundColor: "lightpink"}}></hr>
      <p className="credits" style={{fontSize: "1.0rem"}}>Text owoified with <a href={"https://github.com/mohan-cao/owoify-js"}>owoify.js</a></p>
    </div>
  )
}

export default Logo