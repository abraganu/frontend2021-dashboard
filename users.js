// GET default
const tableBody = document.getElementById('usersTableBody');
const todosOptionBtn = document.getElementById('todos-tab');

window.addEventListener('load', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function handleResponse(response) {
            return response.json();
        })
        .then(function consoleData(usersData) {
            usersData.forEach(createTableRow)
        })

    function createTableRow(user) {
        const tableRow = `
            <tr>
                <th scope="row">${user.id}</th>
                <td>${user.username}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
        `
        tableBody.insertAdjacentHTML('beforeend', tableRow)
    }
});

todosOptionBtn.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/todos.html';
});

