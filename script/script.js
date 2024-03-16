const container = document.getElementById('countrys')
fetch('./data.json')
    .then((response) => response.json())
    .then(data => {
        data.forEach(item => {     
            let div = document.createElement('div');
            let countryData = document.createElement('div');

            let heading = document.createElement('h2');
            heading.textContent = item.name;

            let population = document.createElement('p');
            population.textContent = item.population;

            let region = document.createElement('p');
            region.textContent = item.region;

            let capital = document.createElement('p');
            capital.textContent = item.capital;

            let img = document.createElement('img');
            img.setAttribute('src', item.flag);
            img.setAttribute('alt', item.name);

            div.appendChild(img);
            div.appendChild(countryData)
            
            countryData.classList.add("countryData");
            countryData.appendChild(heading); 
            countryData.appendChild(population); 
            countryData.appendChild(region); 
            countryData.appendChild(capital); 
            container.appendChild(div);   
    });
})

