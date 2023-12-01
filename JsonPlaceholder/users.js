"use strict";

function displayUsers(users) {
    const tableBody = document.getElementById('userTableBody');

    users.forEach(user => {
        const row = tableBody.insertRow();

        const fields = ['id', 'name', 'email', 'address', 'phone', 'website'];

        fields.forEach(field => {
            const cell = row.insertCell();
            cell.textContent = field === 'address' ? user[field].street + ', ' + user[field].city : user[field];
        });
    });
}

// Fetch data from the JsonPlaceholder API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        displayUsers(users.slice(0, 6)); // Display data for the first 6 users
    })
    .catch(error => {
        // Handle errors
        console.error(`Error fetching users: ${error.message}`);
    });
