import React from 'react'
import Main from "./components/Main";
import Cards from "./components/Cards";
import Netflix from "./components/Netflix";
import { NavLink } from 'react-router-dom';


 const Home = () => {
  return (
    <>
    <NavLink to="/main">  <Main/></NavLink>
    <NavLink to="/netflix" > <Netflix/></NavLink> 
    <NavLink to=" /cards">  <Cards/></NavLink>
    </>
  )
}
export default Home