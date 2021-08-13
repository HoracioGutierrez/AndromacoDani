import {useRef, useEffect} from 'react'
import './App.css';
import  {ReactComponent as Timeline} from './assets/timeline.svg'
import logoMain from  './assets/img/logo_main_tinted.png'
import logo95 from  './assets/img/logo_95_tinted.png'
import mouse from './assets/img/mouse.png'

const createPoint = (cName) => (pos,idx) =>{
  return (
    <div key={idx} style={pos} className={cName}> 
    </div>
  )
}

const bigPoints = [... Array(10)]
  .map(_=> { 
    const s = Math.random()*100
    return {
      width:s + "%",
      paddingTop:s + "%",
      opacity:Math.random()*0.4,
      left:Math.random()*1920 , 
      top:Math.random()*1280 + 120
    }
  }).map(createPoint("bigPoint"))

const smallPoints = [... Array(200)]
  .map(_=>{
    return {
      opacity:Math.random(),
      left:Math.random()*1920 , 
      top:Math.random()*1280 + 120
    }
  }).map(createPoint("smallPoint"))


function App() {
  const timeline = useRef()

  const getTopPoints = () =>{
    if(!timeline.current)return
    let svg = timeline.current.children[1].firstChild.children[1]
    //.childNodes[0];
    console.log()
    let maxY = 0
    for (let i = 0; i < svg.childNodes.length; i++){
      let segList = svg.childNodes[i].animatedPathSegList
      for (let j = 0 ; j < segList.length; j++){
        //console.log(segList[j].y)
        if(segList[j].y > maxY){
          maxY = segList[j].y
        }
      }
    }
    console.log(maxY)
  }

  useEffect(()=>{
    //console.log(timeline.current.querySelectorAll("st0"))
    //console.log("MAX", maxY)
    getTopPoints()

  })

  return (
    <div className="App">
    <header>
      <div id='logo'>
        <img src={logoMain} />
      </div>
      <div id='title'>
        Descubrí <strong>nuestra historia</strong>
      </div>
      <div id='logo_b'>
        <img id='logo_95_header' src={logo95} />
        <div id='time_slogan'>
          <p>Laboratorios Andrómaco</p>
          <p id="time_slogan_year">1926-2021</p>
        </div>
      </div>
    </header>
    <main>
    {bigPoints}
    {smallPoints}
     <div id="grid"></div>
      <Timeline 
        id='timeline' 
        ref={timeline}
        />
    <img id="mouse" src={mouse}/>
    </main>
    </div>
  );
}

export default App;
