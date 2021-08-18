import React from 'react'
import styled from 'styled-components'

const Year = styled.p`
  position:absolute;
  left:10px;
  top:-5px;
  text-align:center;
  color:white;
  z-index:1;
 `
function HitoYear({year}) {
  return <Year>{year}</Year> 
}

export default HitoYear 
