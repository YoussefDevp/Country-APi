const apiCountry = "./data.json";
const countrys = document.querySelector("#countrys");
const input = document.getElementById("search");
const filter = document.getElementById("filters");

let countriesData = []; 

const getData = async () => {
    const res = await fetch(apiCountry);
    const data = await res.json();
    countriesData = data;
    return data;
}

const displayCountries = (data) => {
    let query = input.value.toLowerCase(); // Move the query here

    const filteredCountries = data.filter(country => {
        // Filter based on search query
        if (query === '') return true;
        return country.name.toLowerCase().includes(query);
    }).filter(country => {
        // Filter based on region selection
        if (filter.value === '') return true;
        return country.region.toLowerCase() === filter.value.toLowerCase();
    });

    const countryCards = filteredCountries.map(country => {
        return `
            <div class="card">
                <img src="${country.flag}">
                <div class="countryData">
                    <p><span>Name:</span> ${country.name}</p>
                    <p><span>Population:</span> ${country.population.toLocaleString()}</p>
                    <p><span>Region:</span> ${country.region}</p>
                    <p><span>Capital:</span> ${country.capital}</p>
                </div>
            </div>
        `;
    }).join("");

    countrys.innerHTML = countryCards;
}

const handleFilterChange = () => {
    displayCountries(countriesData);
}

const handleInput = () => {
    displayCountries(countriesData);
}

filter.addEventListener('change', handleFilterChange);
input.addEventListener('input', handleInput); // Change event listener to input

(async () => {
    await getData();
    displayCountries(countriesData); 
})();
