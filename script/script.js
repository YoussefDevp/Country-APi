<<<<<<< HEAD
const apiCountry = "http://localhost:5500/data.json";
=======
const apiCountry = "http://127.0.0.1:5501/data.json";
>>>>>>> f1ebefdfacc9f5d0308365edcc0a1ab5752a7afb
const countrys = document.querySelector("#countrys");
const input = document.getElementById("search");

const getData = async () => {
    const res = await fetch(apiCountry);
    const data = await res.json();
    console.log(data)
    return data
}

const displayCountry = async () => {
    let query = input.value;
    console.log("query: " , query)  

    const payload = await getData();

    let datadisplay = payload.filter((eventData) => {
        // console.log(eventData)
        if (query === '') return true;
        else if (eventData.name.toLowerCase().includes(query.toLowerCase())) 
        {return eventData}
    }).map((object) => {
        const {flag, name, population, region, capital} = object;

        return `
        <div class="card">
        <img src="${flag}">
            <div class="countryData">
                <p>Name: ${name}</p>
                <p>Population: ${population}</p>
                <p>Region: ${region}</p>
                <p>Capital: ${capital}</p>
            </div>
        </div>
        `
    }).join("");

    countrys.innerHTML = datadisplay;

    input.oninput = displayCountry;
}

displayCountry();
<<<<<<< HEAD

=======
input.onblur = () => {
    console.log("fkvjbkv")
    displayCountry()
}
>>>>>>> f1ebefdfacc9f5d0308365edcc0a1ab5752a7afb
