import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import easyScroll from 'easy-scroll'

const yearRanges = ["1926-1935", "1936-1945", "1946-1955", "1956-1965", 
                    "1966-1975", "1976-1985", "1986-1995", "1996-2005",
                    "2006-2015", "2016-2021"]

const anchorsMap = [0,4,7,9,12,14,20,25,33,40]


const Sidebar = styled.div`
position:fixed;
/*width:120px;*/
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
padding:4px;
/*right:20px;*/
left: 50%;
transform: translateX(-50%) scale(0.95);
top:100px;
z-index:0;
background-color: #ffffff5e;
border-radius:10px;

@media screen and (max-width: 1024px) {
  display:none;
}
`
const Y = styled.a`
width:110px;
font-family:'Minion';
text-align:center;
text-decoration:none;
underline:none;
color:#093255;
font-size:2pt!important;

&:first-child{
  animation:glow 1s ease-in-out;
  animation-direction:fowards;
  animation-iteration-count:20;
  animation-play-state: running; 
}


&:hover {
/*
  &::before {
    content:"⟶ |";
  }
  margin-left:-24px;
  overflow:hidden;
  */
  color:#00FFFF;
}

@keyframes glow {
  0% {
    color:#093255;
  }
  50% {
    &::before {content:"⟶ |";}
    color:#00FFFF;
  }
  100%{
    color:#093255;
  }
}
`

function Year({hitoIdx, year,scrollRoot}) {
  const [anchor,setAnchor] = useState(null)
  useEffect(() => {
    // setAnchor(document.getElementById(`hito_${hitoIdx}`))
    // if(anchor){
    //   console.log('anchor', anchor)
    // }
  })

  const handleClick = ev => {
    ev.preventDefault()
    const a = document.getElementById(`hito_${hitoIdx}`)
    var headerOffset = 0
    var elementPosition = a.getBoundingClientRect()
    var offsetPosition = elementPosition.top - headerOffset
    let amount = elementPosition.left
    const direction = amount > 0 ? "right" : "left"
    //amount = Math.abs(elementPosition.left)
    const rootPos = document.getElementById('timelineContainer').getBoundingClientRect()
    console.log('POS', amount - scrollRoot.getBoundingClientRect().left)
    console.log('DIR', direction)

    // easyScroll({
    //   scrollableDomEle: scrollRoot,
    //   direction: direction,
    //   duration: 100,
    //   easingPreset: 'easeInOutQuad',
    //   scrollAmount:(amount - scrollRoot.getBoundingClientRect().left)/2
    // });

    scrollRoot.scrollBy({
      top:offsetPosition,
      left:(amount - scrollRoot.getBoundingClientRect().left), 
      behavior:'smooth'
    })

  }

  return (
    <Y onClick={handleClick} href={``} > {year}</Y>
  )
}

function Side(){

  const paraContainer = document.querySelector('#para')

  return(
    <Sidebar>
      {yearRanges.map((y,idx) => {
        return (
          <Year 
          key={idx}
          hitoIdx={anchorsMap[idx]}
          year={y}
          scrollRoot={paraContainer}
          />
        )
      })}
    </Sidebar>
    )
}

export default Side
