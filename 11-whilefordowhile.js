// DÖNGÜLER (LOOPS) //

//While loop

// let i = 0;

// while (i<10){
//  console.log(i);
// i = i + 1;  // i+=1 //i++;
// }


// let a = 10;

// while (a>0){
//   console.log(a);
//   a = a - 1 // i-- // i-=1
// }


// break and continue

//  let i = 0;

//  while (i<10){
//    if (i==6){
//       continue
//    }
//    console.log(i);
//    i++;
//  }



//Do while loop

// let i = 0;
// do{
//   console.log(i);
//   i++;
// }
// while(i<10)



//For loop

// for(let i=0; i<10; i++){
//   console.log(i);
// }

// for (let i=0; i<10; i++){
//   if (i==3){
//     console.log("seçilen rakam :"+i);
//     break
//   }
//   console.log(i);
// }

// let toplam=0;

// for (let i=1; i<10; i++){
//   toplam = toplam + i;
// }
// console.log(toplam);

let sonuc =1;
for (let i=1; i<10; i++){
  sonuc = sonuc * i; 
}
console.log(sonuc);

let toplam =0;
for (let i=0; i<7; i++){
  toplam+= i;
}
console.log(toplam);