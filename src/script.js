function showTime(event) {
  setInterval(() => {
    let timezone = event.target.value;
    let cityName = timezone.replace("_", "").split("/")[1];
    let currentDate = moment().tz(timezone).format("MMMM Do Y");
    let currentTime = moment()
      .tz(timezone)
      .format("h:mm:ss [<small>]A[</small>]");
    let clocksElement = document.querySelector("#clocks");
    clocksElement.innerHTML = `<div class="clocks mt-5">
    <div class="row">
      <div class="col">
        <h2 class="city">${cityName}</h2>
        <h3 class="date">${currentDate}</h3>
      </div>
      <div class="col">
        <h2 class="time">${currentTime}</h2>
      </div>
    </div>
  </div>`;
  }, 1000);
}

let cityElement = document.querySelector("#cities");
cityElement.addEventListener("change", showTime);

function updateTime() {
  /* Los Angeles */

  let laTimeElement = document.querySelector("#laTime");

  if (laTimeElement) {
    laTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let laDateElement = document.querySelector("#laDate");
  if (laDateElement) {
    laDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do Y");
  }

  /* Sydney */

  let sydneyTimeElement = document.querySelector("#sydneyTime");

  if (sydneyTimeElement) {
    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let sydneyDateElement = document.querySelector("#sydneyDate");
  if (sydneyDateElement) {
    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do Y");
  }

  /* Tokyo */

  let tokyoTimeElement = document.querySelector("#tokyoTime");

  if (tokyoTimeElement) {
    tokyoTimeElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let tokyoDateElement = document.querySelector("#tokyoDate");
  if (tokyoDateElement) {
    tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do Y");
  }

  /* Paris */

  let parisTimeElement = document.querySelector("#parisTime");
  if (parisTimeElement) {
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let parisDateElement = document.querySelector("#parisDate");
  if (parisDateElement) {
    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMMM Do Y");
  }
}

updateTime();
setInterval(updateTime, 1000);

let citiesElement = document.querySelector("#clocks");
citiesElement.addEventListener("change", showTime);
