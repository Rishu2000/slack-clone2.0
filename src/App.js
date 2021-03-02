import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Chat from "./components/Chat"
import Login from "./components/Login"
import styled from "styled-components"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header/>
        <Switch>
          <Route path="/room">
            <Chat/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;


const Container = styled.div`
  width:100%;
  height:100vh;
  background:orange;
`