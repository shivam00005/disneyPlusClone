import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut

} from '../features/users/userSlice'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();
    const nevigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL

                }))
                nevigate('/')
            } else {
                dispatch(setSignOut());
                nevigate('/login')
            }
        })
    })
    const signIn = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                let user = result.user;

                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL

                }))
                nevigate('/')
            })
    }

    const signOut = () => {
        const auth = getAuth();
        auth.signOut()
            .then(() => {
                dispatch(setSignOut());
                nevigate('/login')

            })
    }
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {
                !userName ?
                    <LoginContainer>
                        <Login onClick={signIn}>Login</Login>
                    </LoginContainer>

                    :
                    <>
                        <Navmenu>
                            <a><img src="/images/home-icon.svg" /><span>Home</span></a>
                            <a><img src="/images/search-icon.svg" /><span>Search</span></a>
                            <a><img src="/images/watchlist-icon.svg" /><span>Watchlist</span></a>
                            <a><img src="/images/original-icon.svg" /><span>Originals</span></a>
                            <a><img src="/images/movie-icon.svg" /><span>Movies</span></a>
                            <a><img src="/images/series-icon.svg" /><span>Series</span></a>
                        </Navmenu>

                        <UserImg onClick={signOut} src="/images/images.png" atl='' /></>
            }



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

const Login = styled.div`
border: 1px solid #f9f9f9;
padding:8px 16px;
border-radius:4px;
letter-spacing:1.5px;
text-transform:uppercase;
background-color:rgba(0,0,0, 0.6);
transition: all 0.2s ease 0s;
cursor:pointer;

&:hover{
    background-color : #f9f9f9;
    color:#000;
    border-radius:transparent;
}
`;

const LoginContainer = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
`