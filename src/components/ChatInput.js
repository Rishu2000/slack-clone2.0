import React,{useState} from 'react'
import styled from "styled-components"
import SendIcon from '@material-ui/icons/Send';

function ChatInput({sendMessage}) {

    const [input,setInput] = useState("");

    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input);
    }
    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        onChange = {(e) => setInput(e.target.value)}
                        type="text" 
                        placeholder="Message here..."/>
                    <SendButton onClick={send} type="submit">
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

const SendButton = styled.button`
    border:none;
    background:green;
    border-radius:2px;
    height:32px;
    width:32px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    color:white;

    .MuiSvgIcon-root{           // Note ClassName has been called inside parent Tag.*** 
        width:16px;
    }
`