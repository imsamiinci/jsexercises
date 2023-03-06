/////////FUNCTIONS

// function merhaba(){
//   console.log("merhaba")
// }
// merhaba();
// merhaba();
// merhaba();

// function merhaba(name,age){
//   console.log(`isim: ${name} yaş: ${age}`);
// }

// merhaba("levent", 37);
// merhaba("aslı", 44);
// merhaba("karina", 28);


// function yasHesapla(dogumYili){
//   return 2021 - dogumYili
// }

// let ageSamet = yasHesapla(1894);
// let ageMemo = yasHesapla(1796);
// let ageSebo = yasHesapla(2005);

ehliyetAlabilmeDurumu(2010,"esra");

function yasHesapla(dogumYili){
  return 2021 - dogumYili}

function ehliyetAlabilmeDurumu(dogumYili,isim){
  let yas = yasHesapla(dogumYili);
  let ehliyet = 18 - yas;

  if (ehliyet>0){
    console.log(`${isim} ehliyet alabilmenize ${ehliyet} yıl kaldı.`);
  }else{
    console.log("ehliyet alabilirsiniz.")
  }
}

