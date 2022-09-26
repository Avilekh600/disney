import React from 'react'
import styled from 'styled-components'

export default function Viewers() {
  return (
    <Container>
         <Wrap>
            <img src="./images/viewers-marvel.png" alt="viewers" />
         </Wrap>
         <Wrap>
            <img src="./images/viewers-starwars.png" alt="viewers" />
         </Wrap>
         <Wrap>
            <img src="./images/viewers-disney.png" alt="viewers" />
         </Wrap>
         <Wrap>
            <img src="./images/viewers-national.png" alt="viewers" />
         </Wrap>
         <Wrap>
            <img src="./images/viewers-pixar.png" alt="viewers" />
         </Wrap>
    </Container>
  )
}

const Container = styled.div`
    margin-top : 30px;
    padding : 25px 0 26px;
     display : flex;
     justify-content : space-around;
     gap : 20px;
`
const Wrap = styled.div`
 border-radius : 10px;
 border : 3px solid rgba(249,249,249,0.1);
 cursor : pointer;
 box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px,
               rgb(0 0 0 /73%) 0px 16px 10px -10px;
transition : all 250ms;
  img{
    width :100%;
    height : 100%;
    object-fit : cover;

  }
  &:hover{
    border : 3px solid rgba(249,249,249,0.8);
    transform : scale(1.05);
  }
`