function sum(a, b) {
  return a + b;
}
function convertFromMeterToJard(meter) {
  return meter * 1.0936132983;
}
function convertFromJardToMeter(jard) {
  return jard * 0.914399999999998;
}

function convert(from, conversionCallback) {
  return conversionCallback(from);
}

module.exports = {}
module.exports.sum = sum;
module.exports.convertFromMeterToJard = convertFromMeterToJard;
module.exports.convertFromJardToMeter = convertFromJardToMeter;
module.exports.convert = convert;
