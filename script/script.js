fetch('./data.json')
    .then((response) => response.json())
    .then(data => {
        // Create HTML elements for each item
        data.forEach(item => {
        var div = document.createElement('div');
        div.textContent = `
        Name: ${item.name},
        Population: ${item.population},
        region: ${item.region} ,
        capital: ${item.capital},
        `;
        // Append the created element to the container
        document.getElementById('countrys').appendChild(div);
    });
})
