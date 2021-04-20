// GET default
const tableBody = document.getElementById('todosTableBody');
const usersOptionBtn = document.getElementById('users-tab');
const ordersOptionBtn = document.getElementById('orders-tab');
const createTodoForm = document.getElementById('createTodoForm');
const createTodoModal = new bootstrap.Modal(document.getElementById('createTodoModal'), {
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

ordersOptionBtn.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/orders.html';
});



createOrderForm.addEventListener("submit", async function(event){
    event.preventDefault();
    const [userId, title, completed] = event.target;
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            userId: userId.value,
            title: title.value,
            completed: completed.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const createdTodo = await response.json();
    createTodoModal.hide();
    createTableRow(createdTodo);
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

