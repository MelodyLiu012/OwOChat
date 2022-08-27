import React from 'react'

export const Message = ( {sender, content}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: "column",
      alignItems: "flex-start",
      marginBottom: "2%"
    }}>
      <div className='name'>
        <span style={{}}>✿</span>
        &nbsp;{sender}&nbsp;
        <span style={{}}>✿</span>
      </div>

      <div className='msgContent'>{content}</div>
    </div>
  )
}
