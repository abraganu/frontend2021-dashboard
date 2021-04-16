// GET default
const tableBody = document.getElementById('todosTableBody');
const usersOptionBtn = document.getElementById('users-tab');

window.addEventListener('load', async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todosData = await response.json();
    todosData.forEach(createTableRow);
});

usersOptionBtn.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/';
});

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