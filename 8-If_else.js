// If else

const firstName = "Çağlar";
const userName = "caglayilmaz";
const age = 20;
const isStudent = true;
const school = "university";

if (userName == "caglayilmaz") {
  console.log("Merhaba Çağla");
}else{
  console.log("Kullanıcı bulunamadı!")
}

// if (age === 20){
//   console.log("yaşınız : 20")
// }

if (isStudent){
  console.log("Hangi bölümde okuyorsun?")
}else{
  console.log("Hangi mesleği yapıyorsunuz?")
}

if (age>=18){
  if (school == "university")
    console.log("Ehliyet alabilirsiniz.")
  else{
    console.log("Eğitimin yeterli değil.")
  }
}else{
  console.log("Yaşınız tutmuyor.")
}

let id = "26451"
if (typeof id != "undefined") {
  console.log("id: "+ id);
}else{
  console.log("no id")
}