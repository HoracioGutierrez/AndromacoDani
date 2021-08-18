import styled, {css} from 'styled-components'

const Text = styled.p`
  position:absolute;
  text-align:center;
  color:white;
  z-index:1;
  top:-200px;
  left:-32px;
  transition:transform 0.1s ease-in-out 0.2s;
  transform:scaleX(0);
${props => props.hovered && css`
    transform:scaleX(1);
  `} 
`

function HitoText({text,hovered}) {
  return <Text hovered={hovered} >{text}</Text>
}

export default HitoText
