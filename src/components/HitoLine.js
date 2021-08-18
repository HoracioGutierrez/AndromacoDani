import React from 'react'
import styled, {css} from 'styled-components'
import hitoLine from '../assets/img/hito_line.png'

const HitoLine = styled.div`
  position:relative;
  background-repeat: no-repeat;
  background-image:url(${hitoLine});
  height:30%;
  left:25%;
  transition:transform 0.5s;
${props => props.hovered && css`
    transform:scaleY(1.2) translateY(-5px);
  `} 
`


export default HitoLine
