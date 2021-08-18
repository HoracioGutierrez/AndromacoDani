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
`

function Hito({pos,src,year,text}) {

  const [hovered,setHovered] = useState(false)

  return (
    <Container pos={pos} >
      <HitoText text={text} hovered={hovered} />
      <HitoImage hovered={hovered} src={src} />
      <HitoYear year={year} hovered={hovered} />
      <HitoLine hovered={hovered} />
      <HitoCircle 
        hovered={hovered}
        onMouseEnter={_ => setHovered(true)} 
        onMouseLeave={_ => setHovered(false)}
      />
    </Container>
  )
}

export default Hito
