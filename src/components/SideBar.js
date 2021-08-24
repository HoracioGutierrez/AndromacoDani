
import styled from 'styled-components'

const yearRanges = ["1926-1935", "1936-1945", "1946-1955", "1956-1965", 
                    "1966-1975", "1976-1985", "1986-1995", "1996-2005",
                    "2006-2015", "2016-2021"]

const Sidebar = styled.div`
background-color: #ffffff91;
padding: 10px;
width:120px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
position:fixed;
right:20px;
top:15%;
z-index:10;
`
const Year = styled.a`
width:110px;
font-family:monospaced;
text-decoration:none;
underline:none;
color: #003462;
font-size:0.5rem;

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
