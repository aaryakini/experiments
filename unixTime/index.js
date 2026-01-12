//unix time that the user accessed the site
const loginTime = document.getElementById("loginTime");
const date = new Date();
console.log(date);
loginTime.innerHTML = Math.floor(Date.now()/1000) + "s<br>"+ date.toLocaleTimeString('en-US') + ", " + stringMonth(date.getMonth()) + " " + date.getDate() + " " + date.getFullYear();

//calculating unix time from a date string with inputs
const myForm = document.getElementById('submitDate');

myForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const inputString = document.getElementById('date');
  dateString = inputString.value;
//   console.log("date string = " + dateString);
  const dateValues = dateString.split("-");
//   console.log("date string array values = " + dateValues);

  const day = Number(dateValues[2]);
  const month = Number(dateValues[1]) - 1;
  const year = Number(dateValues[0]);

  let unixTime = Math.floor(Date.UTC(year, month, day, 0, 0, 0)/1000);
//   console.log("unix time = " + unixTime);

  const convertToUnix = document.getElementById('convertToUnix');
  convertToUnix.innerHTML = unixTime;
  myForm.reset();

  const list = document.getElementById('dateList');
  const specialDate = document.createElement("p");
  specialDate.innerHTML = day + " " + stringMonth(month) + " " + year + " || " + unixTime;
  list.appendChild(specialDate);
});


//converting number to string month
function stringMonth(number){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[number];
    date
    return month;
};

//current unix time
let currentTime = document.getElementById('currentTime');
function timeNow(){
    currentTime.innerHTML = Math.floor(Date.now()/1000);
}
setInterval(timeNow,1000);

//getting user's coordinates

const x = document.getElementById("coords");
getLocation();

function getLocation(){
    if("geolocation" in navigator){
        navigator.geolocation.watchPosition((position) => {
            x.innerHTML = convertToDMS(position.coords.latitude, false) + "<br>" + convertToDMS(position.coords.longitude, true);
        })
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//converting from decimal format (which is default) to Degrees Minutes Seconds

//parameters:
//coordinate – the decimal coordinate to be converted
//isLongtiude - boolean identifying whether the coordinate is a longitude or latitude to establish cardinal directions
function convertToDMS(coordinate, isLongtude){
    let direction;
    if (isLongtude){
        //this is a ternary operator, which is a single line shortcut for an if-else statement
        //format: condition ? value_if_true : value_if_false (question mark is the separator between the condition and the result)
        //in this case, if a coordinate is positive or 0 it is East or North, if negative it is West or South
        direction = coordinate >= 0 ? "E" : "W";
    } else {
        direction = coordinate >= 0 ? "N" : "S";
    }

    //Degrees
    //represented by the whole number, i.e. make sure it is an absolute value, then get whole number
    const abs = Math.abs(coordinate);
    const degrees = Math.floor(abs);

    //Minutes
    //obtained by multiplying only the decimal part by 60
    const minutesNotTruncated = (abs - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);

    //Seconds
    //obtained by multiplying only the decimal part of the MINUTES by 60
    //toFixed(number_of_decimal_places)
    const seconds = ((minutesNotTruncated - minutes) * 60).toFixed(2);

    //return formatted string
    return `${degrees}°${minutes}'${seconds}"${direction}`;
}