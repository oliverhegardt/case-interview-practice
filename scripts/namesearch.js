const nameSearchFeild = document.getElementById("nameSearch");

let urlNames = "https://stark-castle-84894.herokuapp.com";

let newUrlNames;
let combinedUrlNames;

function buildUrlNames() {
  {
    newUrlNames = `/employees?q=${nameSearchFeild.value}`;
  }

  /* let combinedUrl = `${url}${newUrl}`; */

  console.log(`${urlNames}${newUrlNames}`);
  return `${urlNames}${newUrlNames}`;

  /* createPreviewCard(); */
}

function useUrlNames() {
  combinedUrlNames = buildUrlNames();
  console.log(combinedUrlNames);
  fetch(combinedUrlNames)
    .then((res) => res.json())
    .then((meetingData) => {
      console.log(meetingData);

      /* for (let i = 0; i < meetingData.suggestions.length; i++) {
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
      } */
    })
    .catch((error) => {
      console.log(error, "There has been an error");
    });
}
