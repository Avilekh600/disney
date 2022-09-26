import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Login() {
  return (
    <Container>
        <Wrap>
                <Content>
                    <img src="/images/cta-logo-one.svg" alt="logo" />
                </Content>
                <Link to={`/home`}>  
                <Button> 
                    GET   ALL   THERE
                </Button>
                </Link>
                <Description>
                Premier Access® purchases can be made on united.com anytime from booking through check-in, at an airport kiosk, on your mobile device or by calling the United Customer Contact Center,
                </Description>
                <Content>
                    <img src="/images/cta-logo-two.png" alt="logo" />
                </Content>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
      display : flex;
      align-items : center;
      justify-content : center;
       padding : 0 calc(3.5vw + 5px);
       min-height : calc(100vh - 70px);
       background : url('/images/login-background.jpg') center center /cover no-repeat fixed;

`
const Wrap = styled.div`

`
const Content = styled.div`
   
   img{
    width : 50vw;
    height : 100%;
    object-fit : cover;
    @media (max-width : 900px){
        width : 80vw;
      
       }
   }
   margin : 20px 0;

`
const Description = styled.div`
     color : rgba(249,249,249,0.7);
     width : 50vw;
     font-size : 11px;
     @media (max-width : 900px){
        width : 80vw;
      
       }
     text-align : center;
     margin : 5px 0;
     font-style: oblique;

`
const Button = styled.button`
 background : blue;
 font-weight : bold;
 color : white;
 width : 50vw;
 padding : 15px 8px;
 border : 4px;
 cursor : pointer;
 @media (max-width : 900px){
    width : 80vw;
  
   }
   &:hover{
    background :rgb(0, 0, 167);
   }



`
