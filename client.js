console.log('Hello World')

const monthStart = 0


function submitForm(event) {
    console.log('submitForm');
    event.preventDefault();
    let firstName = document.querySelector('#first-input').value;
    let lastName = document.querySelector('#last-input').value;
    let id = document.querySelector('#id-input').value;
    let title = document.querySelector('#title-input').value;
    let annualSalary = document.querySelector('#annual-input').value;
   
    let salaryTable = document.querySelector('#employeeData');
    salaryTable.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
    </tr>
    `
    // Will add clearing input function 
    clearInputs()
    let monthly = Number(annualSalary) + monthStart;
    document.querySelector('#monthly').innerHTML = monthly;
}

function clearInputs() {
    document.getElementById('form').reset();
}


   
// thinking of adding the annual salary to an array to add all together, since 
// my annualSalaries are declared inside of a function ..
// Or I could move the total monthly function within the submit form




// function totalMonthly () {
//     Number(annualSalary) + monthStart; 
//     document.querySelector('#monthly').innerHTML = annualStart;
// }