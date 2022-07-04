// import { useState, useEffect} from 'react'
// import axios from 'axios'
import './App.css';
import Header from './components/header/Header.js';
import Carousel from './components/carousel/Carousel.js'
import Row from './components/row/Row.js'
import Explore from './components/explore/Explore.js'
import {useSpring, animated as a} from 'react-spring'


function App() {

  // // GET TOKEN ON REDIRECT FROM SPOTIFY SIGN IN
  
  // const [token, setToken] = useState('')

  // useEffect(() => {
  //   const hash = window.location.hash

  //   let token = window.localStorage.getItem('token')

  //   if(!token && hash){
  //     token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

  //     // SET TOKEN IN LOCAL STORAGE

  //     window.location.hash = ""
  //     window.localStorage.setItem('token', token)
      
      
  //   }

  //   setToken(token)
  //   console.log(token)
  // }, [])
  
  //   const getData = async (e) => {
  //     e.preventDefault()
  //     const {data} = await axios.get("https://api.spotify.com/v1/search", {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       },
  //       params:{
  //         q: "searchKey",
  //         type: "artist"
  //       }
  //     })
  //   }
  //   console.log(data)
  //   getData()

  

  return (
    <a.div className="App" id="app">
      <Header />
      <Carousel />
      <Row />
      <Explore />
      <Row />
      <Row />
    </a.div>
  );
}

export default App;
