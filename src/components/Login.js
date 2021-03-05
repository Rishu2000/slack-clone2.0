import React from 'react'
import styled from "styled-components"
import {auth,provider} from "../firebase"

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                Name: result.user.displayName,
                Photo: result.user.photoURL
            }
            console.log(newUser);
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <Container>
            <MinContainer>
                <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"/>
                <h1>Sign in Slack</h1>
                <SignInButton onClick={() => signIn()}>
                    Sign In With Google
                </SignInButton>
            </MinContainer>
        </Container>
    )
}

export default Login


const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#ffccff;
`

const MinContainer = styled.div`
    width:400px;
    height:500px;
    background:#ff00ff;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-shadow: 5px 10px 8px #ff66ff;
    border-radius:4px;

    h1{
        color:white;
        margin-top:5px;
    }
`


const SlackImg = styled.img`
    width:150px;
    background:transparent;
`

const SignInButton = styled.button`
    margin-top:40px;
    background:#660066;
    color:white;
    border:none;
    padding:10px;
    border-radius:4px;
    cursor:pointer;
`