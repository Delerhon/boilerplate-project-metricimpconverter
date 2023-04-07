const { test } = require("mocha");


/*
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
*/
function ConvertHandler() {
  const objUnits = {
    kg: {
      convertIn: 'lbs',
      kgToLbs: 1 / 0.453592,
      convertTo: (num) => {
        return num * objUnits.kg.kgToLbs
      },
      spelling: 'kilograms'
    }, 
    lbs: {
      convertIn: 'kg',      
      lbsToKg: 0.453592,
      convertTo: (num) => {
        return num * objUnits.lbs.lbsToKg
      },
      spelling: 'pounds'
    },
    km: {
      convertIn: 'mi',
      kmToMi: 1 / 1.60934,
      convertTo: (num) => {
        return num * objUnits.km.kmToMi
      },
      spelling: 'kilometers'
    }, 
    mi: {
      convertIn: 'km',
      miToKm: 1.60934,
      convertTo: (num) => {
        return num * objUnits.mi.miToKm
      },
      spelling: 'miles'
    },  
    L: {
      convertIn: 'gal',
      lToGal: 1 / 3.78541,
      convertTo: (num) => {
        return num * objUnits.L.lToGal
      },
      spelling: 'litres'
    },  
    gal: {
      convertIn: 'L',
      galToL: 3.78541,
      convertTo: (num) => {
        return num * objUnits.gal.galToL
      },
      spelling: 'gallons'
    }
  }

  this.getNum = (input) => {

    const regexNoNum = /\d+/
    const isNoNum = !!input.match(regexNoNum)
    if (!isNoNum) { return 1}
    const regexFractional   = /(\/)/g
    const testFractial      = !!input.match(regexFractional)
    if (testFractial) {
      const isDoubleFraction  = input.match(regexFractional)
      if (isDoubleFraction.length > 1) {return 'error'}

      const leftNum = handleNum(input.match(/([\d,.]+)\/([\d,.]+)/)[1])
      const rightNum = handleNum(input.match(/([\d,.]+)\/([\d,.]+)/)[2])
      
      return !!leftNum && !!rightNum ? leftNum / rightNum : false;

    } else {
      
      return handleNum(input);
    }
  };
  
  this.getUnit = (input) => {

    const regexIsInput = /(\w+)$/i // finde einen gültigen Textwert
    const testUnitExist = !!input.match(regexIsInput)
    if (!testUnitExist) {return 'error1'}

    const regexValidUnit = /(gal|L|lbs|kg|mi|km)$/i
    const testUnit = !!input.match(regexValidUnit)
    if (!testUnit) { return 'error2' }
    const inputUnit = input.match(regexValidUnit)[1]
    
    return !!inputUnit.match(/^[Ll]{1}$/) ? inputUnit.toUpperCase() : inputUnit.toLowerCase()
  };
  
  this.getReturnUnit = (initUnit) => {
    const test = objUnits[initUnit].convertIn
    return objUnits[initUnit].convertIn
  };

  this.spellOutUnit = (unit) => {
    const test = objUnits[unit].spelling
    return objUnits[unit].spelling
  };
  
  this.convert = (initNum, initUnit) => {
    const roundDigits = 5
    const refactor = Math.pow(10, roundDigits)
    return Math.round(objUnits[initUnit].convertTo(initNum) * refactor) / refactor
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    let result;
    
    return result;
  };

  this.trimInput = (input) => input.replace(/ /g, '')
  
}

module.exports = ConvertHandler;

const handleNum = (input) => {
  input = input.toString()
  const regex = /^((\d+[.,]{0,1}\d+)|(\d+))/gi // finde einen gültigen Zahlenwert
  const testNum = !!input.match(regex)
  if (!testNum) return testNum
  let num = input.match(regex)[0]
  
  num = /,/g.test(num) ? num.replace(",", ".") * 1 : num * 1;

  return num
}