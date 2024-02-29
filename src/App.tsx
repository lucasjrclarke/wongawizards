import {useState} from 'react'
import Loading from './components/Loading'
import HeaderBar from './components/HeaderBar'
import Title from './components/Title'
import Board from './components/Board'
import Kits from './components/Kits'
import TeamAppButton from './components/TeamAppButton'
import Footer from './components/Footer'

function App() {

  const [videoLoaded, setVideoLoaded] = useState(false)

  document.onreadystatechange = function() {
    if (document.readyState == "complete") {
      setVideoLoaded(true);
    }
  }

  const handleVideoError = () => {
    const videoDiv = document.getElementById("video-element");

    if (document.readyState != "complete") {
      const replacementDiv = document.createElement('img');
      replacementDiv.src = "../src/assets/images/wizards-awards-day.png";
      replacementDiv.alt = "Welcome to the Wonga Park Wizards!";
      replacementDiv.id = "replacement-title-img"
      
      if (videoDiv) {
        videoDiv.replaceWith(replacementDiv);
      }
    }
    setVideoLoaded(true);
  }

  setTimeout(handleVideoError, 2000);

  window.setTimeout(() => {
    if (videoLoaded === false) {
      handleVideoError;
    }
  }, 5000);

    

  return (
    (!videoLoaded ? <Loading/> : 
      <>
        <HeaderBar/>
        <div id="main">
          <div id="landing">
            <div id="landing-photo">
              <img src="/wizards-logo-colour-cutout-with-white 1.png" alt="" />
              {/* <p>Welcome to 'The Cauldron', the home of the Wonga Park Wizards!</p> */}
            </div>
          </div>
          <div id="mission">
            <h2>Our mission</h2>
            <i>Our mission is "to provide a healthy, supportive and fun environment for young boys and girls together with committed parents and friends to help develop football and life skills."</i>
          </div>
         
          <div id="about">
            <Title text="About Us" img="cauldron-at-night.png"/>
            <div id="about-intro" className="padded-div">
              <p>At Wonga Wizards FC, we are committed to the development of the World game but we never forget that our players are on a journey of development in a raft of areas, not just football.  We hope to instill a sense of team, discipline and respect and have a lot of fun along the way.<br/><br/>If you have any questions at all about our club, please send us a note.  Or even better, why don’t you come along and see the happy young smiling faces for yourself on any Sunday morning April through to September. We can guarantee you will love the coffee.<br/><br/></p>
              <p>If you’re interested in joining us for the 2024 season, please click the link below. Registrations for the season will open in the middle of January via the Play Football website.<br/><br/></p>
              <a href="https://wongawizardsfc.teamapp.com/articles/8111971?_detail=v1" target="_blank">
                <button>Learn More</button>
              </a>
            </div>
            <Board/>
          </div>
          <div id="news">
            <Title text="News/Events" img="cauldron-at-night.png"/>
            <div id="socials" className='padded-div'>
              <p>Instagram widget goes here</p>
              {/* https://app.curator.io/source/create/details/2/34 */}
              <i>For the latest news, events, and more, visit our Team App page</i>
              <TeamAppButton/>
            </div>
            <div id="kits" className='padded-div'>
              <Kits/>
              <i>2023/2024 jerseys are available on the Macron website</i>
              <a href="https://macronvic.com.au/collections/wonga-wizards-fc" target='_blank'>
                <button>Shop Now</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <Title text="" img="cauldron-at-night-blue.png"/>
          <video id="video-element" onError={handleVideoError} controls muted autoPlay loop>
            <source src="APH WONGA PARK  SHORT TRAILER V6.mp4" type="video/mp4"/>
            /* image to go in here - make it so that it appears before after video loads/ends */
          </video>
        </div>

        <Footer/>
      </>
    )
  )
}

export default App
