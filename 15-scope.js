///////SCOPE KONUSU

/////// Global scope ///////

var veri1 = 5;
let veri2 = 10;
const veri3 = 15;

// function fonk(){
//   var veri1 = 30;
//   let veri2 = 40;
//   const veri3 = 50;
//   console.log(veri1,veri2,veri3);
// }

// fonk();

// console.log(veri1,veri2,veri3);


///// Block scope //////

if (true) {
  var veri1 = 30;
  let veri2 = 40;
  const veri3 = 50;

  console.log(veri1,veri2,veri3);
}

console.log(veri1,veri2,veri3);

// console.log(a);
// console.log(b);
// console.log(c);


////Global scope, tanımlanan normal bir değişlken ve fonksiyon değeridir.
////Let ve var komut farkı şudur:
//Let, globaldeki değerini aşağıdaki örnekte old gibi korur
// Var ise block scope'ta son olarak ne yazılmışsa onu alır

var admin_password = "1111111111";

if(true){
  var admin_password = "2222222";
}
console.log(admin_password);


let admin_password2 = "11111111";

if(true){
  let admin_password2 = "22222222";
}
console.log(admin_password2);