import {useState,useContext,React} from 'react'
import OverlayContext from '.././OverlayContext.js'
import styled from 'styled-components'
import HitoImage from './Hito/HitoImage.js'
import HitoLine from './Hito/HitoLine.js'
import HitoYear from './Hito/HitoYear.js'
import HitoCircle from './Hito/HitoCircle.js'
import HitoTitle from './Hito/HitoTitle.js'

const Container = styled.div`
position:absolute;
width:100px;
height:200px;
left:${props => props.pos.x};
top:${props => props.pos.y};
z-index:3;
`

function Hito({idx, pos,direction,imgSmall, imgsBig, year, title, text}) {
  const {setShow} = useContext(OverlayContext)
  const {setContent} = useContext(OverlayContext)
  const [hovered,setHovered] = useState(false)
  pos = pos || {x: 0, y:0}

  return (
    <Container pos={pos} >
      <HitoTitle title={title} hovered={hovered} direction={direction} />
      <HitoImage hovered={hovered} src={imgSmall} direction={direction} />
      <HitoYear year={year} hovered={hovered} direction={direction} />
      <HitoLine hovered={hovered} direction={direction} />
      <HitoCircle 
        hovered={hovered}
        onMouseEnter={_ => setHovered(true)} 
        onMouseLeave={_ => setHovered(false)}
        onClick={_ => {
          setShow(true)
          setContent({title:title, text:text, imgs:imgsBig})
        }}
      />
    </Container>
  )
}

export default Hito
