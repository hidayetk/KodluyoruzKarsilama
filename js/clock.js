let Name = prompt("Kullanıcı Adı Giriniz: ");
let myName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");
const weekday = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

refresh = 1000;
Name ? (myName.innerHTML = `${Name}`) : alert("Kullanıcı adı girmediniz");
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var day = d.getDay();
  myClock.innerHTML =
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2) +
    " " +
    weekday[day];
}

setInterval(time, 1000);
