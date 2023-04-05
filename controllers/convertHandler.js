function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    const regex = /^((\d+[.,]\d+)|(\d+))\w+$/i // finde einen gültigen Zahlenwert
    const testNum = !!input.match(regex)
    if (!testNum) { return testNum}
    result = input.match(regex)[1] || false

    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    const regexIsInput = /^(\d+[.,]\d+|\d+)(\w+)$/i // finde einen gültigen Textwert
    const testUnitExist = !!input.match(regexIsInput)
    if (!testUnitExist) {return 'noLettersFound'}

    const regexValidUnit = /(gal|L|lbs|kg|mi|km)$/i
    const testUnit = !!input.match(regexValidUnit)
    if (!testUnit) { return testUnit}

    result = input.match(regexValidUnit)[1]
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };

  this.trimInput = function(input) {
    return input.replace(/ /g, '')
  }
  
}

module.exports = ConvertHandler;
