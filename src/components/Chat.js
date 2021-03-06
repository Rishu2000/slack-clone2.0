import React, {useEffect, useState} from 'react'      
import styled from "styled-components"
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from "./ChatInput"
import ChatMessage from './ChatMessage';
import {useParams} from "react-router-dom"
import db from "../firebase"

function Chat() {

    const [channel,setChannel] = useState();
    let {channelId} = useParams();      //Use useParams() to get data from URL opposite of useHistory().

    const getChannel = () => {
        db.collection('rooms').doc(channelId).onSnapshot((snapshot) => {
            setChannel(snapshot.data());
        })
    }

    useEffect(() => {       //Passes the argument channelId so that whenever it changes useEffect() runs.
        getChannel();
    },[channelId])

    return (
        <Container>
            <Header>
                <ChannelInfo>
                    <ChannelName>
                        # {channel?channel.name:"Select Channel"}
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
            <ChatMessage/>
            <ChatInput/>
        </Container>
    )
}

export default Chat


const Container = styled.div`
    display:grid;
    grid-template-rows:64px auto min-content;
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