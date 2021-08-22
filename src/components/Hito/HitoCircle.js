import hitoCircle from '../../assets/img/hito_circle.png'
import styled, {css} from 'styled-components'

const HitoCircle = styled.div`
  background-repeat: no-repeat;
  background-image:url(${hitoCircle});
  background-size:cover;
  object-fit:contain;
  height:30px;
  width:30px;
  position:relative;
  z-index:10;
  transition:filter 0.3s ease-in;
${props => props.hovered && css`
    filter: drop-shadow(0 0 1rem rgb(248, 248, 250));
    
  `} 

`

export default HitoCircle
