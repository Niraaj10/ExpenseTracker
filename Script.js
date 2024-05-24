const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

let totalAmount = 0;

expenseForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    let amount = document.getElementById('amount').value;
    
    amount = parseFloat(amount);
    let total = document.getElementById('totall');
    
    

    if (document && category && !isNaN(amount)) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        totalAmount += amount;
        total.innerHTML = totalAmount;

        // console.log(category);
        

        if (document.getElementById('category').value == "Food") {
            // document.getElementById('FoodDes').innerHTML = description;
            // document.getElementById('FoodAmt').innerHTML =  "₹"+amount;
            // document.getElementById('FoodDate').innerHTML = formattedDate;

            document.getElementById("Food").innerHTML = `<div class="cap">
            <div class="desc" id="FoodDes"> ${description}</div>
            <div class="amt" id="FoodAmt"> ₹. ${amount}  <span class="date" id="FoodDate"> </span></div>
        </div>`;
        
        } else if (document.getElementById('category').value == "Travel") {
            document.getElementById('TravelDes').innerHTML = description;
            document.getElementById('TravelAmt').innerHTML =  "₹"+amount;
            document.getElementById('TravelDate').innerHTML = formattedDate;
        } else if (document.getElementById('category').value == "Shopping") {
            document.getElementById('ShoppingDes').innerHTML = description;
            document.getElementById('ShoppingAmt').innerHTML =  "₹"+amount;
            document.getElementById('ShoppingDate').innerHTML = formattedDate;
        } else if (document.getElementById('category').value == "Hospital") {
            document.getElementById('HospitalDes').innerHTML = description;
            document.getElementById('HospitalAmt').innerHTML =  "₹"+amount;
            document.getElementById('HospitalDate').innerHTML = formattedDate;
        } else {
            alert("Please fill out all the feilds with valid data");
        }




    //     const newRow = document.createElement('tr');

    //     newRow.innerHTML = `<td>${description}</td>
    //     <td>${category}</td>
    //     <td>${amount}</td>
    //     <td>${formattedDate}</td>
    //     `;



    //     expenseList.appendChild(newRow);

    //     document.getElementById('description').value = '';
    //     document.getElementById('category').value = '';
    //     document.getElementById('amount').value = '';
    // } else {
    //     alert("Please fill out all the feilds with valid data");
    }
});