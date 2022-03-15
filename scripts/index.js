const timeInputs = document.querySelectorAll(".start, .end");

const roundFunc = (e) => {
  let x = e.target.value.split(":");

  if (x[1] > 15 && x[1] < 45) {
    x[1] = "30";
  } else if (x[1] > 44 && x[1] < 60) {
    x[0] = x[0] < 9 ? "0" + (parseInt(x[0]) + 1) : parseInt(x[0]) + 1;
    x[1] = "00";
  } else {
    x[1] = "00";
  }
  e.target.value = x.join(":");
};

/* const correctTimeFunc = (e) => {
  let x = e.target.value.split(":");
  if (x[0] > 17) {
    x[0] = "17";
  } else if ([0] < 08) {
    x[0] = "08";
  }
  e.target.value = x.join(":");
}; */

timeInputs.forEach((input) => {
  input.addEventListener("change", roundFunc);
}); /* 
timeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    roundFunc();
    correctTimeFunc();
  });
}); */

const employeeIdField1 = document.getElementById("employeeId1");

const employeeIdField2 = document.getElementById("employeeId2");

const fromDateFeild = document.getElementById("fromDate");

const toDateFeild = document.getElementById("toDate");

const officeHoursStartFeild = document.getElementById("officeHoursStart");

const officeHoursEndFeild = document.getElementById("officeHoursEnd");

const meetingLengthFeild = document.getElementById("meetingLength");

let url = "https://stark-castle-84894.herokuapp.com";

let newUrl;
let combinedUrl;

/* publishBtn.addEventListener("click", useUrl); */

function buildUrl() {
  {
    newUrl = `/suggestions?employees=${employeeIdField1.value}&employees=${employeeIdField2.value}&fromDate=${fromDateFeild.value}&toDate=${toDateFeild.value}&officehoursStart=${officeHoursStartFeild.value}&officehoursEnd=${officeHoursEndFeild.value}&meetingLength=${meetingLengthFeild.value}`;
  }

  /* let combinedUrl = `${url}${newUrl}`; */

  console.log(`${url}${newUrl}`);
  return `${url}${newUrl}`;

  /* createPreviewCard(); */
}

let header = document.getElementById("headerDayOne");

let list = document.getElementById("start_times");

function useUrl() {
  combinedUrl = buildUrl();
  console.log(combinedUrl);
  fetch(combinedUrl)
    .then((res) => res.json())
    .then((meetingData) => {
      console.log(meetingData);

      if (
        !Array.isArray(meetingData.suggestions) ||
        meetingData.suggestions.length < 2
      ) {
        document.getElementById(
          "checkSuggestionsStart_timesArray"
        ).innerHTML = `No times available, please change your search.`;
        return;
      }

      for (let i = 0; i < meetingData.suggestions.length; i++) {
        let h2 = document.createElement("h2");
        let date = meetingData.suggestions[i].date;
        h2.textContent = date;
        list.appendChild(h2);
        for (
          let j = 0;
          j < meetingData.suggestions[i].start_times.length;
          j++
        ) {
          let li = document.createElement("li");
          let start_times = meetingData.suggestions[i].start_times[j];
          li.textContent = start_times;
          list.appendChild(li);
        }
      }
    })
    .catch((error) => {
      console.log(error, "There has been an error");
    });
}

/* function responeFromApi() {

    const response = await fetch(combinedUrl);
    if (!response.ok)
      // or check for response.status
      throw new Error(response.statusText);
    let body = await response.json();
    console.log(body);
  }
} catch (err) {
  console.log(err);
} */

/* buildUrl().then(
  (function (value) {
    fetchNames(value);
  })(function (error) {
    fetchNames(error);
  })
);

function fetchNames(value) {
  fetch(value)
    .then((res) => res.json())
    .then((meetingsdata) => console.log(meetingsdata));
} */

/*   */
/* function createPreviewCard() {
  let wrapper = document.getElementById("meetingProposals");
  let i = 
} */

/* .then((res) => res.json())
  .then((meetingsdata) => console.log(meetingsdata))

  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
  })

  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
*/
