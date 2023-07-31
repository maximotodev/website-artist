import { useOutletContext } from "react-router-dom";
import './About.css'

const About = () => {
  const { artistPhotos: [artistPhotos, setArtistPhotos]} = useOutletContext()
  return (
    <div className="about-me-page">
      <img className="artist-about-img" src={artistPhotos[1].url} alt='Artist Alyssa Grey' />
      <h4>Alyssa Grey</h4>
      <p style={{lineHeight: '1.6', fontSize: '.75rem'}}><span style={{fontSize: '1.69rem'}}>L</span>orem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dicta laudantium neque corporis. Nesciunt et fugiat, ut voluptatum labore dolorum doloribus voluptatem quam praesentium ipsa.</p>
    </div>
  )
};

export default About;
