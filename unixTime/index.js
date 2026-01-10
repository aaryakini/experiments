//logged on at
let loginTime = document.getElementById('loginTime');
loginTime.innerHTML = Date.now();

//current unix time
// let currentTime = document.getElementById('currentTime');
// function timeNow(){
//     currentTime.innerHTML = Date.now();
// }
// setInterval(timeNow,1000);

const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function error() {
  alert("Sorry, no position available.");
}