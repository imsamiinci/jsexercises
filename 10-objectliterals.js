// Object Literals

// let firstName = "Levent";
// let lastName = "Ertunalılar";

// let firstName2 = "Ahmet";
// let lastName2 = "Farukcan";

// let levent = ["Levent","Ertunalılar",37];
// let esra = ["Esra","Ertunalılar",40];


let veri
let user = {
  userName : "leventert",
  firstName : "Levo",
  lastName : "Erto",
  age : 37,
  hobbies : ["spor", "kitap", "şiir", "yazılım"],
  address : {
    city : "İstanbul",
    country : "TR",
    phone : "0500000000",
  }
}

veri = user;
veri = user.firstName;
veri = user.hobbies;
veri = user.hobbies.length;


console.log(veri);
console.log(typeof user);