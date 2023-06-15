// import { api } from "./keys.js";
// const {apikeys} = require("./keys.js");
// console.log(apikeys);

console.log(api2);

const apikey = '72f0cd752e8965e979958e5388c99f3f';

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

//console.log(import.meta.env.VITE_API_KEY);

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".number").innerHTML = Math.round(data.main.temp);
}

checkWeather("lat=51.5&lon=10.5");