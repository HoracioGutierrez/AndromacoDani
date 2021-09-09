import {createContext} from 'react'

const OverlayContext = createContext({
  show:false,
  setShow:(show) => {},
  content: {title:"", text:"", imgs: ""},
  setContent: (content) =>{}
})
export default OverlayContext; 
