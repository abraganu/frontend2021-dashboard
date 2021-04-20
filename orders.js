const tableBody = document.getElementById('ordersTableBody');
const todosOptionBtn = document.getElementById('todos-tab');
const usersOptionBtn = document.getElementById('users-tab');
const createOrderForm = document.getElementById('createOrderForm');
const createOrderModal = new bootstrap.Modal(document.getElementById('createOrderModal'), {
    keyboard: false
});


window.addEventListener('load', async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const commentsData = await response.json();
    commentsData.forEach(createTableRow);
});

todosOptionBtn.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/todos.html';
});

usersOptionBtn.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/';
});


createOrderForm.addEventListener('submit', async function(event){
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
    const createdOrder = await response.json();
    createOrderModal.hide();
    createTableRow(createdOrder);
})



function createTableRow(comment) {
    const tableRow = `
        <tr>
            <th scope="row">${comment.id}</th>
            <td>${comment.name}</td>
            <td>${comment.email}</td>
            <td>${comment.body}</td>
        </tr>
    `
    tableBody.insertAdjacentHTML('beforeend', tableRow)
}