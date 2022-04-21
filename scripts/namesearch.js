const nameSearchFeild = document.getElementById("nameSearch");

function buildUrlNames() {
  const urlNames = "https://stark-castle-84894.herokuapp.com";

  const newUrlNames = `/employees?q=${nameSearchFeild.value}`;

  console.log(`${urlNames}${newUrlNames}`);
  return `${urlNames}${newUrlNames}`;
}

function useUrlNames() {
  const combinedUrlNames = buildUrlNames();
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
        const listNames = document.getElementById("listNames");
        const li = document.createElement("li");
        const name = meetingData.matches[i].name;
        const id = meetingData.matches[i].id;
        li.textContent = `${name}: ${id}`;
        listNames.appendChild(li);
      }
    })
    .catch((error) => {
      console.log(error, "There has been an error");
      document.getElementById(
        "errorNames"
      ).innerhtml = `There has been an error, please try again.`;
    });
}
