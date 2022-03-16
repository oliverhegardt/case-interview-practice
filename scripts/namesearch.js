const nameSearchFeild = document.getElementById("nameSearch");

let urlNames = "https://stark-castle-84894.herokuapp.com";

let newUrlNames;
let combinedUrlNames;

function buildUrlNames() {
  {
    newUrlNames = `/employees?q=${nameSearchFeild.value}`;
  }

  console.log(`${urlNames}${newUrlNames}`);
  return `${urlNames}${newUrlNames}`;
}

let listNames = document.getElementById("listNames");

function useUrlNames() {
  combinedUrlNames = buildUrlNames();
  console.log(combinedUrlNames);
  fetch(combinedUrlNames)
    .then((res) => res.json())
    .then((meetingData) => {
      console.log(meetingData);

      if (!Array.isArray(meetingData.matches) || !meetingData.matches.length) {
        document.getElementById(
          "checkMatchesArray"
        ).innerHTML = `No such name available, please change your search.`;
        return;
      }

      for (let i = 0; i < meetingData.matches.length; i++) {
        let li = document.createElement("li");
        let name = meetingData.matches[i].name;
        let id = meetingData.matches[i].id;
        li.textContent = `${name}: ${id}`;
        listNames.appendChild(li);
      }
    })
    .catch((error) => {
      console.log(error, "There has been an error");
    });
}
