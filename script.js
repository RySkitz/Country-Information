const inputCountry = document.getElementById("Box__Input");
const searchCountry = document.getElementById("Box__Search");
const result = document.getElementById("Box__Result");

searchCountry.addEventListener("click", () => {
    let countryName = inputCountry.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);

    fetch(finalURL).then((response) => response.json())
    .then((data) => {
        let flag = data[0].flags.svg;
        let capital = data[0].capital[0];
        let country = data[0].name.common;
        let continent = data[0].continents[0];
        let currency = data[0].currencies[Object.keys(data[0].currencies)].name;
        let languages = Object.values(data[0].languages).toString().split(",").join(",  ");
        
        result.innerHTML = `
        <img src="${flag}" class="result-flag"> 
        <h2 class="result-name"> ${country} </h2>
        <p> <span class="title"> Capital: </span> ${capital} </p>
        <p> <span class="title"> Continent: </span> ${continent} </p>
        <p> <span class="title"> Languages: </span> ${languages} </p>
        <p> <span class="title"> Currency: </span> ${currency} </p>
        `;
    });
});
