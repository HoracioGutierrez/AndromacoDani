import styled from 'styled-components'
import {useContext} from 'react'
import OverlayContext from '../.././OverlayContext.js'
import overlayHead from '../../assets/img/overlay_head.png'
import overlayFoot from '../../assets/img/overlay_foot.png'
import time_back from '../../assets/img/Time_Back.png'
import time_next from '../../assets/img/Time_Next.png'
import cross from '../../assets/img/Close.png'



const Overlay = styled.div`

@font-face{
  font-family:'Minion';
  src:url(./assets/font/MinionPro.otf);
}
display: ${props =>  props.show ? "flex" : "none"};
overflow:hidden;
flex-direction:column;
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
background-color: #000000cc;
color:white;
z-index:100;

.overlayInfo {
  display:flex;
  flex-direction:row;
  height:60vh;
  flex:40%;
  width:90%;
  margin:0 auto;
  padding:40px 24px 40px 24px;
}

.banda {
  background-repeat:no-repeat;
  background-position:center;
  background-size:contain;
  flex:20%;
  width:80%;
  margin:0 auto;
}

.head {
  background-image: url(${overlayHead});
  padding-top:20px;
}

.head::before {
}

.foot {
  background-image: url(${overlayFoot});
}

div.imgsContainer {
  position:relative;
  flex:60%;
  /*margin:3% 24px 0 0;*/
  display: flex;
  flex-direction: column;
  justify-content: center;

}


.overlayText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex:40%;
  white-space:pre-line;
  margin-right:20px;
  font-family:Minion;
}

h2 {
  font-size:2rem;
  text-align:left;
}

p {
  overflow-y:scroll;
  /*margin:0 auto;*/
  padding-right:20px;
  text-align:left;
  line-height:2rem;
  font-size:1.3rem;
  height:60vh;
  scrollbar-color:red;

}

/* scrollbar */

p::-webkit-scrollbar {
width:8px;
background-color:rgba(1,1,1,0.1);
}

p::-webkit-scrollbar-thumb {
width:8px;
background-color:rgba(1,1,1,0.4);
border-radius:10px;
}

p::-webkit-scrollbar-thumb:hover {
background-color:rgba(1,1,1,0.6);
}

p::-webkit-scrollbar-track {
border-radius:10px;
}

button.exit {
  color:white;
  background:none;
  border:none;
  position:fixed;
  right:40px;
  font-size:3rem;
  font-weight:light;
  top:3%;
  cursor:pointer;
  /*filter:drop-shadow(1px 1px 1px #00FFFF);*/
}

button.arrow {
  background:none;
  border:none;
  margin:60px;
  cursor:pointer; 
}
`

const OverlayImage = styled.img`
  position:absolute;
  object-fit: scale-down;
  max-width:80%;
  max-height:100%;
  /*height:45vh;*/
  /*width:90%;*/
  left:0;
  right:0;
  margin-left: auto; 
  margin-right: auto; 
  transform-origin:center center;
  transform:rotate(${props => props.seed }deg) translateX(${props => props.seed * 1.5}px);
  box-shadow:2px 2px 10px black;
`

const HitoOverlay = () =>{
  const {show,setShow, hitosOverlayDataIdx, setHitosOverlayDataIdx, hitosOverlayData} = useContext(OverlayContext)
  const {text,year,imgBig} = hitosOverlayData[hitosOverlayDataIdx] || {}
  // console.log('idx', hitosOverlayDataIdx)
  // console.log('data', hitosOverlayData)
  // console.log('imgBIG', imgBig)

  return (
    <Overlay show={show}>
        <div className="banda head"></div>
        <div class="header">
          <button className="exit" onClick={_=> {setShow(false)}}><img src={cross}/></button>
        </div>
        <div className="overlayInfo">
          <button className="arrow"  onClick={_=> {
            const val = hitosOverlayDataIdx === 0 ? 0 : hitosOverlayDataIdx - 1 
            setHitosOverlayDataIdx(val)
          }}>
          <img src={time_back}/>
          </button>
          <img src={imgBig} />
          <div className="overlayText">
            <h2>{year}</h2>
            <p>{text}</p>
          </div>
          <button className="arrow" onClick={ _ => {
            const val = hitosOverlayDataIdx > hitosOverlayData.length - 1
              ? hitosOverlayDataIdx 
              : hitosOverlayDataIdx + 1 
            setHitosOverlayDataIdx(val)
          }}>
           <img src={time_next} />
          </button>
        </div>
        <div className="banda foot"></div>
    </Overlay>
  )
}

export default HitoOverlay;
