import React/*, {useState}*/ from 'react'
import styled, {ThemeProvider} from "styled-components"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItems} from "../data/SidebarData"
import AddIcon from '@material-ui/icons/Add';
import db from "../firebase"
import {useHistory} from "react-router-dom"     //Used Important package 'useHistory' to move among URL.

function Sidebar(props) {

    const sidebarColor = props.bgColor?"#993333":"#3F0E40";
    const theme = {
        headerColor: props.bgColor?"#602020":"#350d36"
    }

    // const [bgColor,setBgColor] = useState(false);
    const history = useHistory();

    const addChannel = () => {
        const promptMessage = prompt("Enter Channel Name:");
        db.collection('rooms').add({
            name:promptMessage
        })
    }

    const goToChannel = (id) => {
        if(id){
            history.push(`/room/${id}`)
        }
    }

    const bgChange = () => {
        props.setBgColor(!props.bgColor);
    }

    return (
        <ThemeProvider theme={theme}>
        <Container style={{background:sidebarColor}}>
            <WorkSpaceContainer>
                <Name>
                    Rishav
                </Name>
                <BgChangerButton>
                    <button onClick={bgChange} style={{background:sidebarColor}}>Change</button>
                </BgChangerButton>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkSpaceContainer>
            <MainChannels>
                {
                    sidebarItems.map((item,key) => (
                        <MainChannelItems key={key}>
                            {item.icon}
                            {item.text}
                        </MainChannelItems>
                    ))
                }
            </MainChannels>
            <ChannelContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIconImg onClick={addChannel}/>
                </NewChannelContainer>
                <ChannelsList>
                    {props.rooms.map((data,key) => (    //In map function use small bracket because we are wrighting code inside HTML tags.
                        <Channel key={key} onClick={() => goToChannel(data.id)}>
                            # {data.name}
                        </Channel>
                    ))}
                </ChannelsList>
            </ChannelContainer>
        </Container>
        </ThemeProvider>
    )
}

export default Sidebar


const Container = styled.div`
    /* background:#3F0E40; */
    display:grid;
    grid-template-rows:64px auto 1fr;   //grid-template-rows:64px auto auto; then it will divide the space into 50/50 (half).
` 

const WorkSpaceContainer = styled.div`
    color:white;
    display:flex;
    align-items:center;
    padding-left:19px;
    justify-content:space-between;
    border-bottom: 1px solid #532753;
`

const Name = styled.div``

const BgChangerButton = styled.div`
    border-radius:4px;
    width:85px;
    height:35px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:white;

    button{
        font-size:0.7rem;
        color:white;
        padding:6px 10px;
        border:none;
        border-radius:4px;
        /* background:red; */
        /* background: ${(props) => props.bgColor?"red":"green"}; */
        outline:none;           //To remove focus border after clicked.
        cursor: pointer;
    }
`

const NewMessage = styled.div`
    width:36px;
    height:36px;
    background:white;
    color:#3F0E40;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    margin-right:20px;
    cursor:pointer;
`

const AddIconImg = styled(AddIcon)`
    cursor:pointer;
`

const MainChannels = styled.div`
    padding-top:10px;
`

const MainChannelItems = styled.div`
    color: rgb(188, 171, 188);
    display:grid;
    grid-template-columns:15% auto;
    height:28px;
    align-items:center;
    padding-left:19px;
    cursor:pointer;
    
    :hover{
        background:${(props) => props.theme.headerColor};
    }
`

const ChannelContainer = styled.div`
    margin-top:10px;
    color:rgb(188, 171, 188);
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    height:28px;
    padding-left:19px;
    padding-right:12px;
`

const ChannelsList = styled.div``


const Channel = styled.div`
    height:28px;
    display:flex;
    align-items:center;
    padding-left:19px;
    padding-right:12px;
    cursor:pointer;

    :hover{
        background:${(props) => props.theme.headerColor};
    }
`