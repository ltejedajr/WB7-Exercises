"use strict";

function getTodo() {
    try {
        const todoId = document.getElementById('todoId').value;

        // Fetch data from the JsonPlaceholder API

        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(response => response.json())
            .then(todo => {
                // Display ToDo information

                document.getElementById('todoInfo').innerText = JSON.stringify(todo, null, 2);
            })
            .catch(error => {
                // Handle errors

                document.getElementById('todoInfo').innerText = `Error fetching ToDo: ${error.message}`;
            });
    } catch (error) {
        // Handle unexpected errors
        
        console.error(`Unexpected error: ${error.message}`);
    }
}

const toDoButton = document.getElementById('getTodo');
toDoButton.onclick = getTodo;
