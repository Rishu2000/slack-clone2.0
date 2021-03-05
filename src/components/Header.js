import React from 'react'
import styled from "styled-components"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header({user, signOut}) {
    console.log(user);
    return (
        <Container>
            <Main>
                <AccessTimeIcon/>
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon/>
            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo?user.photo:"http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"} alt=""/>
                    {/* <AccountBoxIcon/> */}
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background:#350d36;
    color:white;
    display: flex;
    align-items:center; 
    justify-content:center;
    position:relative;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
` 

const Main = styled.div`
    display: flex;
    margin-right:16px;
    margin-left:16px;
`

const SearchContainer = styled.div`
    min-width:200px;
    width:400px;    
    margin-left:8px;
    margin-right:8px; 
`

const Search = styled.div`
    width:100%;
    box-shadow:inset 0 0 0 1px rgb(104 74 104);
    border-radius: 6px;  
    display: flex;
    align-items:color-interpolation-filters;

    input {
        width:95%;
        background-color: transparent;
        border:none;
        padding-left:8px;
        padding-right: 8px;
        color:white;
        padding-top:4px;
        padding-bottom:4px;
    }

    input:focus{
        outline:none;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items:center;
    padding-right:16px;
    position:absolute;
    right:0;
`

const Name = styled.div`
    padding-right:8px;
`

const UserImage = styled.div`
    width:28px;
    height:28px;
    border:2px solid white;
    border-radius:3px;

    img{
        width:100%;
        cursor:pointer;
    }
`