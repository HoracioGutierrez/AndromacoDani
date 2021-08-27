import styled, {css} from 'styled-components'

const Text = styled.p`
  position:absolute;
  text-align:center;
  color:white;
  z-index:1;
  top:-70%;
  left:-70%;
  transition:transform 0.1s ease-in-out 0.2s;
  transform:scaleX(0);
${props => props.hovered && css`
    transform:scaleX(1);
  `} 
`

function HitoTitle({title,hovered}) {
  return <Text hovered={hovered} >{title}</Text>
}

export default HitoTitle
