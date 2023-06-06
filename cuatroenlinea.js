const prompt = require('prompt-sync')();

function imprimirTablero( tablero ){
    console.log(`
|${tablero[1]}|${tablero[2]}|${tablero[3]}${tablero[4]}|${tablero[5]}|${tablero[6]}${tablero[7]}|
|${tablero[8]}|${tablero[9]}|${tablero[10]}${tablero[11]}|${tablero[12]}|${tablero[13]}${tablero[14]}|
|${tablero[15]}|${tablero[16]}|${tablero[17]}${tablero[18]}|${tablero[19]}|${tablero[20]}${tablero[21]}|
|${tablero[22]}|${tablero[23]}|${tablero[24]}${tablero[25]}|${tablero[26]}|${tablero[27]}${tablero[28]}|
|${tablero[29]}|${tablero[30]}|${tablero[31]}${tablero[32]}|${tablero[33]}|${tablero[34]}${tablero[35]}|
|${tablero[36]}|${tablero[37]}|${tablero[38]}${tablero[39]}|${tablero[40]}|${tablero[41]}${tablero[42]}|
`);
}

console.log('CUATRO EN LINEA');

console.log(`
 |1|2|3|4|5|6|7|
 |8|9|10|11|12|13|14|
 |15|16|17|18|19|20|21|
 |22|23|24|25|26|27|28|
 |29|30|31|32|33|34|35|
 |36|37|38|39|40|41|42|
 `)

 let movimiento = prompt('cual es tu movimiento?');
const movimiento_jugador = parseInt(movimiento)

if ( !(movimiento_jugador > 0 && movimiento_jugador <=42) ){
    console.log('movimiento invalido')
    return 0
    }

const tablero = {
    1: "_",
    2: "_",
    3: "_",
    4: "_",
    5: "_",
    6: "_",
    7: "_",
    8: "_",
    9: "_",
    10: "_",
    11: "_",
    12: "_",
    13: "_",
    14: "_",
    15: "_",
    16: "_",
    17: "_",
    18: "_",
    19: "_",
    20: "_",
    21: "_",
    22: "_",
    23: "_",
    24: "_",
    25: "_",
    26: "_",
    27: "_",
    28: "_",
    29: "_",
    30: "_",
    31: "_",
    32: "_",
    33: "_",
    34: "_",
    35: "_",
    36: "_",
    37: "_",
    38: "_",
    39: "_",
    40: "_",
    41: "_",
    42: "_",
}
tablero[movimiento] = 'x'
imprimirTablero(tablero)

movimiento = prompt('cual es tu movimiento?');
tablero[movimiento] = 'o'
imprimirTablero(tablero)