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
      x: "140px",
      y: "-7%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "250px",
      y: "44%"
    },
    "direction": "down",
  },
  {
    pos: {
      x: "330px",
      y: "-28%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "480px",
      y: "-9%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "600px",
      y: "17%"
    },
    "direction": "down",
  },
  {
    pos: {
      x: "750px",
      y: "2%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "870px",
      y: "10%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "940px",
      y: "33%"
    },
    "direction": "down",
  },
  {
    pos: {
      x: "1080px",
      y: "-4%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "1160px",
      y: "46%"
    },
    "direction": "down",
  },
  {
    pos: {
      x: "1230px",
      y: "4%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "1350px",
      y: "34%"
    },
    "direction": "down",
  },
  {
    pos: {
      x: "1430px",
      y: "-11%"
    },
    "direction": "up",
  },{
    pos: {
      x: "1500px",
      y: "30%"
    },
    "direction": "down",
  },{
    pos: {
      x: "1570px",
      y: "-26%"
    },
    "direction": "up",
  },{
    pos: {
      x: "1660px",
      y: "42%"
    },
    "direction": "down",
  },{
    pos: {
      x: "1720px",
      y: "-18%"
    },
    "direction": "up",
  },
  {
    pos: {
      x: "1800px",
      y: "53%"
    },
    "direction": "down",
  },{
    pos: {
      x: "1880px",
      y: "-8%"
    },
    "direction": "up",
  },{
    pos: {
      x: "1950px",
      y: "44%"
    },
    "direction": "down",
  },
  {
    pos: {
      x: "2040px",
      y: "-14%"
    },
    "direction": "up",
  },{
    pos: {
      x: "2100px",
      y: "36%"
    },
    "direction": "down",
  },{
    pos: {
      x: "2180px",
      y: "-20%"
    },
    "direction": "up",
  },{
    pos: {
      x: "2240px",
      y: "30%"
    },
    "direction": "down",
  },{
    pos: {
      x: "2300px",
      y: "-28%"
    },
    "direction": "up",
  },{
    pos: {
      x: "2380px",
      y: "27%"
    },
    "direction": "down",
  },{
    pos: {
      x: "2420px",
      y: "-24%"
    },
    "direction": "up",
  },{
    pos: {
      x: "2500px",
      y: "42%"
    },
    "direction": "down",
  },{
    pos: {
      x: "2570px",
      y: "8%"
    },
    "direction": "up",
  },{
    pos: {
      x: "2630px",
      y: "36%"
    },
    "direction": "down",
  },{
    pos: {
      x: "2700px",
      y: "7%"
    },
    "direction": "up",
  },{
    pos: {
      x: "2780px",
      y: "27%"
    },
    "direction": "down",
  },{
    pos: {
      x: "2830px",
      y: "8%"
    },
    "direction": "up",
  },{
    pos: {
      x: "2900px",
      y: "34%"
    },
    "direction": "down",
  },{
    pos: {
      x: "2970px",
      y: "4%"
    },
    "direction": "up",
  },{
    pos: {
      x: "3030px",
      y: "48%"
    },
    "direction": "down",
  },{
    pos: {
      x: "3100px",
      y: "6%"
    },
    "direction": "up",
  },{
    pos: {
      x: "3180px",
      y: "30%"
    },
    "direction": "down",
  },{
    pos: {
      x: "3240px",
      y: "-15%"
    },
    "direction": "up",
  },{
    pos: {
      x: "3300px",
      y: "10%"
    },
    "direction": "down",
  },{
    pos: {
      x: "3370px",
      y: "-3%"
    },
    "direction": "up",
  },{
    pos: {
      x: "3430px",
      y: "15%"
    },
    "direction": "down",
  },{
    pos: {
      x: "3500px",
      y: "-6%"
    },
    "direction": "up",
  },{
    pos: {
      x: "3570px",
      y: "26%"
    },
    "direction": "down",
  },{
    pos: {
      x: "3672px",
      y: "15%"
    },
    "direction": "up",
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
  let imgBig;

  //load imgSmall
  try {
    imgSmall = await import(`./assets/img/hLow/${hito.year.replaceAll(" ","")}/${hito.hover}`)
  }catch(e){
    console.log("error cargando imagen", e)
  }
  hito.imgSmall = imgSmall?.default || ""

  //load imgBig
  try {
    const pathStr = `./assets/img/hLow/collage/${hito.year.replaceAll(" ","")}.png`
    imgBig = await import(pathStr)
  }catch(e){
    console.log("error cargando imagen", e)
  }
  hito.imgBig = imgBig

  return {...hito,...hitos[idx]}
}

const genObj = async () =>{
  const csv = await fetchCSV()
  return await Promise.all(csv.map(addPos))
}

export default genObj
