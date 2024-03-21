// import React from 'react'
import Sponsors from "./Sponsors"

const Footer = () => {
  return (
    <div id="footer">
        <div id="sponsors">
          <Sponsors/>
        </div>
        <div id="footer-details">
            <img src="blue-wizards-footer-logo-1.png" alt="Wonga Park Wizards logo" />
            <p>President - Tyler Daniels</p>
            <a>president@wwfc.club</a>
            <a>0412956961<br/><br/></a>
            <p>Wonga Wizards FC<br/>PO Box 5191, Launders Ave, Wonga Park,<br/>Victoria, Australia, 3115<br/><br/></p>
            <p>Wonga Park Wizards FC. Copyright &#169; 2024. Website by Lucas Clarke.</p>
            <a href="https://docs.google.com/document/d/e/2PACX-1vSA67SkgirGQkURbWmsGkqRxpltuEbHUKAG84Dgw2tghZbjLnisHNe0VxpLOxoVHOJMQY8TqXamGHgS/pub" target="_blank">Privacy Policy</a>
        </div>
      </div>
  )
}

export default Footer