import './App.css';
import {useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Chat from "./components/Chat"
import Login from "./components/Login"
import styled from "styled-components"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import db from "./firebase"
import {auth} from "./firebase"

function App() {

const [rooms,setRooms] = useState([]);
const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));

const getChannels = () => {
  db.collection("rooms").onSnapshot((snapshot) => {     //In map function use middle bracket because we are wrighting code inside JavaScript functions.
    setRooms(snapshot.docs.map((doc,key) => {
      return {id: doc.id, name: doc.data().name};
    }))
  })
}

const signOut = () => {             //Important function used {auth.signOut()}
  auth.signOut().then(() => {       //We do not require 'provider' as signOut argument because we do not need permission from Google for logingOut. 
    localStorage.removeItem('user');
    setUser(null);
  })
}

useEffect(() => {
  getChannels();
},[])


  return (
    <div className="App">
      <Router>
        {
          !user?<Login setUser={setUser}/>:
          <Container>
          <Header user={user} signOut={signOut}/>
          <Main>
            <Sidebar rooms={rooms}/>
        <Switch>
          <Route path="/room/:channelId">
            <Chat user={user}/>
          </Route>
          <Route path="/">
            <h1>Select Channel from Left.</h1>
          </Route>
        </Switch>
        </Main>
        </Container>
        }
      </Router>
    </div>
  );
}

export default App;


const Container = styled.div`
  width:100%;
  height:100vh;
  display:grid;
  grid-template-rows: 38px minmax(0,1fr);
`

const Main = styled.div`
  display:grid;
  grid-template-columns:260px auto;
`