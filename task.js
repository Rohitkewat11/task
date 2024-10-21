// find the uses of minimum notes given ammount==============>
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

// Found the avarage number of given array============>
// const mean = [5,6,7,8,9];
// var res = 0;
// for(i=0;i<mean.length;i++){
//     res = res+mean[i];
// }
// console.log(res/mean.length);

// find the middle value of given array================>
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

// find the maximum count of number who's present in array==============>
// const mode = [2,5,6,6,6,62,8,7];
// const result = [];
// let num =0;
// let value;
// for(i=0;i<mode.length;i++){
//     let count=0;
//     for(j=0;j<mode.length;j++){
//       if(mode[i] == mode[j]){
//         count++;
//       }
//     }
//     num < count && (num = count,value = mode[i])
// }
// console.log(`${value}:${num}`);

// Reverse array based on given index number========>
// const A = [2,3,7,65,0,8,4]
// const index = 4;
// const B = [];
// for(i=index;i<A.length;i++){
//     B.push(A[i]);
// }
// for(j=0;j<=index-1;j++){
//     B.push(A[j]);
// }
// console.log(B);


// remove pair of element form given string=========>
// let str = "oppo";
// str = str.split("");

//     for (i = 0; i < str.length; i++) {
//         if (str[i] == str[i + 1]) {
//           str.splice(i, 2);
//           i--;
//         }
//       }
// console.log(str.join(""));

// find the large word in the array ==============>
    // let str = "welcome to the world of javaScript";
    // str = str.split(" ");
    
    // let word;
    // let count=0 ;
    // for(i=0;i<str.length;i++){
    //     if(count < str[i].length){
    //         count = str[i].length
    //         word = str[i]
    //     }
    // }
    // console.log(word);

    
// sum of N number=====================>
    // let count = 10;
    // let sum =0 ;
    // for (i=1;i<count;i++){
    //     let inc = sum
    //     sum = sum+i;
    //     console.log(`${i}+${inc} = ${sum}`)
    // }
