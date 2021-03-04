import React from 'react'
import styled from "styled-components"
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message here..."/>
                    <SendButton>
                        <SendIcon/>
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput


const Container = styled.div`
    padding:10px 20px;
`

const InputContainer = styled.div`

    border:1px solid black;
    border-radius:4px;
    padding: 0 10px;
    
    form{
        display:flex;
        height:42px;
        display:flex;
        align-items:center;

        input{
            flex:1;
            border:none;
            font-size:20px;
        }
        input:focus{
            outline:none;
        }
    }
`

const SendButton = styled.div`
    background:green;
    border-radius:2px;
    height:32px;
    width:32px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    color:white;

    .MuiSvgIcon-root{            
        width:16px;
    }
`