import styled from 'styled-components'
import tex from '../assets/img/textura.png'

const Textura = styled.div`
  height:100%;
  width:100vw;
  margin-top:${props => props.top}vh;
  background-repeat: no-repeat;
  background-image:url(${tex});
  background-size:contain;
  opacity:0.3;
`

export default Textura
