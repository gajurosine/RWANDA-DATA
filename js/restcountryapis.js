let countriesHTML = [] ;

const loadCountryApis = (countryName) =>{
    
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(res => {
        if(!res.ok) {
            throw new (`HTTP error! status ${res.status}`)
        }
        return res.json()
    })

    .then(data => {displayCountries(data)})

    // .catch(error => {
    //     console.error(error => console.log("error accuring while fetching data" , error));
    // });
   

}

const displayCountries = countries =>{
    console.log(countries)
 countriesHTML = countries.map(country => getCountry(country))
 document.getElementById('countries').innerHTML = countriesHTML.join('');
}

const getCountry = (country) => {
   
        return ` 
        <h2>${country.name.common}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Language: ${country.languages ? country.languages[0] : 'N/A'}</p>
        <p>Subregion: ${country.subregion}</p>
        <p>Timezones: ${country.timezones ? country.timezones.join(', ') : 'N/A'}</p>

`
    }


loadCountryApis("Rwanda")