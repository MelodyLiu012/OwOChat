import React, { useState } from 'react'
import { MdEdit } from "react-icons/md"
import { TbHelp } from 'react-icons/tb'

const User = ( {username} ) => {
  const [editMode, setEditMode] = useState(false);

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
            contentEditable={editMode}
            className="aboutData"
            style={{
              borderBottom: editMode ? "1px solid rgba(180, 81, 117, 0.5)" : "none",
            }}
          >
            {username}
          </td>
          <td>
            <MdEdit 
              onClick={() => { setEditMode(!editMode) }}
            />
          </td>
        </tr>
        <tr>
          <td>[owo count] </td>
          <td className='aboutData'>{"1328759287483000"}</td>
          <td><TbHelp /></td>
        </tr>
        <tr>
          <td>[uwu count] </td>
          <td className='aboutData'>{"2"}</td>
        </tr>
        
      </table>
      
      
    </div>
  )
}

export default User