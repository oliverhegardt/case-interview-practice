const timeInputs = document.querySelectorAll(".start, .end");

const roundFunc = (e) => {
  let x = e.target.value.split(":");

  if (x[1] > 15 && x[1] < 45) {
    x[1] = "30";
  } else if (x[1] > 44 && x[1] < 60) {
    x[0] = x[0] < 10 ? "0" + (parseInt(x[0]) + 1) : parseInt(x[0]) + 1;
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

const employeeidField1 = document.getElementById("employeeid1");

const employeeidField2 = document.getElementById("employeeid2");

const fromdateFeild = document.getElementById("fromdate");

const todateFeild = document.getElementById("todate");

const officehoursStartFeild = document.getElementById("officehoursStart");

const officehoursEndFeild = document.getElementById("officehoursEnd");

const meetinglengthFeild = document.getElementById("meetinglength");

let url = "https://stark-castle-84894.herokuapp.com";

let newUrl;
let combinedUrl;

/* publishBtn.addEventListener("click", useUrl); */

function buildUrl() {
  {
    newUrl = `/suggestions?employees=${employeeidField1.value}&employees=${employeeidField2.value}&fromDate=${fromdateFeild.value}&toDate=${todateFeild.value}&officehoursStart=${officehoursStartFeild.value}&officehoursEnd=${officehoursEndFeild.value}&meetingLength=${meetinglengthFeild.value}`;
  }

  /* let combinedUrl = `${url}${newUrl}`; */

  console.log(`${url}${newUrl}`);
  return `${url}${newUrl}`;

  /* createPreviewCard(); */
}

function useUrl() {
  combinedUrl = buildUrl();
  console.log(combinedUrl);
  fetch(combinedUrl)
    .then((res) => res.json())
    .then((meetingData) => {
      console.log(meetingData);
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
