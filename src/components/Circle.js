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
  background-size:cover;
  object-fit:contain;
  opacity:${props => Math.random()+0.1};
`

export default Circle 
