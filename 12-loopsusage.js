// Dizi ve objelerde döngü kullanumu

let cities = ["istanbul", "ankara", "izmir", "bursa", "antalya"];

let users=[
  {firstName:"Aslı", lastName:"Cem"},
  {firstName:"Faruk", lastName:"Cem"},
  {firstName:"Cem", lastName:"Cem"},
  {firstName:"Kerem", lastName:"Cem"},
  {firstName:"Siki", lastName:"Cem"},
]

////////arrays

// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }

/////////for-in metodu

// for (let i in cities) {
//   console.log(`index: ${i} value: ${cities[i]}`)
// }

// cities.forEach(function(item){
//   console.log(item);
// })

// for(let i=1; i<users.length; i++){
//   console.log(users[i]);
// }

// for(let i in users){
//   console.log(`index: ${i} value: ${users[i].firstName}`);
// }


/////// map: returns an array

// let veri = users.map(function(item){
//   return item.firstName + " " +item.lastName; 
// });
// console.log(veri);

let numbers = [1,3,5,7,9,11];

let num = numbers.map(function(n){
  return n*n;
})
console.log(num);