// import hito_1 from "./assets/img/hitos/1926/IMG01.jpg"
// import hito_2 from "./assets/img/hitos/1941/img01.jpg"
import h from "./assets/hitos.csv"
import Papa from "papaparse"


const hitos = [
  {
    pos: {
      x: "20px",
      y: "25%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "170px",
      y: "-12%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "280px",
      y: "44%"
    },
    "direction": "down",
  },
  {
    pos: {
      x: "400px",
      y: "-22%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "560px",
      y: "2%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "670px",
      y: "29%"
    },
    "direction": "down",
  },
  {
    pos: {
      x: "830px",
      y: "7%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "1000px",
      y: "-13%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "1220px",
      y: "3%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "1360px",
      y: "34%"
    },
    "direction": "down",
  }
]

const fetchCSV =  async () => {
  const res = await fetch(h)
  const decoder = new TextDecoder('utf-8')
  const reader = res.body.getReader()
  const data = await reader.read()
  const csvString = decoder.decode(data.value)
  return Papa.parse(csvString, {header:true, delimiter:","}).data
}

const addPos = async (hito,idx) =>{
  let imgSmall;
  let imgsBig;

  //load imgSmall
  try {
    imgSmall = await import(`./assets/img/hLow/${hito.year.replaceAll(" ","")}/${hito.hover}`)
  }catch(e){
    console.log("error cargando imagen", e)
  }
  hito.imgSmall = imgSmall?.default || ""

  // load imgBig
  imgsBig = await Promise.all(hito.fotos.split('\n')
  .filter(async foto => foto)
  .map(async f =>{
    let asset
    try{
      asset = await import(`./assets/img/hLow/${hito.year.replaceAll(" ","")}/${f}`)
    }catch(e){
      console.log("error cargando imagen", e)
    }
    return asset?.default
  }))
  hito.imgsBig = imgsBig


  if(idx < 10){
    return {...hito,...hitos[idx]}
  }else{
    return {}
  }
}

const genObj = async () =>{
  const csv = await fetchCSV()
  return await Promise.all(csv.map(addPos))
}

export default genObj
