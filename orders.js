const tableBody = document.getElementById('ordersTableBody');
const todosOptionBtn = document.getElementById('todos-tab');
const usersOptionBtn = document.getElementById('users-tab');


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