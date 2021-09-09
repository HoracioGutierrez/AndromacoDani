import styled from 'styled-components'
import {useContext} from 'react'
import OverlayContext from '../.././OverlayContext.js'
import overlayHead from '../../assets/img/overlayHead.png'
import overlayFoot from '../../assets/img/logo_foot.png'


const Overlay = styled.div`
display: ${props =>  props.show ? "flex" : "none"};
overflow:hidden;
flex-direction:column;
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
background-color: #00000075;
color:white;
z-index:100;
padding:24px;

.overlayInfo {
  display:flex;
  flex-direction:row;
  height:80vh;
}

.banda {
  height:2vh;
  background-repeat:no-repeat;
  background-position:center;
  background-size:scale-down;
}

.head {
  background-image: url(${overlayHead});
 /* padding-bottom:6%;*/
  height:10vh;
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
  padding-top:4%;
  height:10vh;
}

.overlayText {
  width:80vw;
  text-aligh:justify;
  white-space:pre-line;
}

img {
  width:40vw;
  object-fit: scale-down;
  margin-top:3%;
}


h2 {
  font-size:2rem;
}

p {
  /*overflow-y:scroll;*/
  width:80%;
  margin:0 auto;
  padding-right:20px;
  text-align:justify;
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

button {
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
`

const HitoOverlay = () =>{
  const {show,setShow, content} = useContext(OverlayContext)
  const {text,title} = content
  const imgs = content.imgs || []

  return (
    <Overlay show={show}>
        <div class="header">
          <div className="banda head"></div>
          <button onClick={_=> {setShow(false)}}>X</button>
        </div>
        <div className="overlayInfo">
          <img src={imgs[0]} />
          <div className="overlayText">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
        <div className="banda foot"></div>
    </Overlay>
  )
}

export default HitoOverlay;
