import React from 'react'
import styled from "styled-components"

function ChatMessage({name, message, image, timestamp}) {
    return (
        <Container>
            <MessageContainer>
                <ImgContainer>
                    <img src={image} alt="Person"/>
                </ImgContainer>
                <InfoContainer>
                <Name>{name} 
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Message>{message}</Message>
                </InfoContainer>
            </MessageContainer>
        </Container>
    )
}

export default ChatMessage


const Container = styled.div``

const MessageContainer = styled.div`
    height:48px;
    display:flex;
    align-items:center;
    padding-left:10px;
`

const ImgContainer = styled.div`
    width:38px;
    height:38px;
    padding-right:10px;
    img{
        width:100%;
        border-radius:2px;
    }
`

const InfoContainer = styled.div`
`

const Name = styled.div`
    font-weight:900;

    span{
        margin-left:8px;
        font-weight:400;
        font-size:10px;
        color: rgb(97,96,97);
    }
`

const Message = styled.div``