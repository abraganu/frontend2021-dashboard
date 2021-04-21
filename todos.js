const tableBody = document.getElementById('todosTableBody');
const usersOptionBtn = document.getElementById('users-tab');
const createTodosForm = document.getElementById('createTodosForm');
const createTodosModal = new bootstrap.Modal(document.getElementById('createTodosModal'), {
    keyboard: false
});


window.addEventListener('load', async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todosData = await response.json();
    todosData.forEach(createTableRow);
});

usersOptionBtn.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/';
});

createTodosForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    // Esto es exactamente lo mismo que realiza la accion de destructuring
    // const name = event.target[0];
    // const username = event.target[1];
    // const email = event.target[2];
    const [user, title , completed] = event.target;

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            user: user.value,
            title: title.value,
            completed: completed.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    const createdTodo = await response.json();
    createTodosModal.hide();
    createTableRow(createdTodo);
});

function createTableRow(todos) {
    const tableRow = `
        <tr>
            <th scope="row">${todos.id}</th>
            <td>${todos.user}</td>
            <td>${todos.title}</td>
            <td>${todos.completed}</td>
        </tr>
    `
    tableBody.insertAdjacentHTML('beforeend', tableRow)
}
