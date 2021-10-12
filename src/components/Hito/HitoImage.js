import styled, {css} from 'styled-components'
import {useState,useRef,useEffect,useContext} from 'react'
import OverlayContext from '../../OverlayContext'


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

function HitoImage({src, hovered,direction, setShow,idx,setHitosOverlayDataIdx}) {
  
  const {nLoadedImages, setNLoadedImages} = useContext(OverlayContext)

  const image = useRef()
  const [loaded,setLoaded] = useState(false)

  useEffect(() => {
      if (image.current.complete && !loaded){
          setNLoadedImages(nLoadedImages + 1)
          setLoaded(true)
      }
  }, [])

  return (
    <ImageWrap 
      onClick={_ => {
        setShow(true)
        setHitosOverlayDataIdx(idx)
        }}
      direction={direction}>
      <Img src={src} ref={image} hovered={hovered} direction={direction}
        onLoad={()=>{
          if(!loaded){
            setNLoadedImages(nLoadedImages + 1)
            setLoaded(true)
          }
        }}
      />
    </ImageWrap>
  )
}

export default HitoImage
