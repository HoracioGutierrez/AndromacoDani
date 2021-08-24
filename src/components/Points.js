import styled from 'styled-components'
const vals = ((n) => [...Array(n)]
  .map(() => `${Math.floor(Math.random()*3792.7)}px ${Math.floor(Math.random()*1080)}px #00FFFF`)
  .join(" , "))(1000)


const Points = styled.div`
position:absolute;
width:2px;
height:2px;
background:transparent;
box-shadow: ${vals};

&:after {
  content: " ";
  position: absolute;
  top: 1080px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow:${vals};
}
`
export default Points
