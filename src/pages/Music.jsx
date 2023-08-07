import { useOutletContext } from "react-router-dom";
import './Music.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Link } from "react-router-dom";

const Music = () => {

  const { albums: [albums] } = useOutletContext();

  // console.log(albums)

  const slideElements = albums.map(album => (
  <Carousel.Item key={album.id}>
   <Link style={{textDecoration: 'none'}} to={album.external_urls.spotify}>
    <h1 className="album-name">{album.name}</h1>
   <img style={{borderRadius: '10px'}} src={album.images[1].url} alt={album.name}/>
   </Link>
   </Carousel.Item> 
   ))
    
   
  


  return (
    <div className="music wrapper">
      <Carousel>
        {slideElements}
      </Carousel>
    </div>
      
  )
};

export default Music;
