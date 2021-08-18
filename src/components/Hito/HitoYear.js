import React from 'react'
import styled, {css} from 'styled-components'

const Year = styled.p`
  position:absolute;
  text-align:center;
  color:white;
  z-index:1;
  left:10px;
  top:-5px;
  border-bottom:1px solid #00FFFF;
  transition:transform 0.3s ease-in-out 0.1s;
  transform:scaleX(0.0);
${props => props.hovered && css`
  transform:scaleX(1.0);
  `} 
 `
function HitoYear({year,hovered}) {
  return <Year hovered={hovered}>{year}</Year> 
}

export default HitoYear 
