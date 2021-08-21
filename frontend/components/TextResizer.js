
export default function txtResize(txt, initialFontSize, initialFontFamily, containerWidth) {
    console.log(txt, initialFontSize, initialFontFamily, containerWidth);
    
    if(initialFontFamily === undefined){
      initialFontFamily = "Arial"
    }
    console.log(initialFontFamily);
    let myCanvas = document.createElement("canvas");
    myCanvas.innerHTML = txt;
    document.body.append(myCanvas);
    let myContext = myCanvas.getContext("2d");
    // let initialFontSize = 25;
    console.log(myContext.font);
    console.log(initialFontSize);
    myContext.font = `${initialFontSize}px ${initialFontFamily}`;
    console.log(myContext.font);
    
    let txtWidth = myContext.measureText(txt).width;
    
    console.log(parseInt(txtWidth), parseInt(containerWidth));
    while(parseInt(txtWidth) > parseInt(containerWidth)){
        --initialFontSize;
        myContext.font = `${initialFontSize}px ${initialFontFamily}`;
        txtWidth = myContext.measureText(txt).width;
        console.log(txtWidth);
        console.log(myContext.font)
      }
      let fontSize = myContext.font.split(' ')[0];
      console.log(fontSize);

   return {
       finalWidth: txtWidth,
       finalFontSize: fontSize,
   }
  }
//   txtResize("joseph francis fink", 25, undefined, 50);