import hito_1 from "./assets/img/hitos/1926/IMG01.jpg"
import hito_2 from "./assets/img/hitos/1941/img01.jpg"
const hitos = [
  {
    pos: {
      x: "80px",
      y: "calc(var(--main-height)/2.3)"
    },
    "direction": "down",
    "src": hito_1,
    "year": "1926",
    "text": "Lanzamiento de Glefina"
  },
  {
    pos: {
      x: "280px",
      y: "calc(var(--main-height)/3.4)"
    },
    "src": hito_2,
    "direction": "down",
    "year": "1941"
  }
]

export default hitos
