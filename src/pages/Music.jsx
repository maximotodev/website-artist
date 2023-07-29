import { useOutletContext } from "react-router-dom";
import './Music.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Link } from "react-router-dom";

const Music = () => {

  const { albums: [albums, setAlbums] } = useOutletContext();

  console.log(albums)

  const slideElements = albums.map(album => (
  <Carousel.Item key={album.id}>
    <Link to={album.external_urls.spotify}>
    <Carousel.Caption>
      <button>{album.name}</button>
    </Carousel.Caption>
    <img style={{borderRadius: '10px', width: '100%'}} src={album.images[1].url} alt={album.name}/>
    </Link>
  </Carousel.Item>))

  return (
      <Carousel>
        {slideElements}
      </Carousel>
  )
};

export default Music;
