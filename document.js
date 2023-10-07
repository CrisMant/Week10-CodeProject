function addRow() {
    // Get user input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Create a new table row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
    `;

    // Append the new row to the table body
    document.getElementById('table-body').appendChild(newRow);

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
}

// Add an event listener to the form submission
document.getElementById('data-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    addRow(); // Call the addRow function to add a new row
});