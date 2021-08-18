import './App.css';
//components
import  SvgTimeline from './components/Timeline.js'
import Points from './components/Points.js'
import Hito from './components/Hito.js'
import Side from './components/SideBar.js'
//assets
import logoMain from  './assets/img/logo_main.png'
import logoRight from  './assets/img/logo_2.png'
import mouse from './assets/img/mouse.png'
//data
import hitosData from './hitos.js'

function App() {

  return (
    <div className="App">
      <header>
        <img id='logoMain' src={logoMain} alt="Logo de Andrómaco"/>
        <div id='title'>
        Descubrí <strong>nuestra historia</strong>
        </div>
        <img id='logoRight' src={logoRight} alt="Logo alternativo de Andrómaco"/>
      </header>
      <main>
        <Points />
        <Side />
        <div id="timelineContainer">
          <div id="hitos">
            {hitosData.map(({pos,src,year,text},idx) => {
              return <Hito key={idx} pos={pos} src={src} year={year} text={text} />
            })}
          </div>
          <div id="grid"></div>
          <SvgTimeline/>
        </div>
        <img id="mouse" src={mouse} alt="Imagen de mouse para indicar navegación horizontal" />
      </main>
    </div>
  );
}

export default App;
