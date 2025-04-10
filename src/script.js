function showTime(event) {
  let londonTime = moment()
    .tz("Europe/London")
    .format("[It is] dddd, MMMM D, Y h:mm A [in London].");

  let lisbonTime = moment()
    .tz("Europe/Lisbon")
    .format("[It is] dddd, MMMM D, Y h:mm A [in Lisbon].");

  let newYorkTime = moment()
    .tz("America/New York")
    .format("[It is] dddd, MMMM D, Y h:mm A [in New York].");

  let aucklandTime = moment()
    .tz("Pacific/Auckland")
    .format("[It is] dddd, MMMM D, Y h:mm A [in Auckland].");

  let johannesburgTime = moment()
    .tz("Africa/Johannesburg")
    .format("[It is] dddd, MMMM D, Y h:mm A [in Johannesburg].");

  if (event.target.value.length > 0) {
    if (event.target.value === "Europe/London") {
      alert(londonTime);
    }
    if (event.target.value === "Europe/Lisbon") {
      alert(lisbonTime);
    }
    if (event.target.value === "America/New York") {
      alert(newYorkTime);
    }
    if (event.target.value === "Pacific/Auckland") {
      alert(aucklandTime);
    }
    if (event.target.value === "Africa/Johannesburg") {
      alert(johannesburgTime);
    }
  }
}

let cityElement = document.querySelector("#cities");
cityElement.addEventListener("change", showTime);

function updateTime() {
  /* Los Angeles */

  let laTimeElement = document.querySelector("#laTime");
  laTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  let laDateElement = document.querySelector("#laDate");
  laDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM do Y");

  /* Sydney */

  let sydneyTimeElement = document.querySelector("#sydneyTime");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");

  let sydneyDateElement = document.querySelector("#sydneyDate");
  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM do Y");

  /* Tokyo */

  let tokyoTimeElement = document.querySelector("#tokyoTime");
  tokyoTimeElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");

  let tokyoDateElement = document.querySelector("#tokyoDate");
  tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM do Y");

  /* Paris */

  let parisTimeElement = document.querySelector("#parisTime");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");

  let parisDateElement = document.querySelector("#parisDate");
  parisDateElement.innerHTML = moment().tz("Europe/Paris").format("MMMM do Y");
}

updateTime();
setInterval(updateTime, 1000);
