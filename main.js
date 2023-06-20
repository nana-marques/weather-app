import { api } from './keys.js';
console.log(api.key);
const api = api.key;

// const url1 = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
// const url2 = "http://api.openweathermap.org/geo/1.0/direct?q=";
// //console.log(import.meta.env.VITE_API_KEY);

// const search = document.querySelector(".input").value;
// console.log(search);
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".image");



// async function checkWeather(city){
//     // const responses = await fetch(apiurl + lat +`&appid=${api.key}`);
//     //const convert = await fetch(url2 + input +`&appid=${api.key}`);
//     console.log(city);

//     const response1 = await fetch(url2 + city +`&appid=${api.key}`);
//     console.log(response1)

//     var data1 = await response1.json();
//     console.log(data1);

//     // const coordinates = data1.find((data1) => data1.name === city)
//     // console.log(coordinates)

//     // const response2 = await fetch(url1 + convert +`&appid=${api.key}`);
//     // var data2 = await response2.json();
//     // console.log(data2);

//     // document.querySelector(".city").innerHTML = data2.name;
//     // document.querySelector(".number").innerHTML = Math.round(data2.main.temp);

//     // switch(data2.weather[0].main){
//     //     case "Clouds":
//     //         weatherIcon.src = "images/clouds.png"
//     //         break;
//     //     case "Clear":
//     //         weatherIcon.src = "images/clear.png"
//     //         break;
//     //     case "Rain":
//     //         weatherIcon.src = "images/rain.png"
//     //         break;
//     //     case "Drizzle":
//     //         weatherIcon.src = "images/drizzle.png"
//     //         break;
//     //     case "Mist":
//     //         weatherIcon.src = "images/clouds.png"
//     //         break;
//     //     case "Snow":
//     //         weatherIcon.src = "images/snow.png"
//     //         break;
//     //     default:
//     //         weatherIcon.src = "images/clouds.png"
//     //         break;
//     // }
// }

// checkWeather(search);