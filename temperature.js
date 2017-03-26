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
        result = result.toFixed(1)+" Farenheit ";
      }
      else{
        result = (num - 32)*5/9;
        result = result.toFixed(1)+" Celsius ";
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
    case 'c':
        select();
        break;
    case 'f':
        select();
        break;
    case 'k f':
        modificacion();
        break;
    default:
        converted.innerHTML = "error! "+m[2];
  }
  
}

function modificacion() {
  var result;
  var temp = original.value;
  // var regexp = /([-+]?\d+(?:\.\d*)?)\s*(k\sf|K\sF|k\sc|K\sC|([fFcC]))/;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*(k\sf|K\sF|k\sc|K\sC|([fFcC]))/;
  var m = temp.match(regexp);
  var num = m[1];
  var type = m[2];
  
  if (m) {
    if (type == "k f"){
      num = parseFloat(num);
      result = 1.8 * (num - 273.15) + 32;
      result = result.toFixed(1)+" Farenheit";
      converted.innerHTML = result;
    }else if (type == "k c"){
      num = parseFloat(num);
      result = (num-273.15);
      result = result.toFixed(1)+" Celsius";
      converted.innerHTML = result;
    }else if (type == 'c' || type == 'C') {
        result = (num * 9/5)+32;
        result = result.toFixed(1)+" Farenheit";
      }
      else {
        result = (num - 32)*5/9;
        result = result.toFixed(1)+" Celsius";
      }
      converted.innerHTML = result;
  }else {
  converted.innerHTML = "ERROR! Prueba '-4.2C' '373k f' '250k c'";
  }
}