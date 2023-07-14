import React from "react"
import { Link } from "react-router-dom";
import './Home.css'
import videoBg from '../assets/alyssa-grey-video2.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="home">
        <div className="overlay"></div>
        <video className='main-video' src={videoBg} autoPlay loop muted />
        <div className="content">
          <Link className='artist-logo' to='about'>Alyssa Grey</Link>
          {/* <p className="artist-description">Vibeologist 👾 🎵</p > */}
          {/* <button className="action-btn">Vibe with me</button> */}
          <div className="social-media">
            <a target='_blank' href="https://www.instagram.com/_alyssagrey/">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a target='_blank' href="https://www.tiktok.com/@_alyssagrey">
              <FontAwesomeIcon icon={faTiktok}/>
            </a>
            <a target='_blank' href="https://open.spotify.com/artist/3pepeKuCVRstCagyJZrGfq">
              <FontAwesomeIcon icon={faSpotify}/>
            </a>
            <a target='_blank' href="https://www.youtube.com/@alyssagrey6324">
              <FontAwesomeIcon icon={faYoutube}/>
            </a>
            <a target='_blank' href="#">
            <FontAwesomeIcon icon={faMicrophone} />
            </a>
          </div>
        </div>
    </div>
  )
};

export default Home;
