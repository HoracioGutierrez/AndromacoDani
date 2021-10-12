import { useState } from "react";
import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  MiniNav
} from "./Navbar.elements";


import logo from '../../assets/img/logo-izq.png'
import styled from "styled-components";

const N = styled.div`
position: sticky;
width: 100vw;
left:0;

@media (max-height:1024px) and (orientation: landscape) { 
   /*display:none;*/
}
  a.volver{
    position:absolute;
    right:0;
    height: 20px;
    padding: 0.5rem 0.90rem;
    color: #ccc;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    width: 10%;
    text-decoration: none;
    
    &:hover {   
   
      transition: 0.3s all ease; 
      color:white;
      font-weight:600;   
    } 
   
  }  

`

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <N>
      <MiniNav></MiniNav>
      <Container>
        <Wrapper>

          <a activeClassName="item-active" href="https://andromaco95aniversario.com/">
           <img className="logo" src={logo} alt="logo" />
          </a>
        {/*
         <MobileMenuIcon onClick={() => handleShowMobileMenu()}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileMenuIcon>
          */}
          <a className="volver" activeClassName="item-active" href="https://andromaco95aniversario.com/agenda">Volver</a>

          <Menu showMobileMenu={showMobileMenu}>
            <MenuItem onClick={() => handleShowMobileMenu()}>
            </MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    </N>
  );
};

export default Navbar;
