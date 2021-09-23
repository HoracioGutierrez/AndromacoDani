import styled, {css} from 'styled-components'
import hitoLine from '../../assets/img/hito_line.png'

const HitoLine = styled.div`
  position:relative;
  background-repeat: no-repeat;
  background-image:url(${hitoLine});
  height:20%;
  left:13%;
  transition:transform 0.5s;

${props => props.direction === "down" && css`top:35%;`}
${props => (props.hovered && props.direction === "up") && css`
    transform:scaleY(1.1) translateY(-2px);
  `} 

${props => (props.hovered && props.direction === "down") && css`
    transform:scaleY(1.1) translateY(2px);
  `} 
`


export default HitoLine
