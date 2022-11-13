import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <Navmenu>
                <a><img src="/images/home-icon.svg" /><span>Home</span></a>
                <a><img src="/images/search-icon.svg" /><span>Search</span></a>
                <a><img src="/images/watchlist-icon.svg" /><span>Watchlist</span></a>
                <a><img src="/images/original-icon.svg" /><span>Originals</span></a>
                <a><img src="/images/movie-icon.svg" /><span>Movies</span></a>
                <a><img src="/images/series-icon.svg" /><span>Series</span></a>
            </Navmenu>

            <UserImg src="/images/images.png" />


        </Nav >
    )
}

export default Header

const Nav = styled.div`

height:70px;
background-color:#090b13;
display:flex;
align-items:center;
padding:0 36px;
overflow-x:hidden;
`

    ;

const Logo = styled.img`
width:80px;
`;

const Navmenu = styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;

a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;

    img{
        height:20px;

    }

    span{
        text-transform:uppercase;
        font-size:13px;
        letter-spacing:1.24px;
        position:relative;

        &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;
            transform:scaleX(0);

        }

       
    }

    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
            
        }
    }
}
`;

const UserImg = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;
`;
