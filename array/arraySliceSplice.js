
let arrSlice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let sliceData = arrSlice.slice(1, 3);
console.log(sliceData);
//[ 2, 3, 4 ]
console.log(arrSlice);
//[
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9, 0
// ]


let arrSplice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let spliceData = arrSplice.splice(1, 3, 22, 33, 44, 55, 66, 77, 88, 666);
console.log(spliceData);
//[ 2, 3, 4 ]
console.log(arrSplice);
//[
//    1, 22,  33, 44, 55, 66,
//   77, 88, 666,  5,  6,  7,
//    8,  9,   0
// ]