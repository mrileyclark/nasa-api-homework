//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=32WoR5n1XFZtvrVyRPRMLzCA97MWp8wQW6UdzSFt&date=${choice}
  `;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      //checks if pic of day is image or video so video can display correctly
      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
        document.querySelector("img").style.border = "10px solid goldenrod";
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
      }

      document.querySelector("p").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

