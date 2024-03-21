// import React from 'react'

const Board = () => {

  const boardMemberNames = ["Tyler Daniels", "Amy O'Connor", "Richard Goldsmith", "Jimmy McBride", "Frank Gibellini", "Daniel George", "Annette Felicissimo", "Chris Wellock", "Rob Wardle", "Erica Wardle"];
  const boardMemberRoles = ["President", "Treasurer", "Chairman", "Head Coach", "Head of Football (U15s+)", "Vice President", "Secretary", "Head of Football (Juniors)", "Kit Coordinator", "Registrar"];
  const boardMemberEmails = ["president@wwfc.club", "info@wwfc.club", "", "", "", "vicepresident@wwfc.club", "", "", "", "registrar@wwfc.club"];
  const boardMemberImages = ["commitee/tyler-d.png", "commitee/amy-oc.png", "commitee/richard-g.png", "commitee/jimmy-m.png", "commitee/frank-g.png", "commitee/daniel-g.png", "commitee/annette-f.png", "commitee/chris-w.png", "commitee/rob-w.png", "commitee/erica-w.png"];

  
  return (
    <div id="board-members">
      {boardMemberNames.map((member, index) => (
        <div className="board-member" key={index}>
          <img src={boardMemberImages[index]} alt={`Photo of ${member}`} />
          <p className="bold">{member}</p>
          <p>{boardMemberRoles[index]}</p>
          <a>{boardMemberEmails[index]}</a>
        </div>
      ))}
    </div>
    
  )
}

export default Board