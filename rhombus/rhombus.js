// var rHeight = 5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol = "*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol){
  upLeft (pHeight, pColorEven, pColorOdd, pSymbol);
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downLeft (pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
 
  var rLine = "";
  for (i=1; i<pHeight; i++);
    rLine += "<p>";
  
  //Fill left side
  for (x=1; x<=pHeight-i; x++){
    //rLine += "-";
    rLine += "<span class='space'>" + pSymbol + "<span>";
  }
  
  for (j=x; j<=pHeight; j++){
    if (j%2)
      rLine += "<span style = 'color:" + pColorEven + ";'>" + pSymbol + "<span>";
    else
      rLine += "<span style = 'color:" + pColorOdd + ";'>" + pSymbol + "<span>";
   }
  rLine += "<p>";
  // console.log (rLine);
  }
  document.getElementbyId("upLeft").innerHTML = rLine;
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
 
  var rLine = "";
  for (i=0; i<pHeight; i++);
    rLine += "<p>";
  
  for (j=0; j<=i; j++){
    if (j%2)
      rLine += "<span style = 'color:" + pColorEven + ";'>" + pSymbol + "<span>";
    else
      rLine += "<span style = 'color:" + pColorOdd + ";'>" + pSymbol + "<span>";
   }
  rLine += "<p>";
  // console.log (rLine);
  }
  document.getElementbyId("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){

  var rLine = "";
  for (i=pHeight; i>0; i--);
    rLine += "<p>";
  
  for (j=0;  j<i; j++){
    if (j%2)
       rLine += "<span style = 'color:" + pColorEven + ";'>" + pSymbol + "<span>";
    else
      rLine += "<span style = 'color:" + pColorOdd + ";'>" + pSymbol + "<span>";
   }
  rLine += "<p>";
  // console.log (rLine)
  }
  document.getElementById("downRight").innerHTML = rLine;
}
