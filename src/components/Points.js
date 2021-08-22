import React from 'react'
import styled from 'styled-components'
import bigPoint from '../assets/img/circle_back.png'
import smallPoint from '../assets/img/bg_dot.png'

const Point = styled.div`
position:absolute;
background-repeat: no-repeat;

`

const BigPoint = styled(Point)`
width:calc(var(--main-width)*${props => props.seed/100});
padding-top:calc(var(--main-height)*${props => props.seed/100});
opacity: ${Math.random() + 0.2};
margin-left: calc(${Math.random()}*var(--main-width));
margin-top: calc(${Math.random()}* var(--main-height)/2);
background-image:url(${bigPoint});
background-size: contain;
`

const SmallPoint = styled(Point)`
width:7px;
height:7px;
margin-left:calc(${() => Math.random()} * var(--main-width));
margin-top: calc(${() => Math.random()} * var(--main-height) + 120px);
background-image:url(${smallPoint});
background-size: scale;
opacity:${()=> Math.random() * 0.3 + 0.2};
transform:translateZ(-2px) scale(3);
`

const Points = styled.div`
width:100%;
height:100%;
`

function P(){
  return (
    <Points>
    {[...Array(20)].map((_,idx)=>{
      return null
      return <BigPoint 
        className="bigPoint" 
        key={idx} 
        seed={Math.random() * 50 + 30}
        />
    })}
    {[...Array(200)].map((_,idx)=>{
      return <SmallPoint key={idx} className="smallPoint" />
    })}
    </Points>
  )
}

export default P
