// let value = 56895423;
// const range = [2000,1000,500,200,100,50,20,10,5,2,1];

// let res;
// let mod;
// const result = [];
// for(i=0;i<=range.length;i++){
//     if(value >= range[i]){
//         mod = (value % range[i]);
//         res = Math.floor(value/range[i])
//         value=mod;
//         console.log(range[i], "*" ,res ,"=",range[i]*res );
//     }
// }

// ////////////////////////////////////
// const mean = [5,6,7,8,9];
// var res = 0;
// for(i=0;i<mean.length;i++){
//     res = res+mean[i];
// }
// console.log(res/mean.length);

// ///////////////////////////////////////////////
// const medium = [5, 2, 8,1,6, 9, 4,9];
// const medium    = ["a","p","j","i","g","k"]
// for (i = 0; i < medium.length; i++) {
//   for (j = 0; j < medium.length; j++) {
//     if (medium[i] < medium[j]) {
//       [medium[i], medium[j]] = [medium[j], medium[i]];
//     }
//   }
// }

// console.log(medium);

// if (medium.length % 2 !== 0) {   // for odd values length
//   res = medium.length / 2;
//   console.log("odd",medium[res]);
// }else{                              // for even values length
//     res = medium.length / 2;
//     console.log(`even ${medium[res-1]},${medium[res]}`);
// }

const mode = [2,5,6,6,6,62,8,7];
const result = [];
let num =0;
let value;
for(i=0;i<mode.length;i++){
    let count=0;
    for(j=0;j<mode.length;j++){
      if(mode[i] == mode[j]){
        count++;
      }
    }
    num < count && (num = count,value = mode[i])
}
console.log(`${value}:${num}`);

