import {useRef,useState,useEffect} from 'react'
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

//context
import OverlayContext from './OverlayContext.js'

//assets
import logoMain from  './assets/img/logo_main.png'
import logoRight from  './assets/img/logo_2.png'
import mouse from './assets/img/mouse.png'
import music from './assets/music.mp3'

//data
import hitosBuilder from './hitos.js'


//scroll
import easyScroll from 'easy-scroll';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {
  const [show,setShow] = useState(false)
  const [content, setContent] = useState({})
  const [muted,setMuted] = useState(true)
  const [manuallyMuted,setManuallyMuted] = useState(false)
  const [hitosData,setHitosData] = useState([])

  useEffect(() =>{
    (async function(){
      const hitos = await hitosBuilder()
      setHitosData(hitos.filter(obj => Object.keys(obj).length !== 0))
    })()
  }, [])

  const ref = useRef()

  const scrollUp = ev => {
    if (ev.wheelDelta) {
      return ev.wheelDelta > 0;
    }
    return ev.deltaY < 0;
  }

  const move = (wheel) => ev =>{

    if(ev.buttons === 1){
      if(muted && !manuallyMuted)setMuted(false)
    }

    let dir = ""

    if(ev.buttons === 1 && !wheel){
      dir = -ev.movementX > 0 ? "right" : "left"
    }else{
      dir = scrollUp(ev) ? "left" : "right"
    }

    if(ev.buttons === 1 || wheel){
      easyScroll({
        scrollableDomEle: document.querySelector('#para'),
        direction: dir,
        duration: 1000,
        easingPreset: 'easeInOutQuad',
        scrollAmount:200
      });
    }

  }


  return (
    <div 
    className="App"
    onMouseMove={show ? () =>{} : move(false)}
    onWheel={show ? () =>{} : move(true)}
    >
      <header>
        <img id='logoMain' src={logoMain} alt="Logo de Andrómaco"/>
        <div id='title'>
          Descubrí <strong>nuestra historia</strong>
        </div>
        <img id='logoRight' src={logoRight} alt="Logo alternativo de Andrómaco"/>
      </header>
      <main>   
        {/* Container */}
        <Parallax horizontal={true} pages={1.4} ref={ref} id="para">
            {/* Timeline */}
            <ParallaxLayer className="layerFront" speed={2} id="timelineContainer">
              {/* Hitos */}
              <div className="layerFront" id="hitos">
                {hitosData.length !== 0 ? hitosData.map(({pos,direction,imgSmall,imgsBig,year,title,text},idx) => {
                  return ( <OverlayContext.Provider value={{show,setShow, setContent}}>
                          <Hito 
                            key={idx} 
                            idx={idx}
                            pos={pos} 
                            direction={direction} 
                            imgSmall={imgSmall} 
                            imgsBig={imgsBig}
                            year={year} 
                            title={title} 
                            text={text}
                            />
                            </OverlayContext.Provider>)}) : <></>}
              </div>
              {/* Svg */}
              <SvgTimeline/>
            </ParallaxLayer>
            {/* Grid */}
            <ParallaxLayer style={{zIndex:0}}speed={0.002} factor={0.0005}>
              <div id="grid"></div>
            </ParallaxLayer>
            {/* Stars */}
            <ParallaxLayer className="layerBack" speed={0.00002}><Points/></ParallaxLayer>
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
            <ParallaxLayer className="layerBack" style={{zIndex:0}} speed={0.002}  factor={0.3}>
                <Circle x={20} y={-40}/>
            </ParallaxLayer>
            <ParallaxLayer className="layerBack" style={{zIndex:0}} speed={0.002}  offset={1.2} factor={0.3}>
                <Circle x={-40} y={-30}/>
            </ParallaxLayer>
        </Parallax>
        <Side />
        <div id="mouse">
          <p>Arrastrá o scrolleá para conocer nuestra historía</p>
          <img src={mouse} alt="Imagen de mouse para indicar navegación horizontal" />
        </div>

        <OverlayContext.Provider value={{show,setShow, content}}>
          <HitoOverlay />
        </OverlayContext.Provider>
        <ReactAudioPlayer loop controls autoPlay volume={0.5} muted={muted} src={music}/>
        <button 
          id="mute"
          onClick={_=> {
            setMuted(!muted)
            setManuallyMuted(true)
          }}
        >
        {muted ?  "🔇" : "🔈"}
        </button>
      </main>
    </div>
  );
}

export default App;
