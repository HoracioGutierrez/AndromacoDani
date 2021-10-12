import {createContext} from 'react'

const OverlayContext = createContext({
  show:false,
  setShow:(show) => {},
  hitosOverlayData: {title:"", text:"", imgs: []},
  setHitosOverlayData: (hitosOverlayData) =>{},
  hitosOverlayDataIdx: 0,
  setHitosOverlayDataIdx: (hitosOverlayDataIdx) => {},
  nLoadedImages: 0,
  setNLoadedImages: (nLoadedImages) => {}
})
export default OverlayContext; 
