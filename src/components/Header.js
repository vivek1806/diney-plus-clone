import React from 'react'
import styled from 'styled-components'
import {auth, provider} from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectUserName, selectUserPhoto, setUserLoginDetails } from '../features/user/userSlice'

const Header = (props) =>{
    const dispatch  = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const userphoto = useSelector(selectUserPhoto);



const handleAuth = ()=>{
    auth.signInWithPopup(provider).then ((result)=>{
        setUser(result.user);

    }).catch((error) => {
        alert(error.message)
    })
};

const setUser = (user) => {
    dispatch(setUserLoginDetails({
        name : user.displayName,
        email: user.email,
        photo: user.photoURL
    }))
}

    return (
        <Nav>
            <Logo src="/images/logo.svg" />

            {
                !username?(
                <Login onClick={handleAuth}>Login</Login>
                ): (
                <>
            
            
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt=""/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"  alt=""/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"  alt=""/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"  alt=""/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"  alt=""/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"  alt=""/>
                    <span>SERIES</span>
                </a>
                

            </NavMenu>

            <SignOut>
            
            <UserImg src = {userphoto} alt={username} />

            </SignOut>

            </>
                )}

             
            
        </Nav>
    )
}

export default Header

const Nav  = styled.nav`
heigt :70px;
background: #090b13;
display:flex;
align-items: center;
padding: 0 36px;
overflow-x:hidden;
`

const Logo  = styled.img`
width:80px;
`
const NavMenu = styled.div`

display:flex;
flex:1;
margin-left:50px;


a {
    display : flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img {
        height:20px;
    }
    span {
        font-size: 13px;
        letter-spacing : 1.42px;
        position:relative;

        &:after {
            content:"";
            height:2px;
            background:white;
            left:0;
            right:0;
            bottom:-6px;
            position:absolute;
            opacity:0;
            transform:scaleX(0);
            transition : all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;

        }
    }

    &:hover {
        span:after {
            opacity:1;
            transform:scaleX(1);

        }
    }
}

`

const UserImg = styled.img`

  height:100%;
`
const Login = styled.a`

    background-color: rgba(0, 0, 0, 0.6);
    border-radius:4px;
    text-transform:uppercase;
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    letter-spacing:1.5px;
    transition: all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;
    cursor:pointer;
    

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        
        border-color:transparent;
    }



`
const SignOut = styled.div`

position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;

`


