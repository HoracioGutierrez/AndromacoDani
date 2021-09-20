import styled from "styled-components";

export const MiniNav = styled.div`
  width: 100%;
  height: 30px;
 background-color: #535552;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #0093d1;
  background: -moz-linear-gradient(90deg, #0093d1 50%, #0067AC 100%);
  background: -webkit-linear-gradient(90deg, #0093d1 50%, #0067AC 100%);
  background: linear-gradient(90deg, #0093d1 50%, #0067AC 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0093d1",endColorstr="#0067ac",GradientType=1);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  .logo{
    height:50px;
    margin-left:20px;
  }
`;

export const IconContainer = styled.div`
  color: #eee;
  margin-left: 0.5rem;
  font-family: "Raleway", sans-serif;
  font-size: 1.8rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export const Menu = styled.ul`
margin: 0;
width:100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end; 
  align-items:center;

  @media screen and (max-width: 1024px) {
    position: absolute;
    border-top:2px solid #ffffff;
    top: 100px;
    left: ${({ showMobileMenu }) => (showMobileMenu ? "0" : "-140%")};
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    background: rgb(0,147,209);
    background: -moz-linear-gradient(90deg, #0093d1 50%, #0067AC 100%);
    background: -webkit-linear-gradient(90deg, #0093d1 50%, #0067AC 100%);
    background: linear-gradient(90deg, #0093d1 50%, #0067AC 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0093d1",endColorstr="#0067ac",GradientType=1);
    transition: 0.8s all ease;
    z-index: 999;
    flex-wrap: nowrap;
  }
`;

export const MenuItem = styled.li`
  z-index: 999;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  transition: 0.3s all ease;  
  margin-right:2rem;

 .item-active{
  color:white;
  font-weight:bold;
 } 

  a{
    height: 20px;
    padding: 0.5rem 0.90rem;
    color: #ccc;
    font-family: 'Raleway', sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
    text-decoration: none;
    
    &:hover {   
   
      transition: 0.3s all ease; 
      color:white;
      font-weight:600;   
    } 
   
  }  

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 70px;
  }
`;


export const MobileMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    margin-right: 0.5rem;
    svg {
      animation: ${({ showMobileMenu }) =>
    showMobileMenu ? "rotationMoveInitial" : "rotationMoveReverse"};
      animation-duration: 0.3s;
    }

    @keyframes rotationMoveInitial {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(90deg);
      }
    }

    @keyframes rotationMoveReverse {
      0% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;
