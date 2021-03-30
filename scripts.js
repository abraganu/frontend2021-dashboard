const tableBody = document.getElementById('usersTableBody');

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
