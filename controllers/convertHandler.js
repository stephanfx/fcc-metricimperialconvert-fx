/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.units = {
    'gal': {spellOut: 'gallons',    'returnUnit': 'l',   convert: 3.78541},
    'l'  : {spellOut: 'liters',     'returnUnit': 'gal', convert: 0.26417},
    'mi' : {spellOut: 'miles',      'returnUnit': 'km',  convert: 1.60934},
    'km' : {spellOut: 'kilometers', 'returnUnit': 'mi',  convert: 0.62137},
    'lbs': {spellOut: 'pounds',     'returnUnit': 'kg',  convert: 0.45359},
    'kg' : {spellOut: 'kilograms',  'returnUnit': 'lbs', convert: 2.20462}
  };
  
  this.getNum = function(input) {
    var num = input.toLowerCase().split(/[a-z]/gi);
    if (num[0] === "") {
      return 1;
    }
    
    if (num[0].indexOf('/') > 0){
      var fraction = num[0].split('/');
      return fraction.length <= 2 ? fraction.reduce(function(a, b) { return a/b; }) : 'invalid number';         
    } else {
      return parseFloat(num[0]);
    }        
  };
  
  this.getUnit = function(input) {
    var unit = input.match(/[a-z]+$/gi);
    if (Object.keys(this.units).includes(unit[0].toLowerCase())) {
      return unit[0].toLowerCase();
    } else {
      return 'invalid unit';
    }    
  };
  
  this.getReturnUnit = function(initUnit) {
    return this.units[initUnit].returnUnit;
  };

  this.spellOutUnit = function(unit) {
    return this.units[unit].spellOut;
  };
  
  this.convert = function(initNum, initUnit) {
    var result = initNum * this.units[initUnit].convert;    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
