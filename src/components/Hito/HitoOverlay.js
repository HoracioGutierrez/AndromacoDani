import styled from 'styled-components'
import {useContext,useState,useEffect} from 'react'
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

.overlayImage {
  flex:40%;
  padding-right:20px;
  width:100%;
  object-fit:scale-down;
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

const HitoOverlay = () =>{
  const {show,setShow, hitosOverlayDataIdx, setHitosOverlayDataIdx, hitosOverlayData} = useContext(OverlayContext)
  const {text,year,imgBig} = hitosOverlayData[hitosOverlayDataIdx] || {}
  const [noImgIdxs,setNoImgIdxs] = useState([])

  useEffect(() =>{
    setNoImgIdxs(Array(hitosOverlayData.length).fill(true))
  },[hitosOverlayData])

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
          {noImgIdxs[hitosOverlayDataIdx]
            ? <img className="overlayImage" src={imgBig} onError={_ => {
              const arr = [...noImgIdxs]
              arr[hitosOverlayDataIdx] = false
              setNoImgIdxs(arr)
            }}  />
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
