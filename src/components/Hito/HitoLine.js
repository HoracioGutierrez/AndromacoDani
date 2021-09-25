import styled, {css} from 'styled-components'
import hitoLine from '../../assets/img/hito_line.png'

const HitoLine = styled.div`
  position:relative;
  background-repeat: no-repeat;
  background-image:url(${hitoLine});
  height:20%;
  left:13%;
  transition:transform 0.5s;
  transition-delay:0.1s;

${props => props.direction === "down" && css`top:35%;`}
${props => (props.hovered && props.direction === "up") && css`
    transform:scaleY(0.7) translateY(8px);
  `} 

${props => (props.hovered && props.direction === "down") && css`
    transform:scaleY(0.5) translateY(-17px);
  `} 
`


export default HitoLine
