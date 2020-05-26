
var color2 = ["#0000ff",
    "#0014ff",
    "#0045ff",
    "#0065ff",
    "#0085ff",
    "#00a6ff",
    "#00cbff",
    "#00ebff",
    "#00fff7",
    "#00ffd6",
    "#00ffb5",
    "#00ff94",
    "#00ff73",
    "#00ff52",
    "#00ff29",
    "#00ff08",
    "#10ff00",
    "#31ff00",
    "#52ff00",
    "#73ff00",
    "#94ff00",
    "#b5ff00",
    "#deff00",
    "#ffff00",
    "#ffe700",
    "#ffc300",
    "#ffa200",
    "#ff8200",
    "#ff6100",
    "#ff4100",
    "#ff2c00",
    "#ff2000",
    "#ff1400",
    "#ff0000"]
var colorList = {
    tem:[
    "#020C64",
    "#071E78",
    "#11318B",
    "#1B449F",
    "#2657B3",
    "#306AC7",
    "#3B7EDB",
    "#4E8ADD",
    "#6196E0",
    "#74A3E2",
    "#87AFE5",
    "#9BBCE8",
    "#9AC4DC",
    "#99CDD0",
    "#98D6C4",
    "#97E8AD",
    "#D7DE7E",
    "#EADB70",
    "#F4D963",
    "#FACC4F",
    "#F7B42D",
    "#F29B00",
    "#F19303",
    "#F0840A",
    "#EF7511",
    "#EE6618",
    "#EE581F",
    "#E74B1A",
    "#E03F16",
    "#D93312",
    "#D0240E",
    "#C20003",
    "#B50109",
    "#A90210",
    "#8A0519",
    "#6F0015",
    "#50000F",
    ],
    //比湿
    hum:[
    "#550283", 
    "#6f0174", 
    "#8a005f", 
    "#aa0048", 
    "#c50030", 
    "#d3001c", 
    "#f50007", 
    "#ff1203", 
    "#ff2a04", 
    "#fb4800", 
    "#fe5f01", 
    "#fe7d02", 
    "#ff9502", 
    "#feab01", 
    "#fcb901", 
    "#fcca00", 
    "#ffd703", 
    "#fee303", 
    "#fdf101", 
    "#f8fd03", 
    "#d0f304", 
    "#aee608", 
    "#8add05", 
    "#68d00a", 
    "#3bc20c", 
    "#18b70e", 
    "#07b925", 
    "#07c447", 
    "#07d278", 
    "#01de98", 
    "#03eabe", 
    "#03f5e1", 
    "#00f0fd", 
    "#01c9ff", 
    "#00a3fe", 
    "#017cfe", 
    "#014aff",
    "#0028ff",
    "#0001fd"
 ],
 win: ["#0003fb", "#0037ff", "#026aff", "#00a3ff", "#04d1fc", "#00fef6", "#02ecc7", "#03db92", "#04ce60", "#06be2c", "#1eba0e", "#47c80b", "#7bd708", "#b1e505", "#e1f701", "#fff503", "#fde500", "#fed001", "#fcc200", "#ffad05", "#ff9100", "#ff6c02", "#ff4b01", "#ff2803", "#ff0305", "#e3001b", "#c40032", "#9d014b", "#7b006d"],
 pre:[
    "#ffffff", "#cfffcf", "#00ff00", "#33cc33", "#009999", "#008200", "#0096ff", "#0000ff", "#fa00ff"
 ]
}
var colorLabel = {
    tem:Array.from({length:37},(v,i)=>3+0.5*i),
    hum:[0, 10, 15].concat(Array.from({length:36},(v,i)=>i*2 + 20)).concat(100),
    win:[0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2 ,2.4, 2.6, 2.8 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    pre:[0,1,4,10,20,35,60,100,250]
}
var linearColors = [
    ['#3b7ba1', '#3a99a1', '#32a66e', '#a1a13b', '#a13b3b', '#a4399a'],
    ['#a50026','#f6fbd0','#313695'],
    ['#ffffe5', '#90ee90', '#008ae5'],
    ['rgb(116,219,211)','rgb(255,255,199)','rgb(255,255,128)','rgb(217,194,121)',
        'rgb(135,96,38)','rgb(150,150,181)','rgb(181,150,181)','rgb(252,252,252)'],
    ['rgb(203,245,245)','rgb(129,227,188)','rgb(48,207,146)'],
    ['rgb(242,241,162)','rgb(255,255,0)','rgb(252,3,69)','rgb(176,7,237)','rgb(7,29,173)']
]
var getColorsByType =function(type,method,range,linearId){
  if(method==='default'){
      const numsArr = colorLabel[type],colors = colorList[type];
      return val=>{
          let index =  numsArr.findIndex(v=> val<= v)
          const hexColor = colors[index===-1?numsArr.length:
              (index>=colors.length?colors.length - 1:index)
              ]

          return [
              parseInt( hexColor.substr(1,2),16),
              parseInt( hexColor.substr(3,2),16),
              parseInt( hexColor.substr(5,2),16),
              245
          ]
      }
  }else{
      const colors = linearColors[linearId];
      let scale = chroma.scale(colors).domain(range)
      return v =>{
          const rgb = scale(v).rgb();
          return rgb.concat(245);
      }
  }
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const levelColorDefault = [
    'rgba(0,0,255,1)',
    'rgba(0,255,255,1)',
    'rgba(0,255,0,1)',
    'rgba(255,255,0,1)',
    'rgba(255,0,0,1)'
];
const rgbToHex = (rgb) =>{ //rgb(r,g,b)
    if(typeof rgb === 'string' && rgb.match(/rgb\(/)){
        return '#'+rgb.replace(/rgb\(|\)/g,'').split(/\,/).reduce((a,b,index) => 
            index === 1 ? componentToHex(+a) + componentToHex(+b) : a + componentToHex(+b)
        )
    }else {
        return rgb
    }
}
var tempColor = []
colorList.win.forEach(function(item){
    tempColor.push(rgbToHex(item));
});

