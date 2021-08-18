import {useRef, useEffect} from 'react'
import './App.css';
// import  {ReactComponent as Timeline} from './assets/timeline.svg'
import  SvgTimeline from './Timeline.js'
import logoMain from  './assets/img/logo_main.png'
import logoRight from  './assets/img/logo_2.png'
import mouse from './assets/img/mouse.png'
import hitosData from './hitos.js'
import Hito from './components/Hito.js'


const createPoint = (cName) => (stl,idx) =>{
  if(stl?.backgroundImage){console.log(stl)}
  return (
    <div key={idx} style={stl} className={cName}> 
    </div>
  )
}

const createHito = (d) =>{
  return <Hito pos={d.pos} src={d.src} year={d.year}/>
}
 
const hitos = hitosData.map(createHito)

const bigPoints = [... Array(10)]
  .map(_=> { 
    const s = (Math.random()*50) + 30
    return {
      width:`calc(var(--main-width)*${s/100})` ,
      paddingTop:`calc(var(--main-height)*${s/100})`,
      opacity:Math.random() + 0.2,
      marginLeft:Math.random()*3792.7 , 
      marginTop:Math.random()*(1080/2)
    }
  }).map(createPoint("point bigPoint"))

const smallPoints = [... Array(400)]
  .map(_=>{
    return {
      opacity:(Math.random()*0.3) + 0.2,
      marginLeft:Math.random()*3792.7, 
      marginTop:Math.random()*1080+ 120
    }
  }).map(createPoint("point smallPoint"))



function App() {

  useEffect(()=>{

  })

  return (
    <div className="App">
      <header>
        <img id='logoMain' src={logoMain} />
        <div id='title'>
        Descubrí <strong>nuestra historia</strong>
        </div>
        <img id='logoRight' src={logoRight} />
      </header>
      <main>
        <div>
          {bigPoints}
          {smallPoints}
        </div>
        <div id="timelineContainer">
          <div id="hitos">
            {hitos}
          </div>
          <div id="grid"></div>
          <SvgTimeline/>
        </div>
        <img id="mouse" src={mouse}/>
      </main>
    </div>
  );
}

export default App;
