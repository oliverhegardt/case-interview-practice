const start = document.querySelector(".start");
const end = document.querySelector(".end");

/*
  01:00 .. 01:14 -> 01:00
  01:15 .. 01:44 -> 01:30
  01:45 .. 01:59 -> 02:00
*/
function roundTime(event) {
  const time = event.target.value.split(":");
  console.log(time);
  let hours = parseInt(time[0]);
  let mins = parseInt(time[1]);

  if (mins < 15) {
    mins = 0;
  } else if (mins < 45) {
    mins = 30;
  } else if (mins < 60) {
    mins = 0;
    hours = (hours + 1) % 24;
  }

  const rounded = [
    hours.toString().padStart(2, "0"),
    mins.toString().padStart(2, "0"),
  ].join(":");

  event.target.value = rounded;
}
start.addEventListener("change", roundTime);
end.addEventListener("change", roundTime);

const employeeIdField1 = document.getElementById("employeeId1");

const employeeIdField2 = document.getElementById("employeeId2");

const fromDateFeild = document.getElementById("fromDate");

const toDateFeild = document.getElementById("toDate");

const officeHoursStartFeild = document.getElementById("officeHoursStart");

const officeHoursEndFeild = document.getElementById("officeHoursEnd");

const meetingLengthFeild = document.getElementById("meetingLength");

function buildUrl() {
  const url = "https://stark-castle-84894.herokuapp.com";

  const newUrl = `/suggestions?employees=${employeeIdField1.value}&employees=${employeeIdField2.value}&fromDate=${fromDateFeild.value}&toDate=${toDateFeild.value}&officehoursStart=${officeHoursStartFeild.value}&officehoursEnd=${officeHoursEndFeild.value}&meetingLength=${meetingLengthFeild.value}`;

  console.log(`${url}${newUrl}`);
  return `${url}${newUrl}`;
}

/* const header = document.getElementById("headerDayOne"); */

async function useUrl() {
  const combinedUrl = buildUrl();
  console.log(combinedUrl);

  try {
    const res = await fetch(combinedUrl);
    const meetingData = await res.json();
    console.log(meetingData);

    for (let i = 0; i < meetingData.suggestions.length; i++) {
      if (
        !Array.isArray(meetingData.suggestions) ||
        !meetingData.suggestions[i].start_times.length
      ) {
        document.getElementById(
          "checkSuggestionsStart_timesArray"
        ).innerHTML = `No times available, please change your search.`;
        return;
      }

      const list = document.getElementById("start_times");

      const h2 = document.createElement("h2");
      const date = meetingData.suggestions[i].date;
      h2.textContent = date;
      list.appendChild(h2);
      for (let j = 0; j < meetingData.suggestions[i].start_times.length; j++) {
        let li = document.createElement("li");
        let start_times = meetingData.suggestions[i].start_times[j];
        li.textContent = start_times;
        h2.appendChild(li);
      }
    }
  } catch (error) {
    console.log(error, "There has been an error");
    document.getElementById("errorStartTimes").innerHTML =
      "There has been an error, please try again!";
  }
}
