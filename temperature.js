"use strict"; // Use ECMAScript 5 strict mode in browsers that support it


function select() {
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  // var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var m = temp.match(regexp);
  // converted.innerHTML = "ERROR! "+m[2];
    // if (m) {
      var num = m[1];
      var type = m[2];
      // converted.innerHTML = "ERROR! "+type;
      num = parseFloat(num);
      if (type == 'c' || type == 'C') {
        result = (num * 9/5)+32;
        result = result.toFixed(1)+" Farenheit "+type;
      }
      else{
        result = (num - 32)*5/9;
        result = result.toFixed(1)+" Celsius "+type;
      }
      converted.innerHTML = result;
    // }
    // else {
    //   converted.innerHTML = "ERROR! Try something like '-4.2C' instead ";
    // }
}

function calculate() {
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*(k\sf|K\sF|k\sc|K\sC|([fFcC]))/;
  // var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  
  var m = temp.match(regexp);
  switch(m[2]) {
    case 'C':
    case 'c':
        select();
        break;
    case 'F':
    case 'f':
        select();
        break;
    case 'K C':
    case 'k c':
    case 'K F':
    case 'k f':
        modificacion();
        break;
    default:
        converted.innerHTML = "error! only (C/c, F/f, K F/k f, K C/k c) You type: "+m[2];
  }
  
}

function modificacion() {
  var result;
  var temp = original.value;
  // var regexp = /([-+]?\d+(?:\.\d*)?)\s*(k\sf|K\sF|k\sc|K\sC|([fFcC]))/;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*(k\sf|K\sF|k\sc|K\sC)/;
  var m = temp.match(regexp);
  var num = m[1];
  var type = m[2];
  
  if (m) {
    if (type == "k f" | type == "K F"){
      num = parseFloat(num);
      result = 1.8 * (num - 273.15) + 32;
      result = result.toFixed(1)+" Farenheit "+type;
      converted.innerHTML = result;
    }else if (type == "k c"| type == "K C"){
      num = parseFloat(num);
      result = (num-273.15);
      result = result.toFixed(1)+" Celsius "+type;
      converted.innerHTML = result;
    }
    converted.innerHTML = result;
  }else {
  converted.innerHTML = "error! only (C/c, F/f, K F/k f, K C/k c) You type: "+type;
  }
}