import { useOutletContext } from "react-router-dom";
import './About.css'
import SubscriptionBtn from './SubscriptionBtn'

const About = () => {
  
  const { artistPhotos: [artistPhotos, setArtistPhotos]} = useOutletContext()

  return (
    <div className="about-me-page">
      <div className="about-me-hero">
        <h3 className="about-me-name">Hi, I&apos;m Alyssa Grey</h3>
        <img className="artist-about-img" src={artistPhotos[1].url} alt='Artist Alyssa Grey' />
        <SubscriptionBtn />
      </div>
    </div>
  )
};

export default About;
