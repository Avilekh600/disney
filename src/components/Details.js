import React from 'react'
import styled from 'styled-components'

export default function Details() {
   return (
      <Container >
         <Title>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="title" />
         </Title>
         <Control>
            
               <PlayButton>
                  <img src="/images/play-icon-black.png" alt="play" />
                  <span>PLAY</span>
               </PlayButton>
               <PlayTrailerButton>
                  <img src="/images/play-icon-white.png" alt="play" />
                  <a href='https://youtu.be/A1XWEmtsy8g' target='_blank'>TRAILER</a>
               </PlayTrailerButton>
           

               <div className='plus'>
               <AddButton>
                  <span>+</span>

               </AddButton>
               <GroupPlayButton>
                  <img src="/images/group-icon.png" alt="add" />

               </GroupPlayButton>
               </div>
            
         </Control>
         <Subtitle>
            2018  | 7m |  Family, fantasy, kids, Animation
         </Subtitle>
         <Description>
            Bao is a 2018 American computer-animated short film written and directed by Domee Shi and produced by Pixar Animation Studios. It is the first Pixar short ...
         </Description>
      </Container>
   )
}

const Container = styled.div`
  
   min-height : calc(100vh - 70px);
   padding : 0 calc(3.5vw + 5px);
   background : url('./images/slider-badging.jpg') center center /cover no-repeat fixed;
   overflow : hidden;
`
const Title = styled.div`
  
   padding-top : 20px;
   
   width : 200px;
  height : 170px;
   img{
      width : 100%;
      height : 100%;
      object-fit : contain;
     
   }

`
const Control = styled.div`
display : flex;

margin : 20px 0;
gap : 20px;
@media (max-width : 479px){
   flex-direction : column;
  
}


`
const PlayButton = styled.button`
      border-radius: 4px;
      border : none;
      display : flex;
      align-items : center;
      font-size : 15px;
      padding : 5px 24px;
      letter-spacing : 1.8px;
      background : rgba(249, 249, 249, 0.8);
      cursor : pointer;
      &:hover{
         background : rgba(249, 249, 249, 0.6);
      }

`
const PlayTrailerButton = styled(PlayButton)`
      background : rgba(0,0,0,0.3);
      border : 2px solid rgba(249,249,249,0.8);
      color : white;
      &:hover{
         background : rgba(0,0,0,0.7);
      }
      a{
         color : white;
         text-decoration : none;
      }
     

`
const AddButton = styled.button`
      
      border : none;
      background : none;
      display : flex;
      align-items : center;
      justify-content : center;
      height : 43px;
      width : 43px;
      border-radius : 50%;
      border : 2px solid rgba(249,249,249,0.8);
      background : rgba(0,0,0,0.3);
      
      span{
         color : white;
         font-size : 25px;
      }

      &:hover{
         background : rgba(0,0,0,0.7);
      }
      cursor : pointer;
`
const GroupPlayButton = styled(AddButton)`
  
        
`
const Subtitle = styled.div`
   color : white;
   margin : 20px 0;
`
const Description = styled.div`
   width : 50vw;
   color : white;
   
   font-size : 20px;
   
`