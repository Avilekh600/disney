import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default function Movies() {





  return (
    <Container>

      <h4>Recommendation for you</h4>

      <Content>


        <Wrap>
          <Link to={`/details`}>
            <img src="./images/bao.jpg" alt="viewers" />
          </Link>
          
        </Wrap>
        <Wrap>
          <Link to={`/kabbadi`}>
            <img src="./images/kabbadi.jpg" alt="viewers" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/premgeet`}>
            <img src="./images/premgeet.jpg" alt="viewers" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/details`}>
            <img src="./images/bao.jpg" alt="viewers" />
          </Link>
         </Wrap>
        <Wrap>
          <Link to={`/details`}>
            <img src="./images/bao.jpg" alt="viewers" />
          </Link>
          
        </Wrap>
        <Wrap>
          <Link to={`/kabbadi`}>
            <img src="./images/kabbadi.jpg" alt="viewers" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/premgeet`}>
            <img src="./images/premgeet.jpg" alt="viewers" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/details`}>
            <img src="./images/bao.jpg" alt="viewers" />
          </Link>
         </Wrap>
        <Wrap>
          <Link to={`/details`}>
            <img src="./images/bao.jpg" alt="viewers" />
          </Link>
          
        </Wrap>
        <Wrap>
          <Link to={`/kabbadi`}>
            <img src="./images/kabbadi.jpg" alt="viewers" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/premgeet`}>
            <img src="./images/premgeet.jpg" alt="viewers" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/details`}>
            <img src="./images/bao.jpg" alt="viewers" />
          </Link>
         </Wrap>
        

       
       
       


      </Content>

    </Container>
  )

}

const Container = styled.div`

`
const Content = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : space-around;
    gap : 20px;
    padding : 10px 0;
    
    

`
const Wrap = styled.div`
  flex : 20%;

   img{
     border-radius : 10px;
     border : 3px solid rgba(249,249,249,0.1);
     cursor : pointer;
     box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px,
              rgb(0 0 0 /73%) 0px 16px 10px -10px;
     transition : all 250ms;
     width : 100%;
     height : 100%
     object-fit : cover;
     &:hover{
     border : 3px solid rgba(249,249,249,0.8);
     transform : scale(1.05);
    }

   }
`
