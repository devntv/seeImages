import React,{useState,useEffect} from 'react';
import {Heading} from "./components/Heading";
import {Loader} from "./components/Loader";
import {Unplashimg} from "./components/Unplashimg";
import axios from "axios"
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";
import Zoom from "react-reveal/Zoom";
import InfiniteScroll from 'react-infinite-scroll-component';
//style
const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    font-family: sans-serif;
  }

`;

const WarapperImage = styled.section`

  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px

`;

function App() {
  const [images, setImages] = useState([])

  useEffect(()=>{
    fetchImages();
    // .catch(err =>console.log(err))
  },[])
  const fetchImages =() =>{
    const apiRoot ="https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    
    axios
    .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
    .then(res =>setImages([...images, ...res.data])
    )
  }
  return (
    <div className="App">
          <Heading/>
          <GlobalStyle />
          <InfiniteScroll  dataLength={images.length} next ={fetchImages} hasMore={true} loader ={<Loader/>}>
          
          <Zoom bottom>
          <WarapperImage >
          {images.map( (image) =>(
            <Unplashimg url={image.urls.thumb} key={image.id}/>
          ))}
          </WarapperImage>
          </Zoom>
          </InfiniteScroll>
    </div>
  );
}

export default App;
