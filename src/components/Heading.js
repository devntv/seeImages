import React from 'react'
import styled from "styled-components"

const Header = styled.header`

max-width: 70rem;
margin: 2rem auto;
text-align: center;


`;

const H1 =styled.h1`

font-family: 'Lato', sans-serif;
font-family: 'Poppins', sans-serif;;
margin-bottom:1em;
background-color: #282c34;
border-radius: 5px;
color:#00e59b;

`;
const H6 =styled.p`
color:tomato

`;
export const  Heading = () => {
    return (
        <Header>
            <H1> Vdz <span style={{color:"#61dafb"}}>❖</span> Images </H1>
            <p>💕</p>
            <br/>
            <H6> You can watch the picture <span style={{color:"#00e59b"}}>forever</span> without breaking </H6>
            
        </Header>
    )
}


