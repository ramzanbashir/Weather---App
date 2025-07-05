// let getBox = document.getElementById("box");
// function getData() {
//     let getsearchBox = document.getElementById("search")
// fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${getsearchBox.value}&appid=cd53730e8abad0e3282fd9247b31bc14&units=metric`
// )
// .then(data => data.json())
// .then(data => {
//     console.log(data);
//     getBox.innerHTML = `
//     <div class="card" style="width: 18rem; bg-dark text-light text-center">
//   <img src="../images/cloudy.gif" class="card-img-top" alt="...">
//   <div class="card-body bg-dark text-light  text-center">
//     <h1 class="card-title">${data.name}</h5>
//     <h6 class="card-text">Temperature : ${data.main.temp}</h6>
//     <h6 class="card-text">Feels Like : ${data.main.feels_like}</h6>
//     <h6 class="card-text">Humidity : ${data.main.humidity}</h6>
//     <h6 class="card-text">Pressure : ${data.main.pressure}</h6>    
//   </div>
// </div>`
// })
// .catch(error => {
//     console.error("Error fetching data:", error);
// })

// }



let getBox = document.getElementById("box");

function getData() {
  let getsearchBox = document.getElementById("search");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${getsearchBox.value}&appid=cd53730e8abad0e3282fd9247b31bc14&units=metric`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      getBox.innerHTML = `
        <div class="card text-center mx-auto" style="width: 16rem; background-color:white; color:rgb(24, 20, 20); border: 1px solid #333;">
          <div class="d-flex justify-content-center mt-3">
            <img src="images/cloudy.gif" class="card-img-top" alt="Weather Image" style="width: 60px; height: 60px;">
          </div>
          <div class="card-body">
            <h5 class="card-title mb-2">${data.name}</h5>
            <h6 class="card-text">🌡️ ${data.main.temp} °C</h6>
            <h6 class="card-text">🤗 Feels Like: ${data.main.feels_like} °C</h6>
            <h6 class="card-text">💧 Humidity: ${data.main.humidity}%</h6>
            <h6 class="card-text">🌬️ Pressure: ${data.main.pressure} hPa</h6>    
          </div>
        </div>`;
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
      getBox.innerHTML = `<p class="text-danger text-center mt-3">City not found or API error.</p>`;
    });
}
