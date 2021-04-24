// GET default
const tableBody = document.getElementById('ordersTableBody');
const usersOptionBtn = document.getElementById('users-tab');
const todosOptionBtn = document.getElementById('todos-tab');

const createOrdersForm = document.getElementById('createOrdersForm');
const createOrdersModal = new bootstrap.Modal(document.getElementById('createOrdersModal'), {
    keyboard: false
});


window.addEventListener('load', async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const ordersData = await response.json();
    ordersData.forEach(createTableRow);
});

usersOptionBtn.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/';
});

todosOptionBtn.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/todos.html';
});

createOrdersForm.addEventListener('submit', async function(event) {
    event.preventDefault();
   
    const [name, email, body] = event.target;

    const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            body: body.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    const createdOrders = await response.json();
    createOrdersModal.hide();
    createTableRow(createdOrders);
});


function createTableRow(comments) {
    const tableRow = `
        <tr>
            <th scope="row">${comments.id}</th>
            <td>${comments.name}</td>
            <td>${comments.email}</td>
            <td>${comments.body}</td>
        </tr>
    `
    tableBody.insertAdjacentHTML('beforeend', tableRow)
}