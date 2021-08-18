import {useState,React} from 'react'
import styled from 'styled-components'
import HitoImage from './HitoImage.js'
import HitoLine from './HitoLine.js'
import HitoYear from './HitoYear.js'
import HitoCircle from './HitoCircle.js'
import HitoText from './HitoText.js'

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

// const createHitoImage = (src) =>{
//   return (
//     <div className="hitoImageWrapper">
//     <img src={src} className="hitoImage" />
//     </div>
//   )
// }

// const hitos = hitosData
//   .map(hito=>{
//     return {
//       left:hito.left ,
//       top:(hito.top)+1080/3,
//       direction:hito.direction,
//       src: hito.src
//     }
//   }).map(h =>{
//     var lineStyle = {
//         marginTop: h.direction === "up" ? -60 : -220
//       }
//     return (
//       <div style={h} className="hito">
//       {createPoint("hitoCircle")()}
//       {createLine("hitoLine")(lineStyle)}
//       {createHitoImage(h.src)}
//       </div>
//     )
//   })

