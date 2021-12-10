import {useState,useEffect,useCallback} from 'react'
import ReactAudioPlayer from 'react-audio-player'
import './App.css';

//components
import  SvgTimeline from './components/Timeline.js'
import Points from './components/Points.js'
import Hito from './components/Hito.js'
import Side from './components/SideBar.js'
import Textura from './components/Textura.js'
import Circle from './components/Circle.js'
import HitoOverlay from './components/Hito/HitoOverlay.js'
import Navbar from './components/Navbar/Navbar'

//context
import OverlayContext from './OverlayContext.js'

//assets
import mouse from './assets/img/mouse.png'
import music from './assets/music.mp3'
import speaker from './assets/img/speaker.png'

//data
import hitosBuilder from './hitos.js'


//scroll
import easyScroll from 'easy-scroll';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {
  const [show,setShow] = useState(false)
  const [hitosOverlayData, setHitosOverlayData] = useState([])
  const [hitosOverlayDataIdx,setHitosOverlayDataIdx] = useState([])
  const [hitosData,setHitosData] = useState([])
  const [muted,setMuted] = useState(true)
  const [manuallyMuted,setManuallyMuted] = useState(false)
  const [nPages,setNPages] = useState(9)
  const [nLoadedImages, setNLoadedImages] = useState(0)

  const handleDown = useCallback(e => {
    if(show){
      if(e.key === "Escape"){
        setShow(false)
      }

      if(e.key === "ArrowRight"){
        setHitosOverlayDataIdx(hitosOverlayDataIdx + 1)
      }

      if(e.key === "ArrowLeft"){
        setHitosOverlayDataIdx(hitosOverlayDataIdx - 1)
      }
    }
  },[hitosOverlayDataIdx,show])


  useEffect(() =>{
    (async function(){
      if(hitosData.length === 0 || hitosOverlayData.length === 0){
        const hitos = await hitosBuilder()
        setHitosData(hitos.filter(obj => Object.keys(obj).length !== 0))
        setHitosOverlayData(hitos
          .filter(obj => Object.keys(obj).length !== 0)
          .map(({year, imgBig, text})=> {
            return {year,imgBig,text}
          }))
      }
    })()

    if(window.innerWidth < 1024){
      setNPages(2)
    }

    window.addEventListener("keydown", handleDown)
    return () => window.removeEventListener("keydown", handleDown)

  },[nPages,hitosOverlayData,hitosData,handleDown])


  const scrollUp = ev => {
    if (ev.wheelDelta) {
      return ev.wheelDelta > 0;
    }
    return ev.deltaY < 0;
  }

  const move = (wheel) => ev =>{

    if(ev.buttons === 1){
      if(muted && !manuallyMuted)setMuted(false)
      document.querySelector('audio').play()
    }

    const dir = ev.buttons === 1 && !wheel 
      ? -ev.movementX > 0 ? "right" : "left"
      : scrollUp(ev) ? "left" : "right"

    if(ev.buttons === 1 || wheel){
      const container = document
        .getElementById('timelineContainer')

      if(container){
        let left = container.getBoundingClientRect().left

        // limits 
        if(left > -2300 || (left < -2300 && dir === "left")){
          easyScroll({
            scrollableDomEle: document.querySelector('#para'),
            direction: dir,
            duration: 1000,
            easingPreset: 'easeInOutQuad',
            scrollAmount:400
          });
        }
      }
    }

  }

  return (
    <div 
      className="App"
      onMouseMove={show ? () =>{} : move(false)}
      onWheel={show ? () =>{} : move(true)}
    >
      {/* <Navbar /> */}
      <main>   
        {/* Container */}
        <Parallax  horizontal={true} pages={nPages}  id="para">
            {/* Timeline */}
            <ParallaxLayer className="layerFront" factor={0.9} speed={2} id="timelineContainer">
              {/* Hitos */}
              <div style={{display: nLoadedImages === hitosData.length - 1 ? 'block' : 'none'}} 
                className="layerFront" id="hitos">
                {hitosData.length !== 0 ? hitosData.map(({pos,direction,imgSmall,year,title},idx) => {
                  return ( <OverlayContext.Provider 
                              value={{show,setShow, setHitosOverlayData, setHitosOverlayDataIdx, setNLoadedImages, nLoadedImages}} key={idx} >
                          <Hito 
                            key={idx} 
                            idx={idx}
                            pos={pos} 
                            direction={direction} 
                            imgSmall={imgSmall} 
                            year={year} 
                            title={title} 
                            />
                            </OverlayContext.Provider>)}) : <></>}
              </div>
            {/* Svg */}
            {nLoadedImages === hitosData.length - 1 ?  <SvgTimeline/> : <div id="loading"> <p>cargando...</p></div>}
            </ParallaxLayer>
            {/* Grid */}
            <ParallaxLayer style={{zIndex:0}}speed={0.002} factor={0.0005}>
              <div id="grid"></div>
            </ParallaxLayer>
            {/* Stars */}
          <ParallaxLayer className="layerBack" speed={0.00000002}><Points/></ParallaxLayer>
            {/* Grid Blob */}
            <ParallaxLayer className="layerBack" style={{zIndex:0}} speed={0.002} offset={0.8} factor={0.5}>
              <Textura top={25}/>
            </ParallaxLayer>
            <ParallaxLayer className="layerBack" style={{zIndex:0}} speed={0.2} offset={0.3} factor={0.1}>
              <Textura top={-60} />
            </ParallaxLayer>
            {/* Blurred Circles */}
            <ParallaxLayer className="layerBack" style={{zIndex:0}} speed={0.2} offset={0.0} factor={0.05}>
                <Circle x={1} y={48}/>
            </ParallaxLayer>
            <ParallaxLayer className="layerBack" style={{zIndex:0}} speed={0.2} offset={0.0} factor={0.05}>
                <Circle x={180} y={28}/>
                <Textura />
            </ParallaxLayer>
            <ParallaxLayer className="layerBack" style={{zIndex:0}} speed={0.002}  factor={0.3}>
                <Circle x={20} y={-40}/>
            </ParallaxLayer>
            <ParallaxLayer className="layerBack" style={{zIndex:0}} speed={0.002}  offset={1.2} factor={0.8}>
                <Circle x={-40} y={-30}/>
                <Circle x={0} y={20}/>
            </ParallaxLayer>
        </Parallax>
        <Side />
        <div id="mouse">
          <p>Mover el cursor hacia derecha e izquierda para conocer nuestra historia</p>
          <img src={mouse} alt="Imagen de mouse para indicar navegación horizontal" />
        </div>

        <OverlayContext.Provider value={{show,setShow, hitosOverlayData, hitosOverlayDataIdx, setHitosOverlayDataIdx}}>
          <HitoOverlay />
        </OverlayContext.Provider>
        <ReactAudioPlayer loop controls autoPlay volume={0.1} muted={muted} src={music} type="audio/mp3" />
        <button 
          id="mute"
          onClick={_=> {
            setMuted(!muted)
            setManuallyMuted(true)
          }}
        >
        <img alt="speaker, used to mute the music" className={`speaker ${muted ? 'muted' : ''}`} src={speaker}/>
        {/*muted ?  "🔇" : "🔈"*/}
        </button>
      </main>
    </div>
  );
}

export default App;
