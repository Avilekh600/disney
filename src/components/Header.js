import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
  return (
    <Nav>
        <Logo src="./images/logo.svg" alt="logo"  />
        <Menu> 
               <a> 
                <img src="/images/home-icon.svg" alt="home" />
                <span>HOME</span>
               </a>
               <a> 
                <img src="/images/search-icon.svg" alt="search" />
                <span>SEARCH</span>
               </a>
               <a> 
                <img src="/images/watchlist-icon.svg" alt="watchlist" />
                <span>WATCHLIST</span>
               </a>
               <a> 
                <img src="/images/original-icon.svg" alt="original" />
                <span>ORIGINAL</span>
               </a>
               <a> 
                <img src="/images/movie-icon.svg" alt="movies" />
                <span>MOVIES</span>
               </a>
               <a> 
                <img src="/images/series-icon.svg" alt="series" />
                <span>SERIES</span>
               </a>
        </Menu>
        <Link to={`/`}>
        <UserImg src="/images/profile.jpg" alt="user" />
        </Link>
    </Nav>
  )
}


const Nav = styled.div`
  background-color : #090b13;
  height : 70px;
  display : flex;
  align-items : center;
  justify-content : space-between;
  padding : 0 35px;
  color : white;
 

`
const Logo = styled.img`
   width : 80px;
`
const Menu = styled.div`
        display : flex;
        align-items : center;
        
        font-size : 13px;
        letter-spacing : 1.4px; 
        margin-left : 25px;
 
    a{
        cursor : pointer;
        display : flex;
        align-items : center;
        padding : 0 10px;
        position : relative;
        
    }
    img{
        height : 20px;
    }
   a:hover{
    text-decoration : underline;
   }
   
   @media (max-width : 900px){
    display :none;
  
   }
   
    
`

const UserImg = styled.img`
  height : 30px;
  cursor : pointer;
  
`
