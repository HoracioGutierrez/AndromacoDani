import {createContext} from 'react'

const OverlayContext = createContext({show:false,setShow:(show) => {}})
export default OverlayContext; 
