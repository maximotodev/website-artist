import { Link } from "react-router-dom";
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

          <h1 className='artist-logo' to='about'>A<span className="highlight-logo">lyssa</span><br></br> G<span className="highlight-logo">rey</span></h1>

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
            <a target='_blank' rel='noreferrer' href="https://open.spotify.com/artist/3pepeKuCVRstCagyJZrGfq">
              <FontAwesomeIcon icon={faSpotify}/>
            </a>
            <a target='_blank' rel='noreferrer' href="https://www.youtube.com/@alyssagrey6324">
              <FontAwesomeIcon icon={faYoutube}/>
            </a>
          </div>
        </Zoom>
    </div>
  )
};

export default Home;

