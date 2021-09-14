
import styled from 'styled-components'

const yearRanges = ["1926-1935", "1936-1945", "1946-1955", "1956-1965", 
                    "1966-1975", "1976-1985", "1986-1995", "1996-2005",
                    "2006-2015", "2016-2021"]

const Sidebar = styled.div`
position:fixed;
width:120px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
padding:10px;
right:20px;
top:15%;
z-index:0;
background-color: #ffffff2e;
border-radius:10px;
`
const Year = styled.a`
width:110px;
font-family:'Poppins';
text-align:center;
/*padding-left:10px;*/
text-decoration:none;
underline:none;
color:#093255;
font-size:0.7vw;

&:first-child{
  animation:glow 1s ease-in-out;
  animation-direction:fowards;
  animation-iteration-count:20;
  animation-play-state: running; 
}

&::before {
  width:110px;
}

&:hover {
  &::before {
    content:"⟶ |";
  }
  margin-left:-24px;
  overflow:hidden;
  color:#00FFFF;
}

@keyframes glow {
  0% {
    color:#093255;
  }
  50% {
    &::before {content:"⟶ |";}
    color:#00FFFF;
  }
  100%{
    color:#093255;
  }
}
`

function Side(){
  return(
    <Sidebar>
      {yearRanges.map((y,idx) => {
        return (
          <Year 
          key={idx}
          href="#"
          >
          {y}
          </Year>
        )
      })}
    </Sidebar>
    )
}

export default Side
