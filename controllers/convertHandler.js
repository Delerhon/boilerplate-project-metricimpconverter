function ConvertHandler() {
  
  this.getNum = (input) => {
    
    const regex = /^((\d+[.,]{0,1}\d+)|(\d+))\w+$/i // finde einen gültigen Zahlenwert
    const testNum = !!input.match(regex)
    if (!testNum) { 
      return testNum
    }
    let num = input.match(regex)[1]
    
    if (/,/g.test(num)) {
      num = num.replace(",", ".")
    }

    return num * 1 || false;
  };
  
  this.getUnit = (input) => {
    
    const regexIsInput = /^(\d+[.,]\d+|\d+)(\w+)$/i // finde einen gültigen Textwert
    const testUnitExist = !!input.match(regexIsInput)
    if (!testUnitExist) {return 'noLettersFound'}

    const regexValidUnit = /(gal|L|lbs|kg|mi|km)$/i
    const testUnit = !!input.match(regexValidUnit)
    if (!testUnit) { return testUnit }

    return input.match(regexValidUnit)[1] ;
  };
  
  this.getReturnUnit = (initUnit) => {
    let result;
    
    return result;
  };

  this.spellOutUnit = (unit) => {
    let result;
    
    return result;
  };
  
  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    let result;
    
    return result;
  };

  this.trimInput = (input) => input.replace(/ /g, '')
  
}

module.exports = ConvertHandler;
