import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

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
  }, [userName])
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
        !userName ? (

          <Login onClick={signIn}>Login</Login>

        ) : (
          <>
            <NavMenu>


              <Link to='/'><img src="/images/home-icon.svg" alt="home" /><span>Home</span></Link>
              <Link to='#'><img src="/images/search-icon.svg" alt="search" /><span>Search</span></Link>
              <Link to='#'><img src="/images/watchlist-icon.svg" alt="watchlist" /><span>Watchlist</span></Link>
              <Link to='/original'><img src="/images/original-icon.svg" alt="originals" /><span>Originals</span></Link>
              <Link to='/movies'><img src="/images/movie-icon.svg" alt="movie" /><span>Movies</span></Link>
              <Link to='#'><img src="/images/series-icon.svg" alt="series" /><span>Series</span></Link>



            </NavMenu>

            <SignOut>
              <UserImg src={userPhoto} alt={userName} />
              <DropDown>
                <span onClick={signOut}>Sign out</span>
              </DropDown>
            </SignOut>



          </>
        )
      }



    </Nav >
  )
}



const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.img`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 30px;
      min-width: 30px;
      width: 30px;
      z-index: auto;
     
    }
    span {
      color: rgb(249, 249, 249);
      font-size:1.2rem;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
   @media (max-width: 768px) {
    display: none;
  } 
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;