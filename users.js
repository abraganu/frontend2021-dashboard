// GET default
const tableBody = document.getElementById('usersTableBody');
const todosOptionBtn = document.getElementById('todos-tab');
const createUserForm = document.getElementById('createUserForm');

window.addEventListener('load', async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersData = await response.json();
    usersData.forEach(createTableRow);
});

todosOptionBtn.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/todos.html';
});

createUserForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Esto es exactamente lo mismo que realiza la accion de destructuring
    // const name = event.target[0];
    // const username = event.target[1];
    // const email = event.target[2];
    const [name, username, email] = event.target;
});

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
