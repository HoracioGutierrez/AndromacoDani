import {useState,React} from 'react'
import styled, {css} from 'styled-components'

const ImageWrap = styled.div`
position:relative;
height: 30%;
left:-35%;
top:${props => props.direction === "up" ? "10%" : "85%"};
z-index:2;
cursor:pointer;
`

const Img = styled.img`
width:50%;
height:80%;
border-radius:50%;
transition:all 0.3s ease-in;
object-fit: cover;
transition-property:transform,box-shadow;
${props => props.hovered && css`
    transform:scale(1.3) translateY(${props.direction === "up" ? "-50%" : "20%"});
    box-shadow:1px 1px 4px #00FFFF;
  `} 
`

// const Img = styled.div`
// background-image:url(${props => props.src});
// background-size:cover;
// width: 50%;
// padding-top: 50%;
// height: 0;
// background-size: cover;
// background-position-x: center;
// background-position-y: 30%;
// border-radius: 50%;
// transition:all 0.3s ease-in;
// transition-property:transform,box-shadow;
// ${props => props.hovered && css`
//     transform:scale(1.3) translateY(${props.direction === "up" ? "-50%" : "20%"});
//     box-shadow:1px 1px 4px #00FFFF;
//   `} 
// `

function HitoImage({src, hovered,direction, setShow,idx,setHitosOverlayDataIdx}) {

  return (
    <ImageWrap 
      onClick={_ => {
        setShow(true)
        setHitosOverlayDataIdx(idx)
        }}
      direction={direction}>
      <Img src={src} hovered={hovered} direction={direction} />
    </ImageWrap>
  )
}

export default HitoImage
