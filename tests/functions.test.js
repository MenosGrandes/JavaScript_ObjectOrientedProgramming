//https://obfuscator.io/ USE THIS!
/*
const functions = require('./functions')


test('get all event numbers', () => {
  const expected = [[0, 10, 6], [0, 13, 7], [-151, 122, 137], [30, 5122, 2547], [5432, 699347, 346958]];
  for (let i = 0; i < expected.length; i++) {
    let numbers = functions.getEvenNumbers(expected[i][0], expected[i][1])
    expect(numbers).toEqual((expected[i][2]))
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

test('toUpper test', () => {

  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return [result, characters[getRandomInt(0, characters.length)]];
  }


  for (let i = 0; i < 1000; i++) {
    var r = makeid(getRandomInt(0, 100));
    const output = functions.getOccurencesOfChar(r[1], r[0])
    var result = [...r[0]].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
    var x = (typeof result[r[1]] === 'undefined') ? 0 : result[r[1]];
    expect(x).toEqual(output)

  }
});

test('moveVector test', () => {
  let scalar = 10
  let x = 2
  let y = 3.14
  let expected_x = 12
  let expected_y = 13.14
  const output = functions.moveVector(x, y, scalar)
  expect(output[0]).toEqual(expected_x)
  expect(output[1]).toEqual(expected_y)
});

test('arrayFunction', () => {
  const isEven = "Is even"
  const notEven = "Not even"
  min = 0
  max = getRandomInt(0, 1000);
  let random_val = getRandomInt(min, max);
  for (let i = 0; i < random_val; i++) {
    let expected = functions.arrayFunction(i)
    if (i % 2 == 0) {
      expect(expected()).toEqual(expect.stringMatching(isEven))
      expect(expected()).not.toEqual(expect.stringMatching(notEven))
    }
    else {
      expect(expected()).toEqual(expect.stringMatching(notEven))
      expect(expected()).not.toEqual(expect.stringMatching(isEven))
    }
  }

});

test('typof test', () => {
  let test_function = functions.switchFunction
  expect(test_function(2)).toEqual(expect.stringMatching('numb'))
  expect(test_function(true)).toEqual(expect.stringMatching('bool'))
  expect(test_function("FOX")).toEqual(expect.stringMatching('str'))
});
test('typof function test', () => {
  let test_function = functions.switchFunction
  min = 0
  max = Math.floor(1000);
  let random_val = getRandomInt(min, max);
  expect(test_function(() => { return random_val })).toEqual(random_val)
});

test('fibbonaciTest', () => {
  let test_function = functions.fibonacci;
  const fibonnaci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025, 20365011074, 32951280099, 53316291173, 86267571272, 139583862445, 225851433717, 365435296162, 591286729879, 956722026041, 1548008755920, 2504730781961, 4052739537881, 6557470319842, 10610209857723, 17167680177565, 27777890035288, 44945570212853, 72723460248141, 117669030460994, 190392490709135, 308061521170129, 498454011879264, 806515533049393, 1304969544928657, 2111485077978050, 3416454622906707, 5527939700884757, 8944394323791464, 14472334024676221n, 23416728348467685n, 37889062373143906n, 61305790721611591n, 99194853094755497n, 160500643816367088n, 259695496911122585n, 420196140727489673n, 679891637638612258n, 1100087778366101931n, 1779979416004714189n, 2880067194370816120n, 4660046610375530309n, 7540113804746346429n, 12200160415121876738n, 19740274219868223167n, 31940434634990099905n, 51680708854858323072n, 83621143489848422977n, 135301852344706746049n, 218922995834555169026n]

  min = 0
  max = getRandomInt(0, 20);
  for (let i = 0; i < 1000; i++) {
    const randomFib = getRandomInt(min, max);
    expect(test_function(randomFib)).toEqual(fibonnaci[randomFib])
  }

});

test('factorial test', () => {
  let test_function = functions.factorialize

  min = 0
  max = getRandomInt(0, 20);

  let random_val = getRandomInt(min, max);
  const factor = [
    1,
    1,
    2,
    6,
    24,
    120,
    720,
    5040,
    40320,
    362880,
    3628800,
    39916800,
    479001600,
    6227020800,
    87178291200,
    1307674368000,
    20922789888000,
    355687428096000,
    6402373705728000,
    2432902008176640000n,
  ]


  for (let i = 0; i < 1000; i++) {
    let randomEnd = getRandomInt(min, max);
    expect(test_function(randomEnd)).toEqual(factor[randomEnd])
  }
});
test('returnPowerOf', () => {
  let test_function = functions.returnPowerOf
  expect(test_function(2)).toEqual(4)
});

test('convertFToC test', () => {
  let test_function = functions.convertFtoC
  expect(test_function(100)).toBeCloseTo(37.777777778, 5)
  expect(test_function(0)).toBeCloseTo(-17.777777778, 5)
  expect(test_function(22.3)).toBeCloseTo(-5.3888888889, 5)
});
*/
const _0x2168fc=_0x44f9;(function(_0x1169be,_0x4d8ecf){const _0x65bd1d=_0x44f9,_0x3d6ad2=_0x1169be();while(!![]){try{const _0x78459f=-parseInt(_0x65bd1d(0x202))/0x1+-parseInt(_0x65bd1d(0x204))/0x2*(-parseInt(_0x65bd1d(0x1f5))/0x3)+parseInt(_0x65bd1d(0x1fd))/0x4*(parseInt(_0x65bd1d(0x206))/0x5)+-parseInt(_0x65bd1d(0x205))/0x6*(parseInt(_0x65bd1d(0x1f8))/0x7)+-parseInt(_0x65bd1d(0x1fa))/0x8+-parseInt(_0x65bd1d(0x20f))/0x9+parseInt(_0x65bd1d(0x200))/0xa;if(_0x78459f===_0x4d8ecf)break;else _0x3d6ad2['push'](_0x3d6ad2['shift']());}catch(_0x338008){_0x3d6ad2['push'](_0x3d6ad2['shift']());}}}(_0x3071,0xa3401));const functions=require(_0x2168fc(0x209));test(_0x2168fc(0x20e),()=>{const _0x4fb2d9=_0x2168fc,_0x2dfa74=[[0x0,0xa,0x6],[0x0,0xd,0x7],[-0x97,0x7a,0x89],[0x1e,0x1402,0x9f3],[0x1538,0xaabd3,0x54b4e]];for(let _0x49110d=0x0;_0x49110d<_0x2dfa74['length'];_0x49110d++){let _0x3f20d7=functions[_0x4fb2d9(0x216)](_0x2dfa74[_0x49110d][0x0],_0x2dfa74[_0x49110d][0x1]);expect(_0x3f20d7)['toEqual'](_0x2dfa74[_0x49110d][0x2]);}});function _0x3071(){const _0x47cd23=['2ZeUrwS','30yqbDxt','6465MZhJIg','random','charAt','./functions','toBeCloseTo','undefined','typof\x20test','factorialize','get\x20all\x20event\x20numbers','9061479cYecio','Is\x20even','convertFtoC','moveVector','toEqual','ceil','moveVector\x20test','getEvenNumbers','getOccurencesOfChar','fibonacci','numb','Not\x20even','length','stringMatching','371136dOqByv','convertFToC\x20test','bool','799113vHEgSw','typof\x20function\x20test','6437864NKblzy','arrayFunction','switchFunction','2136FEiMZA','fibbonaciTest','factorial\x20test','32106520gyzbGt','returnPowerOf','973794vFhTjN','floor'];_0x3071=function(){return _0x47cd23;};return _0x3071();}function _0x44f9(_0x4d397b,_0x2c9b25){const _0x3071d4=_0x3071();return _0x44f9=function(_0x44f955,_0x5b869e){_0x44f955=_0x44f955-0x1f3;let _0x25809e=_0x3071d4[_0x44f955];return _0x25809e;},_0x44f9(_0x4d397b,_0x2c9b25);}function getRandomInt(_0x195225,_0x34a0ab){const _0x20bcfe=_0x2168fc;return _0x195225=Math[_0x20bcfe(0x214)](_0x195225),_0x34a0ab=Math[_0x20bcfe(0x203)](_0x34a0ab),Math[_0x20bcfe(0x203)](Math[_0x20bcfe(0x207)]()*(_0x34a0ab-_0x195225))+_0x195225;}test('toUpper\x20test',()=>{const _0x1fae9c=_0x2168fc;function _0x15e76d(_0x3c52f4){const _0x47ffe9=_0x44f9;var _0x5309b1='',_0x18dd3c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',_0x49f8f3=_0x18dd3c[_0x47ffe9(0x1f3)];for(var _0x1db774=0x0;_0x1db774<_0x3c52f4;_0x1db774++){_0x5309b1+=_0x18dd3c[_0x47ffe9(0x208)](Math[_0x47ffe9(0x203)](Math[_0x47ffe9(0x207)]()*_0x49f8f3));}return[_0x5309b1,_0x18dd3c[getRandomInt(0x0,_0x18dd3c[_0x47ffe9(0x1f3)])]];}for(let _0xd0ee30=0x0;_0xd0ee30<0x3e8;_0xd0ee30++){var _0x17942f=_0x15e76d(getRandomInt(0x0,0x64));const _0x442676=functions[_0x1fae9c(0x217)](_0x17942f[0x1],_0x17942f[0x0]);var _0x4124d9=[..._0x17942f[0x0]]['reduce']((_0x3ff694,_0x2693ee)=>{return _0x3ff694[_0x2693ee]=_0x3ff694[_0x2693ee]?_0x3ff694[_0x2693ee]+0x1:0x1,_0x3ff694;},{}),_0x569e61=typeof _0x4124d9[_0x17942f[0x1]]===_0x1fae9c(0x20b)?0x0:_0x4124d9[_0x17942f[0x1]];expect(_0x569e61)[_0x1fae9c(0x213)](_0x442676);}}),test(_0x2168fc(0x215),()=>{const _0x14c449=_0x2168fc;let _0x51809d=0xa,_0x4c4455=0x2,_0x2b0e86=3.14,_0x4ed28d=0xc,_0x106872=13.14;const _0x5065b4=functions[_0x14c449(0x212)](_0x4c4455,_0x2b0e86,_0x51809d);expect(_0x5065b4[0x0])[_0x14c449(0x213)](_0x4ed28d),expect(_0x5065b4[0x1])[_0x14c449(0x213)](_0x106872);}),test(_0x2168fc(0x1fb),()=>{const _0x275481=_0x2168fc,_0x533e79=_0x275481(0x210),_0xf5ed05=_0x275481(0x21a);min=0x0,max=getRandomInt(0x0,0x3e8);let _0x1b54a2=getRandomInt(min,max);for(let _0x2f9963=0x0;_0x2f9963<_0x1b54a2;_0x2f9963++){let _0x5d0370=functions[_0x275481(0x1fb)](_0x2f9963);_0x2f9963%0x2==0x0?(expect(_0x5d0370())[_0x275481(0x213)](expect['stringMatching'](_0x533e79)),expect(_0x5d0370())['not'][_0x275481(0x213)](expect[_0x275481(0x1f4)](_0xf5ed05))):(expect(_0x5d0370())[_0x275481(0x213)](expect[_0x275481(0x1f4)](_0xf5ed05)),expect(_0x5d0370())['not']['toEqual'](expect[_0x275481(0x1f4)](_0x533e79)));}}),test(_0x2168fc(0x20c),()=>{const _0x51358a=_0x2168fc;let _0x5a2bd7=functions[_0x51358a(0x1fc)];expect(_0x5a2bd7(0x2))[_0x51358a(0x213)](expect[_0x51358a(0x1f4)](_0x51358a(0x219))),expect(_0x5a2bd7(!![]))[_0x51358a(0x213)](expect[_0x51358a(0x1f4)](_0x51358a(0x1f7))),expect(_0x5a2bd7('FOX'))[_0x51358a(0x213)](expect[_0x51358a(0x1f4)]('str'));}),test(_0x2168fc(0x1f9),()=>{const _0x25f8f2=_0x2168fc;let _0x3d9d6a=functions[_0x25f8f2(0x1fc)];min=0x0,max=Math['floor'](0x3e8);let _0x4300bf=getRandomInt(min,max);expect(_0x3d9d6a(()=>{return _0x4300bf;}))['toEqual'](_0x4300bf);}),test(_0x2168fc(0x1fe),()=>{const _0x5da716=_0x2168fc;let _0x7aacff=functions[_0x5da716(0x218)];const _0x21392b=[0x0,0x1,0x1,0x2,0x3,0x5,0x8,0xd,0x15,0x22,0x37,0x59,0x90,0xe9,0x179,0x262,0x3db,0x63d,0xa18,0x1055,0x1a6d,0x2ac2,0x452f,0x6ff1,0xb520,0x12511,0x1da31,0x2ff42,0x4d973,0x7d8b5,0xcb228,0x148add,0x213d05,0x35c7e2,0x5704e7,0x8cccc9,0xe3d1b0,0x1709e79,0x2547029,0x3c50ea2,0x6197ecb,0x9de8d6d,0xff80c38,0x19d699a5,0x29cea5dd,0x43a53f82,0x6d73e55f,0xb11924e1,0x11e8d0a40,0x1cfa62f21,0x2ee333961,0x4bdd96882,0x7ac0ca1e3,0xc69e60a65,0x1415f2ac48,0x207fd8b6ad,0x3495cb62f5,0x5515a419a2,0x89ab6f7c97,0xdec1139639,0x1686c8312d0,0x2472d96a909,0x3af9a19bbd9,0x5f6c7b064e2,0x9a661ca20bb,0xf9d297a859d,0x19438b44a658,0x28e0b4bf2bf5,0x42244003d24d,0x6b04f4c2fe42,0xad2934c6d08f,0x1182e2989ced1,0x1c5575e509f60,0x2dd8587da6e31,0x4a2dce62b0d91,0x780626e057bc2,0xc233f54308953,0x13a3a1c2360515,0x1fc6e116668e68,0x336a82d89c937dn,0x533163ef0321e5n,0x869be6c79fb562n,0xd9cd4ab6a2d747n,0x16069317e428ca9n,0x23a367c34e563f0n,0x39a9fadb327f099n,0x5d4d629e80d5489n,0x96f75d79b354522n,0xf444c01834299abn,0x18b3c1d91e77decdn,0x27f80ddaa1ba7878n,0x40abcfb3c0325745n,0x68a3dd8e61eccfbdn,0xa94fad42221f2702n,0x111f38ad0840bf6bfn,0x1bb433812a62b1dc1n,0x2cd36c2e32a371480n,0x48879faf5d0623241n,0x755b0bdd8fa9946c1n,0xbde2ab8cecafb7902n];min=0x0,max=getRandomInt(0x0,0x14);for(let _0x5a49d1=0x0;_0x5a49d1<0x3e8;_0x5a49d1++){const _0x3bdc1c=getRandomInt(min,max);expect(_0x7aacff(_0x3bdc1c))['toEqual'](_0x21392b[_0x3bdc1c]);}}),test(_0x2168fc(0x1ff),()=>{const _0x1ea03d=_0x2168fc;let _0xe7aae5=functions[_0x1ea03d(0x20d)];min=0x0,max=getRandomInt(0x0,0x14);let _0x4320c9=getRandomInt(min,max);const _0x23687c=[0x1,0x1,0x2,0x6,0x18,0x78,0x2d0,0x13b0,0x9d80,0x58980,0x375f00,0x2611500,0x1c8cfc00,0x17328cc00,0x144c3b2800,0x13077775800,0x130777758000,0x1437eeecd8000,0x16beecca730000,0x21c3677c82b40000n];for(let _0x399831=0x0;_0x399831<0x3e8;_0x399831++){let _0x2fbd2c=getRandomInt(min,max);expect(_0xe7aae5(_0x2fbd2c))[_0x1ea03d(0x213)](_0x23687c[_0x2fbd2c]);}}),test(_0x2168fc(0x201),()=>{const _0x1bef51=_0x2168fc;let _0x540fff=functions[_0x1bef51(0x201)];expect(_0x540fff(0x2))[_0x1bef51(0x213)](0x4);}),test(_0x2168fc(0x1f6),()=>{const _0x4af4ca=_0x2168fc;let _0x11b8ac=functions[_0x4af4ca(0x211)];expect(_0x11b8ac(0x64))[_0x4af4ca(0x20a)](37.777777778,0x5),expect(_0x11b8ac(0x0))[_0x4af4ca(0x20a)](-17.777777778,0x5),expect(_0x11b8ac(22.3))['toBeCloseTo'](-5.3888888889,0x5);});