import { useState, useEffect } from 'react'
import './Layout.css'
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from './Footer'

const Layout = () => {

  const [isMute, setIsMute] = useState(true);
  const [albums, setAlbums] = useState([])
  const [artistPhotos, setArtistPhotos] = useState([])
  const [accessToken, setAccessToken] = useState('')


  const CLIENT_ID = 'fd5a6414fb164dac82a7fa7c46ff1713'
  const CLIENT_SECRET = '0880408c446a4f4e8a88ad64a7c09124'

// API Access Token
  useEffect(() => {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(res => res.json())
      .then(data => {
        setAccessToken(data.access_token)
      })
      .catch(err => console.log(err))
  },[])

// Get artists photos

useEffect( ()=> {
  accessToken &&
  fetch('https://api.spotify.com/v1/artists/3pepeKuCVRstCagyJZrGfq', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    })
      .then(res => res.json())
      .then(data => setArtistPhotos(data.images))
      .catch(err => console.log(err))
  }, [accessToken])

// Get artists albums
  useEffect( ()=> {
    accessToken &&
    fetch('https://api.spotify.com/v1/artists/3pepeKuCVRstCagyJZrGfq/albums', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      })
        .then(res => res.json())
        .then(data => setAlbums(data.items))
        .catch(err => console.log(err))
    }, [accessToken])

  return (
    <div className="layout">
      <Header />
      <Outlet context={
        {
        isMute: [isMute, setIsMute],
        accessToken: [accessToken, setAccessToken],
        albums: [albums, setAlbums],
        artistPhotos: [artistPhotos, setArtistPhotos]
        }}
      />
      <Footer />
    </div>
  )
};

export default Layout;
