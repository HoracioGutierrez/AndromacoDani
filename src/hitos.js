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
      x: "120px",
      y: "00%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "180px",
      y: "44%"
    },
    "direction": "down",
  },
  {
    pos: {
      x: "240px",
      y: "-22%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "360px",
      y: "-26%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "400px",
      y: "19%"
    },
    "direction": "down",
  },
  {
    pos: {
      x: "460px",
      y: "-13%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "540px",
      y: "2%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "620px",
      y: "0%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "690px",
      y: "34%"
    },
    "direction": "down",
  },
  {
    pos: {
      x: "740px",
      y: "30%"
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
