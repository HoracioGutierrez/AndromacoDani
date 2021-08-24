import {useState,React} from 'react'
import styled from 'styled-components'
import HitoImage from './Hito/HitoImage.js'
import HitoLine from './Hito/HitoLine.js'
import HitoYear from './Hito/HitoYear.js'
import HitoCircle from './Hito/HitoCircle.js'
import HitoText from './Hito/HitoText.js'

const Container = styled.div`
position:absolute;
width:100px;
height:200px;
left:${props => props.pos.x};
top:${props => props.pos.y};
z-index:3;
`

function Hito({pos,direction,src,year,text}) {


  const [hovered,setHovered] = useState(false)

  return (
    <Container pos={pos} >
      <HitoText text={text} hovered={hovered} direction={direction} />
      <HitoImage hovered={hovered} src={src} direction={direction} />
      <HitoYear year={year} hovered={hovered} direction={direction} />
      <HitoLine hovered={hovered} direction={direction} />
      <HitoCircle 
        hovered={hovered}
        onMouseEnter={_ => setHovered(true)} 
        onMouseLeave={_ => setHovered(false)}
      />
    </Container>
  )
}

export default Hito
