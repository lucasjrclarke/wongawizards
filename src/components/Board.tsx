// import React from 'react'

const Board = () => {

  const boardMemberNames = ["Tyler Daniels", "Tyler Damiels"];
  const boardMemberRoles = ["President", "President 2"];
  const boardMemberEmails = ["president@wwfc.com.au", "president2@wwfc.com.au"];
  const boardMemberImages = ["../src/assets/default-profile-pic.png", "../src/assets/default-profile-pic.png"];

  
  return (
    <div id="board-members">
      {boardMemberNames.map((member, index) => (
        <div className="board-member" key={index}>
          <img src={boardMemberImages[index]} alt={`Photo of ${member}`} />
          <p className="bold">{member}</p>
          <p>{boardMemberRoles[index]}</p>
          <a href={boardMemberEmails[index]}>{boardMemberEmails[index]}</a>
        </div>
      ))}
    </div>
    
  )
}

export default Board