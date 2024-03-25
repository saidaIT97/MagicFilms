import "./index.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Netflix from "./components/Netflix";
import Home from "./Home";
import { BrowserRouter ,Route, Routes,} from "react-router-dom";
import Login from "./components/registration/Login";
import Signup from "./components/registration/Signup";
import Card from "./components/Card";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route element={ <Login/> } path="/login"/>
        <Route element={<Signup/> } path="/signup"/>
        <Route  element={ <Main />} path="/main" />
        <Route  element={ <Netflix  />}  path="/netflix"/>
        <Route  element={ <Cards  />}  path="/cards"/>
        <Route element={ <Card/> }   path="/card"/>
        <Route element={ <Home/>} path="/"/>
        
        </Routes>
        

      </BrowserRouter>
    </>
  );
}

export default App;
