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


.banda {
  background-repeat:no-repeat;
  background-position:center;
  background-size:contain;
  flex:20%;
  width:70%;
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

#overlayMain {
  display:flex;
  flex-direction:row;
  height:60vh;
  /*margin:0 auto;*/
  /*padding:40px 24px 40px 24px;*/
}

#overlayContent {
  display:flex;
  flex:70%;
  width:40%;
  flex-direction:row;
  justify-content:center;
}


#overlayImage {
  flex:40%;
  min-width:30vw;
  object-fit:scale-down;
  margin-right:2.5%;
}

#overlayText {
  min-width:30vw;
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
  top:3%;
  cursor:pointer;
  /*filter:drop-shadow(1px 1px 1px #00FFFF);*/
}

button.arrow {
  background:none;
  border:none;
  cursor:pointer; 
  flex:10%;
}


@media screen and (max-width: 1024px) {
 .banda {
  display:none;
 }

 button.exit {
  right:0;
  top:24px;
 }

 button.exit img {
  width:60%;
 }

 #overlayContent {
  margin-top:15%;
  flex-direction: column;
  overflow: scroll;
  justify-content:flex-start;
  height: 100vh;
 }

 #overlayText h2 {
  font-size:1.2rem;
  margin:0;
 }

 #overlayText p {
  font-size:1.0rem;
  overflow-y:hidden;
  margin-top:10px;
  text-align:left;
  width:100%;
 }

 button.arrow {
  margin:0px;
  align-self:flex-end;
 }

 button.arrow:focus {
    outline: none;
 }

 button.arrow img {
  width:30px;
 }

 button.arrow img:focus {
    outline: none;
 }

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
    <Overlay show={show} >
        <div className="banda head"></div>
        <div class="header">
          <button className="exit" onClick={_=> {setShow(false)}}><img alt="close the overlay" src={cross}/></button>
        </div>
        <div id="overlayMain">
        <button className="arrow"  onClick={_=> {
          const val = hitosOverlayDataIdx === 0 ? 0 : hitosOverlayDataIdx - 1 
          setHitosOverlayDataIdx(val)
        }}>
        <img src={time_back} alt="go back to last element of timeline" />
        </button>
        <div id="overlayContent">
          {noImgIdxs[hitosOverlayDataIdx]
            ? <img id="overlayImage" src={imgBig} alt="main overlay" onError={_ => {
              const arr = [...noImgIdxs]
              arr[hitosOverlayDataIdx] = false
              setNoImgIdxs(arr)
            }}  />
            : <></>}
          <div id="overlayText">
            <h2>{year}</h2>
            <p>{text}</p>
          </div>
        </div>
        <button className="arrow" onClick={ _ => {
          const val = hitosOverlayDataIdx > hitosOverlayData.length - 1
            ? hitosOverlayDataIdx 
            : hitosOverlayDataIdx + 1 
          setHitosOverlayDataIdx(val)
        }}>
         <img src={time_next} alt="go to the next element of the timeline"/>
        </button>
        </div>
        <div className="banda foot"></div>
    </Overlay>
  )
}

export default HitoOverlay;
