var temColor = [
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
]
var colorNum = Array.from({length:36},(v,i)=>-30+i*2)

var getColors = val=>{
   let index =  colorNum.findIndex(v=> val<= v)
   const hexColor = temColor[index===-1?colorNum.length:index]
    return [
       parseInt( hexColor.substr(1,2),16),
       parseInt( hexColor.substr(3,2),16),
       parseInt( hexColor.substr(5,2),16),
       245
    ]

}