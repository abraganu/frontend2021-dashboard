// GET default
const tableBody = document.getElementById('todosTableBody');
const usersOptionBtn = document.getElementById('users-tab');

window.addEventListener('load', function() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function handleResponse(response) {
            return response.json();
        })
        .then(function consoleData(todosData) {
            todosData.forEach(createTableRow)
        })

    function createTableRow(todo) {
        const tableRow = `
            <tr>
                <th scope="row">${todo.id}</th>
                <td>${todo.userId}</td>
                <td>${todo.title}</td>
                <td>${todo.completed}</td>
            </tr>
        `
        tableBody.insertAdjacentHTML('beforeend', tableRow)
    }
});

usersOptionBtn.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/';
});