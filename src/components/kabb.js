import React from 'react'
import styled from 'styled-components'

export default function 
() {
  return (
    <Container >
    <Title>
       <img src="./images/kabbadilogo.png" alt="title" />
    </Title>
    <Control>
       
          <PlayButton>
             <img src="/images/play-icon-black.png" alt="play" />
             <span>PLAY</span>
          </PlayButton>
          <PlayTrailerButton>
             <img src="/images/play-icon-white.png" alt="play" />
             <a href='https://youtu.be/zOJwj88rQuE' target='_blank'>TRAILER</a>
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
       2022  | 7m |  Family, fantasy, comedy
    </Subtitle>
    <Description>
    After the events of Kabaddi 3, Kaji now doesn't seek love as he is suffering from the pain of his previous relationships. The movie revolves around Shanti (a new character), Kaji, and Bam Kaji.
    </Description>
 </Container>
  )
}


const Container = styled.div`
   min-height : calc(100vh - 70px);
   padding : 0 calc(3.5vw + 5px);
   background : url('./images/kabbadibg.jpg') center center /cover no-repeat fixed;
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