import { Link, NavLink } from "react-router-dom";
import './Home.css'
import videoBg from '../assets/alyssa-grey-video2.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faVolumeHigh, faVolumeOff } from '@fortawesome/free-solid-svg-icons'
import { Zoom } from "react-awesome-reveal";

import { useOutletContext } from "react-router-dom"

const Home = () => {
  const { isMute: [isMute, setIsMute] } = useOutletContext();

  const toggleMute = () => {
    setIsMute(prev => !prev)
  }
  return (
    <div className="home">
        <div className="overlay"></div>
        <video className='main-video' src={videoBg} autoPlay loop muted={isMute} playsInline />

        <Zoom
          duration={1200}>

          <NavLink className='artist-logo' to='about'>A
            <span className="highlight-logo">lyssa</span><br></br> G<span className="highlight-logo">rey</span></NavLink>

          <div className="social-media">
            <Link to='https://www.instagram.com/_alyssagrey/'>
              <FontAwesomeIcon icon={faInstagram}/>
            </Link>
            <Link to='https://www.tiktok.com/@_alyssagrey'>
              <FontAwesomeIcon icon={faTiktok}/>
            </Link>
            <a onClick={toggleMute} href="#">
            <FontAwesomeIcon icon={ isMute ? faVolumeOff : faVolumeHigh } />
            </a>
            <NavLink to='https://open.spotify.com/artist/3pepeKuCVRstCagyJZrGfq'>
              <FontAwesomeIcon icon={faSpotify}/>
            </NavLink>
            <NavLink to='https://www.youtube.com/@alyssagrey6324'>
              <FontAwesomeIcon icon={faYoutube}/>
            </NavLink>
          </div>
        </Zoom>
    </div>
  )
};

export default Home;

