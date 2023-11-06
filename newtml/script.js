const coffeeList = document.getElementById('coffee-list');

// Fetch coffee items from the JSON file
fetch('coffee-menu.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(coffee => {
            const listItem = document.createElement('li');
            listItem.textContent = `${coffee.name} - ${coffee.available ? 'Available' : 'Not Available'}`;
            coffeeList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching coffee data: ', error));
