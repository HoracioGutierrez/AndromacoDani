import React from 'react'
import styled, {css} from 'styled-components'

const ImageWrap = styled.div`
position:relative;
height: 30%;
left:-12%;
top:-10%;
z-index:2;
`

const Image = styled.div`
background-image:url(${props => props.src});
width: 80%;
padding-top: 80%;
height: 0;
background-size: cover;
background-position-x: center;
background-position-y: 30%;
border-radius: 50%;
transition:transform 0.3s ease-in;
${props => props.hovered && css`
    transform:scale(1.5) translateY(-50px);
  `} 
`

function HitoImage({src, hovered}) {
  return (
    <ImageWrap>
    <Image src={src} hovered={hovered} />
    </ImageWrap>
  )
}

export default HitoImage
