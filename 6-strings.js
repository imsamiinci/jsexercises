// Strings

const firstname = "sami";
const lastname = "Inci";
const age = "45";
let hobbies = "formula, sinema, spor, kitap okuma, uyku";

let veri;

veri = firstname + " " + lastname;
veri = "sami";
veri += "Er";
veri = 'Benim adım'+' '+firstname+' '+lastname+' '+age+' '+'yaşındayım ve İstanbul\'da yaşıyorum';
veri = firstname.concat(' ', lastname);

veri = veri.toUpperCase();
veri = veri.toLowerCase();

//veri = veri.substring(2,7);

//veri = veri.slice(1,6)

//veri = veri.indexOf("m");

//veri = veri.replace("sami","Mahmut");

//veri = veri.length;

veri = hobbies.split(',');

console.log(veri);
console.log(typeof veri);