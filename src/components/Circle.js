import styled from 'styled-components'
import tex from '../assets/img/circle_back.png'

const Circle = styled.div`
  position:absolute;
  height:100%;
  width:1000px;
  top:${props => props.y}vh;
  left:${props => props.x}vw;
  background-repeat: no-repeat;
  background-image:url(${tex});
  background-size:contain;
  object-fit:contain;
  opacity:${_ => Math.random()+0.1};
  z-index:0;
  transition:opacity 0.5s ease-in-out;
`

export default Circle 
