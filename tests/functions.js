function getEvenNumbers(from, to) {

  let numbers = []
  for(let i = to; i < to;i++)
  {
    if(i %2 == 0)
    {
      numbers.push(i);
    }
  }
  return numbers

}

function toUpper(str)
{
  let return_str = ""
  for(ch of str)
  {
    return_str += String.fromCharCode(ch.charCodeAt(0) - 32)

  }
  return return_str
}

function moveVector(x,y,scalar)
{
  x = x+scalar
  y = y+scalar
  return [x,y]
}


function arrayFunction(number)
{
  if(number %2 == 0)
  {
    return () => { return "Is even"}
  }
  return () => { return "Not even"}
}
function switchFunction(value)
{
  switch (typeof value) {
    case 'string':
      return 'str'
    case 'number':
      return 'numb'
    case 'boolean':
      return 'bool'
    case 'function':
      return value()

    default:
      "undefined";
  }
}
function fibbonaci(number)
{
  let n1 = 0, n2 = 1, nextTerm;

  for (let i = 1; i <= number; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return n1
}
function factorialize(num) {
  if (num < 0) 
    return -1;
  else if (num == 0) 
    return 1;
  else {
    return (num * factorialize(num - 1));
  }
}
function returnPowerOf(number)
{
    return number**2
}
function convertFtoC(temp)
{
  var fToCel = (temp- 32) * 5 / 9;
  return fToCel;
}
module.exports = {};
module.exports.getEvenNumbers = getEvenNumbers
module.exports.toUpper = toUpper
module.exports.moveVector = moveVector
module.exports.arrayFunction= arrayFunction
module.exports.switchFunction = switchFunction
module.exports.fibbonaci=fibbonaci
module.exports.factorialize=factorialize
module.exports.returnPowerOf=returnPowerOf
module.exports.convertFtoC=convertFtoC
