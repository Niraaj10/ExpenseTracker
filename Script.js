const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', function(event){
    event.preventDefault();

    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    let amount = document.getElementById('amount').value;

    let total = document.getElementById('totall');
    // total.innerHTML = amount++;

    if (document && category && !isNaN(amount)) {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `<td>${description}</td>
        <td>${category}</td>
        <td>${amount}</td>`;

        // total.innerHTML = amount;

        expenseList.appendChild(newRow);

        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert("Please fill out all the feilds with valid data");
    }
})