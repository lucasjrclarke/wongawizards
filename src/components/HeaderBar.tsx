import {useState, useEffect} from 'react'
import TeamAppButton from "./TeamAppButton"

const HeaderBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  document.getElementById("hamburger")?.addEventListener("click", () => {
    document.getElementById("mobile-menu")?.classList.toggle('menu-closed');
  });

  // from https://stackoverflow.com/questions/62954765/how-to-do-conditional-rendering-according-to-screen-width-in-react
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     // subscribe to window resize event "onComponentDidMount"
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       // unsubscribe "onComponentDestroy"
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);
   if (width > breakpoint) {
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
    );
    // end of copied code
   } else {
   return (
    <div id="header-bar-mobile" className='mobile-header'>
      <img src="wizards-logo-cutout-white-border.png" alt="Wonga Park Wizards logo" />
      <div id="hamburger">
        <button></button>
      </div>
      <div id="mobile-menu" className="menu-closed">
        <ul>
          <a href="."><li className="nav-item">Home</li></a>
          <a href="#mission"><li className="nav-item">About Us</li></a>
          <a href="https://websites.mygameday.app/club_info.cgi?c=0-8746-124175-0-0&a=TEAMS&" target="_blank"><li className="nav-item">Fixtures</li></a>
          <a href="https://wongawizardsfc.teamapp.com/articles/8111971?_detail=v1" target="_blank"><li className="nav-item">Registration</li></a>
        </ul>
      </div>
       
    </div>
   )};


  
}

export default HeaderBar