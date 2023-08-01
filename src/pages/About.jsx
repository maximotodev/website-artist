import { useOutletContext } from "react-router-dom";
import './About.css'
import Accordion from 'react-bootstrap/Accordion';
import SubscriptionBtn from './SubscriptionBtn'

const About = () => {
  
  const { artistPhotos: [artistPhotos, setArtistPhotos]} = useOutletContext()

  const accordionStyles = {backgroundColor: '#1f1d1d', color: 'white'}

  return (
    <div className="about-me-page">
      <div className="about-me-hero">
        <h3 className="about-me-name">Alyssa Grey</h3>
        <img className="artist-about-img" src={artistPhotos[1].url} alt='Artist Alyssa Grey' />
        <SubscriptionBtn />
      </div>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Early life</Accordion.Header>
        <Accordion.Body style={accordionStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Professional Life</Accordion.Header>
        <Accordion.Body style={accordionStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Random Facts</Accordion.Header>
        <Accordion.Body style={accordionStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
};

export default About;
