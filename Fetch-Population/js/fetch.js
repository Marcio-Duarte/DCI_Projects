async function Fetch(country) {
    let URL = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
    const response = await fetch(URL);
    const data = await response.json();

    /* Passing values from object to variables automatic */
    const {
        name,
        population,
        capital,
    } = await data[0];
    return ({
        countryName: name,
        countryPopulation: population,
        countryCapital: capital,
    });
}

async function getCountriesData(countriesList) {
    let list = [];

    for (const country in countriesList) {
        list.push(await Fetch(countriesList[country]));
    }
    return list;
}

async function fetchAllCountryNames() {
    let URL = "https://restcountries.eu/rest/v2/all";
    let allCountryNames = [];

    await fetch(URL).then(response => {
        return response.json();
    }).then(data => {
        for (const key in data) {
            allCountryNames.push(data[key].name);
        }
    });
    return allCountryNames;
}