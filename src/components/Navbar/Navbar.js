import { useState } from "react";
import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  MobileMenuIcon,
  MiniNav
} from "./Navbar.elements";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

import logo from '../../assets/img/logo-izq.png'
import styled from "styled-components";

const N = styled.div`
position: sticky;
width: 100vw;
left:0;

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

          <img className="logo" src={logo} alt="logo" />

          <MobileMenuIcon onClick={() => handleShowMobileMenu()}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileMenuIcon>

          <Menu showMobileMenu={showMobileMenu}>
            <MenuItem onClick={() => handleShowMobileMenu()}>
              <a activeClassName="item-active" href="https://andromaco95aniversario.com/agenda">Volver</a>
            </MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    </N>
  );
};

export default Navbar;
