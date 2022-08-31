import { set } from 'firebase/database';
import React, { useRef, useState } from 'react'
import { MdEdit } from "react-icons/md"
import { TbHelp } from 'react-icons/tb'
import HelpModal from './HelpModal';

const User = ( {
  username, 
  setUsername, 
  owoCount,
  setOwoCount,
  uwuCount,
  setUwuCount
} ) => {

  const [editMode, setEditMode] = useState(false);
  const [editHover, setEditHover] = useState(false);
  const [helpHover, setHelpHover] = useState(false);

  const nameRef = useRef();

  return (
    <div style={{
      width: "20%",
      height: "20%",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "7px double lightpink",
      borderRadius: "10px",
      padding: "2% 1% 2% 1%",
      display: 'flex',
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{fontSize: "1.5rem"}}>About You!! :D</div>

      <div style={{
        margin: "3%", maxWidth: "100%", overflow: "hidden"
      }}>
        ✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿✿
      </div>
      {/* <hr style={{borderColor: "lightpink", backgroundColor: "lightpink"}}></hr> */}
      <table>
        <tr>
          <td style={{width: "6rem"}}>[Nickname]</td> 
          <td 
            ref={nameRef}
            contentEditable={editMode}
            className="aboutData"
            style={{
              borderBottom: editMode ? "1px solid rgba(180, 81, 117, 0.5)" : "none",
            }}
            // onChange={() => {setUsername(nameRef.current.clientText)}}
          >
            {username}
          </td>
          <td>
            <MdEdit 
              style={{
                cursor: "pointer",
                width: "1.1rem",
                height: "1.1rem",
                padding: "0.1rem",
                borderRadius: "1.05rem",
                cursor: editHover ? "pointer" : "default",
                background: editHover ? "rgba(255, 182, 193, 0.5)" : "none",
              }}
              onClick={() => { 
                setEditMode(!editMode); // state changes are made asynchronously, so on clicking to turn
                if (editMode) {         // off edit mode, editMode=true still. the state (likely) hasnt changed yet
                  setUsername(nameRef.current.textContent);
                }
              }}
              onMouseEnter={() => {setEditHover(true)}}
              onMouseLeave={() => {setEditHover(false)}}
            />
          </td>
        </tr>
        <tr>
          <td>[owo count] </td>
          <td className='aboutData'>{owoCount}</td>
          <td style={{
            position: "relative", 
          }}>
            <TbHelp 
              style={{
                cursor: "pointer",
                width: "1.1rem",
                height: "1.1rem"
              }}
              onMouseEnter={() => {setHelpHover(true)}}
              onMouseLeave={() => {setHelpHover(false)}}
            />
            <HelpModal visible={helpHover}/>
          </td>
        </tr>
        <tr>
          <td>[uwu count] </td>
          <td className='aboutData'>{uwuCount}</td>
        </tr>
        
      </table>
      
      
    </div>
  )
}

export default User