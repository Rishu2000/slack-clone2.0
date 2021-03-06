import React, {useEffect, useState} from 'react'      
import styled from "styled-components"
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from "./ChatInput"
import ChatMessage from './ChatMessage';
import {useParams} from "react-router-dom"
import db from "../firebase"
import firebase from "firebase"

function Chat({user}) {

    const [channel,setChannel] = useState();
    let {channelId} = useParams();      //Use useParams() to get data from URL opposite of useHistory().
    const [messages, setMessages] = useState([]);

    const getChannel = () => {
        db.collection('rooms').doc(channelId).onSnapshot((snapshot) => {
            setChannel(snapshot.data());
        })
    }

    const getMessage = () => {
        db.collection('rooms').doc(channelId).collection('message')
        .orderBy('timestamp','asc')         //Important fun 2nd argument is 'Assending' or desc 'Desending'
        .onSnapshot((snapshot) => {
            let messages = snapshot.docs.map((item) => item.data());
            setMessages(messages);
        })
    }

    const sendMessage = (text) => {
        let payload = {
            text:text,
            user:user.name,
            timestamp:firebase.firestore.Timestamp.now(),   //Important-> way to get current Time. 
            userImage:user.photo
        }
        db.collection('rooms').doc(channelId).collection('message')
        .add(payload);
    }

    useEffect(() => {       //Passes the argument channelId so that whenever it changes useEffect() runs.
        getChannel();
        getMessage();
    },[channelId])

    return (
        <Container>
            <Header>
                <ChannelInfo>
                    <ChannelName>
                        # {channel && channel.name}
                    </ChannelName>
                    <ChannelDisc>
                        Company-wise announcements and work-based matters.
                    </ChannelDisc>
                </ChannelInfo>
                <ChannelDetail>
                    <Text>Details</Text>
                    <Info/>
                </ChannelDetail>
            </Header>
            <MessageContainer>
                {
                    messages.length > 0 && 
                    messages.map((data,key) => (
                        <ChatMessage key={key}
                            name={data.user}
                            message={data.text}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))
                }
            </MessageContainer>
            <ChatInput sendMessage={sendMessage}/>
        </Container>
    )
}

export default Chat


const Container = styled.div`
    display:grid;
    grid-template-rows:64px auto min-content;
    min-height:0;
`

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:20px;
    padding-right:20px;
    border:1px solid #cccccc;
`

const ChannelInfo = styled.div`
`

const ChannelName = styled.div`
    font-weight:700;
`

const ChannelDisc = styled.div`
    font-weight:400;
    font-size:13px;
`

const ChannelDetail = styled.div`
    display:flex;
    align-items:center;
`

const Text = styled.div``

const Info = styled(InfoOutlinedIcon)`
    padding:8px;
`

const MessageContainer = styled.div`
    display:flex;
    flex-direction:column;
    overflow-y:scroll;          //Way to add a scroll-bar.
`