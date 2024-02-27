// import React from 'react'
import TeamAppButton from "./TeamAppButton"

const HeaderBar = () => {
  return (
    <div id="header-bar">
        <div id="header-bar--left">
            <img src="wizards-logo-cutout-white-border.png" alt="Wonga Park Wizards logo" />
            <ul id="nav">
                <a href="."><li className="nav-item">Home</li></a>
                <a href="#mission"><li className="nav-item">About Us</li></a>
                <a href="https://websites.mygameday.app/club_info.cgi?c=0-8746-124175-0-0&a=TEAMS&" target="_blank"><li className="nav-item">Fixtures</li></a>
                <a href="https://wongawizardsfc.teamapp.com/articles/8111971?_detail=v1" target="_blank"><li className="nav-item">Registration</li></a>
            </ul>
        </div>
        <div id="header-bar--right">
            <TeamAppButton/>
        </div>
    </div>
  )
}

export default HeaderBar