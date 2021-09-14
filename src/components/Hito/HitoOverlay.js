import styled from 'styled-components'
import {useContext} from 'react'
import OverlayContext from '../.././OverlayContext.js'
import overlayHead from '../../assets/img/overlayHead.png'
import overlayFoot from '../../assets/img/logo_foot.png'
import time_back from '../../assets/img/Time_Back.png'
import time_next from '../../assets/img/Time_Next.png'



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
background-color: #000000b3;
color:white;
z-index:100;

.overlayInfo {
  display:flex;
  flex-direction:row;
  height:80vh;
  flex:40%;
  width:90%;
  margin:0 auto;
  padding:0 24px 0 24px;
}

.banda {
  background-repeat:no-repeat;
  background-position:center;
  background-size:scale;
  flex:20%;
}

.head {
  background-image: url(${overlayHead});
  padding-top:20px;
}

.head::before {
  content: "";
  border:1px solid white;
  position: fixed;
  top:7vh;
  width:80%;
  left:10%;
  z-index:-1;
}

.foot {
  background-image: url(${overlayFoot});
}

div.imgsContainer {
  position:relative;
  flex:50%;
  margin:3% 24px 0 0;
  width:50%;

}


.overlayText {
  /*width:80vw;*/
  flex:50%;
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
  margin:0 auto;
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
  height:45vh;
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
  const {text,year,imgsBig} = hitosOverlayData[hitosOverlayDataIdx] || {}
  const imgs = imgsBig || []

  return (
    <Overlay show={show}>
        <div className="banda head"></div>
        <div class="header">
          <button className="exit" onClick={_=> {setShow(false)}}>X</button>
        </div>
        <div className="overlayInfo">
          <button className="arrow"  onClick={_=> {
            const val = hitosOverlayDataIdx === 0 ? 0 : hitosOverlayDataIdx - 1 
            setHitosOverlayDataIdx(val)
          }}>
          <img src={time_back}/>
          </button>
          {imgs[0]
            ?  <div className="imgsContainer">{imgs.filter(img => img).map((img,idx) => <OverlayImage src={img} seed={(Math.random() * 40 - 20) * idx}/>)}</div>
            : <></>}
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
