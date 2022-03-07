const functions = require('./functions')


test('get all event numbers', () =>{
  let numbers = functions.getEvenNumbers(0,10)
  const expected = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308, 310, 312, 314, 316, 318, 320, 322, 324, 326, 328, 330, 332, 334, 336, 338, 340, 342, 344, 346, 348, 350, 352, 354, 356, 358, 360, 362, 364, 366, 368, 370, 372, 374, 376, 378, 380, 382, 384, 386, 388, 390, 392, 394, 396, 398, 400, 402, 404, 406, 408, 410, 412, 414, 416, 418, 420, 422, 424, 426, 428, 430, 432, 434, 436, 438, 440, 442, 444, 446, 448, 450, 452, 454, 456, 458, 460, 462, 464, 466, 468, 470, 472, 474, 476, 478, 480, 482, 484, 486, 488, 490, 492, 494, 496, 498, 500, 502, 504, 506, 508, 510, 512, 514, 516, 518, 520, 522, 524, 526, 528, 530, 532, 534, 536, 538, 540, 542, 544, 546, 548, 550, 552, 554, 556, 558, 560, 562, 564, 566, 568, 570, 572, 574, 576, 578, 580, 582, 584, 586, 588, 590, 592, 594, 596, 598, 600, 602, 604, 606, 608, 610, 612, 614, 616, 618, 620, 622, 624, 626, 628, 630, 632, 634, 636, 638, 640, 642, 644, 646, 648, 650, 652, 654, 656, 658, 660, 662, 664, 666, 668, 670, 672, 674, 676, 678, 680, 682, 684, 686, 688, 690, 692, 694, 696, 698, 700, 702, 704, 706, 708, 710, 712, 714, 716, 718, 720, 722, 724, 726, 728, 730, 732, 734, 736, 738, 740, 742, 744, 746, 748, 750, 752, 754, 756, 758, 760, 762, 764, 766, 768, 770, 772, 774, 776, 778, 780, 782, 784, 786, 788, 790, 792, 794, 796, 798, 800, 802, 804, 806, 808, 810, 812, 814, 816, 818, 820, 822, 824, 826, 828, 830, 832, 834, 836, 838, 840, 842, 844, 846, 848, 850, 852, 854, 856, 858, 860, 862, 864, 866, 868, 870, 872, 874, 876, 878, 880, 882, 884, 886, 888, 890, 892, 894, 896, 898, 900, 902, 904, 906, 908, 910, 912, 914, 916, 918, 920, 922, 924, 926, 928, 930, 932, 934, 936, 938, 940, 942, 944, 946, 948, 950, 952, 954, 956, 958, 960, 962, 964, 966, 968, 970, 972, 974, 976, 978, 980, 982, 984, 986, 988, 990, 992, 994, 996, 998, 1000, 1002, 1004, 1006, 1008, 1010, 1012, 1014, 1016, 1018, 1020, 1022, 1024, 1026, 1028, 1030, 1032, 1034, 1036, 1038, 1040, 1042, 1044, 1046, 1048, 1050, 1052, 1054, 1056, 1058, 1060, 1062, 1064, 1066, 1068, 1070, 1072, 1074, 1076, 1078, 1080, 1082, 1084, 1086, 1088, 1090, 1092, 1094, 1096, 1098, 1100, 1102, 1104, 1106, 1108, 1110, 1112, 1114, 1116, 1118, 1120, 1122, 1124, 1126, 1128, 1130, 1132, 1134, 1136, 1138, 1140, 1142, 1144, 1146, 1148, 1150, 1152, 1154, 1156, 1158, 1160, 1162, 1164, 1166, 1168, 1170, 1172, 1174, 1176, 1178, 1180, 1182, 1184, 1186, 1188, 1190, 1192, 1194, 1196, 1198, 1200, 1202, 1204, 1206, 1208, 1210, 1212, 1214, 1216, 1218, 1220, 1222, 1224, 1226, 1228, 1230, 1232, 1234, 1236, 1238, 1240, 1242, 1244, 1246, 1248, 1250, 1252, 1254, 1256, 1258, 1260, 1262, 1264, 1266, 1268, 1270, 1272, 1274, 1276, 1278, 1280, 1282, 1284, 1286, 1288, 1290, 1292, 1294, 1296, 1298, 1300, 1302, 1304, 1306, 1308, 1310, 1312, 1314, 1316, 1318, 1320, 1322, 1324, 1326, 1328, 1330, 1332, 1334, 1336, 1338, 1340, 1342, 1344, 1346, 1348, 1350, 1352, 1354, 1356, 1358, 1360, 1362, 1364, 1366, 1368, 1370, 1372, 1374, 1376, 1378, 1380, 1382, 1384, 1386, 1388, 1390, 1392, 1394, 1396, 1398, 1400, 1402, 1404, 1406, 1408, 1410, 1412, 1414, 1416, 1418, 1420, 1422, 1424, 1426, 1428, 1430, 1432, 1434, 1436, 1438, 1440, 1442, 1444, 1446, 1448, 1450, 1452, 1454, 1456, 1458, 1460, 1462, 1464, 1466, 1468, 1470, 1472, 1474, 1476, 1478, 1480, 1482, 1484, 1486, 1488, 1490, 1492, 1494, 1496, 1498, 1500, 1502, 1504, 1506, 1508, 1510, 1512, 1514, 1516, 1518, 1520, 1522, 1524, 1526, 1528, 1530, 1532, 1534, 1536, 1538, 1540, 1542, 1544, 1546, 1548, 1550, 1552, 1554, 1556, 1558, 1560, 1562, 1564, 1566, 1568, 1570, 1572, 1574, 1576, 1578, 1580, 1582, 1584, 1586, 1588, 1590, 1592, 1594, 1596, 1598, 1600, 1602, 1604, 1606, 1608, 1610, 1612, 1614, 1616, 1618, 1620, 1622, 1624, 1626, 1628, 1630, 1632, 1634, 1636, 1638, 1640, 1642, 1644, 1646, 1648, 1650, 1652, 1654, 1656, 1658, 1660, 1662, 1664, 1666, 1668, 1670, 1672, 1674, 1676, 1678, 1680, 1682, 1684, 1686, 1688, 1690, 1692, 1694, 1696, 1698, 1700, 1702, 1704, 1706, 1708, 1710, 1712, 1714, 1716, 1718, 1720, 1722, 1724, 1726, 1728, 1730, 1732, 1734, 1736, 1738, 1740, 1742, 1744, 1746, 1748, 1750, 1752, 1754, 1756, 1758, 1760, 1762, 1764, 1766, 1768, 1770, 1772, 1774, 1776, 1778, 1780, 1782, 1784, 1786, 1788, 1790, 1792, 1794, 1796, 1798, 1800, 1802, 1804, 1806, 1808, 1810, 1812, 1814, 1816, 1818, 1820, 1822, 1824, 1826, 1828, 1830, 1832, 1834, 1836, 1838, 1840, 1842, 1844, 1846, 1848, 1850, 1852, 1854, 1856, 1858, 1860, 1862, 1864, 1866, 1868, 1870, 1872, 1874, 1876, 1878, 1880, 1882, 1884, 1886, 1888, 1890, 1892, 1894, 1896, 1898, 1900, 1902, 1904, 1906, 1908, 1910, 1912, 1914, 1916, 1918, 1920, 1922, 1924, 1926, 1928, 1930, 1932, 1934, 1936, 1938, 1940, 1942, 1944, 1946, 1948, 1950, 1952, 1954, 1956, 1958, 1960, 1962, 1964, 1966, 1968, 1970, 1972, 1974, 1976, 1978, 1980, 1982, 1984, 1986, 1988, 1990, 1992, 1994, 1996, 1998]
  expect(expected).toEqual(expect.arrayContaining(numbers))
});

test('toUpper test', () =>{
  let expected = "/ALAMAKOTA/"
  const output = functions.toUpper("alamakota")
  expect(expected).toEqual(expect.stringMatching(output))
});

test('moveVector test', () =>{
  let scalar = 10
  let x = 2
  let y = 3.14
  let expected_x = 12
  let expected_y = 13.14
  const output = functions.moveVector(x,y,scalar)
  expect(output[0]).toEqual(expected_x)
  expect(output[1]).toEqual(expected_y)
});

test('arrayFunction', () =>{
  const isEven= "Is even"
  const notEven= "Not even"
  min = 0
  max = Math.floor(1000);
  let  random_val = Math.floor(Math.random() * (max - min + 1)) + min;
  for( let i = 0 ;i<random_val; i++)
  {
    let expected = functions.arrayFunction(i)
    if(i % 2 == 0)
    {
      expect(expected()).toEqual(expect.stringMatching(isEven))
      expect(expected()).not.toEqual(expect.stringMatching(notEven))
    }
    else
    {
      expect(expected()).toEqual(expect.stringMatching(notEven))
      expect(expected()).not.toEqual(expect.stringMatching(isEven))
    }
  }

});

test('typof test', () =>{
  let test_function = functions.switchFunction
  expect(test_function(2)).toEqual(expect.stringMatching('numb'))
  expect(test_function(true)).toEqual(expect.stringMatching('bool'))
  expect(test_function("FOX")).toEqual(expect.stringMatching('str'))
});
test('typof function test', () =>{
  let test_function = functions.switchFunction
  min = 0
  max = Math.floor(1000);
  let  random_val = Math.floor(Math.random() * (max - min + 1)) + min;
  expect(test_function(() => {return random_val})).toEqual(random_val)
});
test('fibbonaciTest', () =>{
  let test_function = functions.fibbonaci

  min = 0
  max = Math.floor(100);


  let  random_val = Math.floor(Math.random() * (max - min + 1)) + min;
  let fibonnaci = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887,9227465,14930352,24157817,39088169,63245986,102334155,165580141,267914296,433494437,701408733,1134903170,1836311903,2971215073,4807526976,7778742049,12586269025,20365011074,32951280099,53316291173,86267571272,139583862445,225851433717,365435296162,591286729879,956722026041,1548008755920,2504730781961,4052739537881,6557470319842,10610209857723,17167680177565,27777890035288,44945570212853,72723460248141,117669030460994,190392490709135,308061521170129,498454011879264,806515533049393,1304969544928657,2111485077978050,3416454622906707,5527939700884757,8944394323791464,14472334024676221,23416728348467685,37889062373143906,61305790721611591,99194853094755497,160500643816367088,259695496911122585,420196140727489673,679891637638612258,1100087778366101931,1779979416004714189,2880067194370816120,4660046610375530309,7540113804746346429,12200160415121876738,19740274219868223167,31940434634990099905,51680708854858323072,83621143489848422977,135301852344706746049,218922995834555169026]
  expect(test_function(random_val)).toEqual(fibonnaci[random_val])
});

test('factorial test', () =>{
  let test_function = functions.factorialize

  min = 0
  max = Math.floor(100);


  let  random_val = Math.floor(Math.random() * (max - min + 1)) + min;
  let factor= [
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
    121645100408832000,
    2432902008176640000,
    51090942171709440000,
    1.1240007277776077e+21,
    2.585201673888498e+22,
    6.204484017332394e+23,
    1.5511210043330986e+25,
    4.0329146112660565e+26,
    1.0888869450418352e+28,
    3.0488834461171384e+29,
    8.841761993739701e+30,
    2.6525285981219103e+32,
    8.222838654177922e+33,
    2.631308369336935e+35,
    8.683317618811886e+36,
    2.9523279903960412e+38,
    1.0333147966386144e+40,
    3.719933267899012e+41,
    1.3763753091226343e+43,
    5.23022617466601e+44,
    2.0397882081197442e+46,
    8.159152832478977e+47,
    3.3452526613163803e+49,
    1.4050061177528798e+51,
    6.041526306337383e+52,
    2.6582715747884485e+54,
    1.1962222086548019e+56,
    5.5026221598120885e+57,
    2.5862324151116818e+59,
    1.2413915592536073e+61,
    6.082818640342675e+62,
    3.0414093201713376e+64,
    1.5511187532873822e+66,
    8.065817517094388e+67,
    4.2748832840600255e+69,
    2.308436973392414e+71,
    1.2696403353658276e+73,
    7.109985878048635e+74,
    4.052691950487722e+76,
    2.350561331282879e+78,
    1.3868311854568986e+80,
    8.320987112741392e+81,
    5.075802138772248e+83,
    3.146997326038794e+85,
    1.98260831540444e+87,
    1.2688693218588417e+89,
    8.247650592082472e+90,
    5.443449390774431e+92,
    3.647111091818868e+94,
    2.4800355424368305e+96,
    1.711224524281413e+98,
    1.197857166996989e+100,
    8.504785885678622e+101,
    6.123445837688608e+103,
    4.4701154615126834e+105,
    3.3078854415193856e+107,
    2.480914081139539e+109,
    1.8854947016660498e+111,
    1.4518309202828584e+113,
    1.1324281178206295e+115,
    8.946182130782973e+116,
    7.156945704626378e+118,
    5.797126020747366e+120,
    4.75364333701284e+122,
    3.945523969720657e+124,
    3.314240134565352e+126,
    2.8171041143805494e+128,
    2.4227095383672724e+130,
    2.107757298379527e+132,
    1.8548264225739836e+134,
    1.6507955160908452e+136,
    1.4857159644817607e+138,
    1.3520015276784023e+140,
    1.24384140546413e+142,
    1.1567725070816409e+144,
    1.0873661566567424e+146,
    1.0329978488239052e+148,
    9.916779348709491e+149,
    9.619275968248206e+151,
    9.426890448883242e+153,
    9.33262154439441e+155
]
  expect(test_function(random_val)).toEqual(factor[random_val])
});
test('returnPowerOf', () =>{
  let test_function = functions.returnPowerOf
  expect(test_function(2)).toEqual(4)
});

test('convertFToC test', () =>{
  let test_function = functions.convertFtoC
  expect(test_function(100)).toBeCloseTo(37.777777778,5)
  expect(test_function(0)).toBeCloseTo(-17.777777778,5)
  expect(test_function(22.3)).toBeCloseTo(-5.3888888889,5)
});
