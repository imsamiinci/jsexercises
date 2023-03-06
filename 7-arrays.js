//ARRAYS

let names = ["arda", "kerem", "aslı", "hasan"];
let years = [1990, 1987, 2000, 1966];
let mix = ["arda", "yilmaz", 1990, null, ["programlama", "futbol"]];


console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);

//Get array item

console.log(names[3]);

//Set array item

names[0] = "lerab";
names[names.length] = "mehmet"
console.log(names);

//add item

// names.push("EDA");     SONA EKLER

// names.unshift("eda");   BAŞA EKLER


console.log(names);

// Remove item

// years.pop();     Sondaki elemanı siler
// years.shift();   Baştaki elemanı siler

console.log(years);

//indexOf

let index = names.indexOf("kerem")
console.log("index :" + index)

names.reverse();  //terse çevir
console.log(names);

years.sort();
console.log(years);  //büyükten küçüğe sıralar

names.sort();
console.log(names);

let veri = names.concat(years);
console.log(veri);

names.splice(2, 1, "ahmet")   
// Burada öğeleri sıralarken 2 sayısı index sırasından itibaren olanı berlirler, 1 sayısı 2. indexten sonra gelip de silinecek öğeyi belirler, "ahmet" şeklinde tırnak içine yazılan öğe ise silinenin yanına ikame ettirilmek içindir. 
console.log(names);

names.splice(3,2,"selcan");
console.log(names);