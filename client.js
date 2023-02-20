console.log('Hello World')

const monthStart = 0
let annualSalaryArray = [];

function submitForm(event) {
    event.preventDefault();
    let firstName = document.querySelector('#first-input').value;
    let lastName = document.querySelector('#last-input').value;
    let id = document.querySelector('#id-input').value;
    let title = document.querySelector('#title-input').value;
    let annualSalary = Number(document.querySelector('#annual-input').value);
   
    let salaryTable = document.querySelector('#employeeData');
    salaryTable.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td><button onClick="removeRow(event)">Remove</button>
    </tr>
    `
    // Will clear inputs
    clearInputs();
    //Will add annual inputs into global salary array 
    annualSalaryArray.push(annualSalary);
    console.log(annualSalaryArray); // Used to check if array is filling 
    let monthlySalary = equateMonthly() // will run function that calculates
    document.querySelector('#monthly').innerHTML = monthlySalary;
    changeRed(monthlySalary)
};

function clearInputs() {
    document.getElementById('form').reset();
};

function equateMonthly () { //Will run math on array to get total monthly 
    let monthly = 0; 
    for (let i=0; i < annualSalaryArray.length; i++) {
    monthly += annualSalaryArray[i] / 12 
    }
    console.log(monthly.toFixed(2))
    return monthly
}; 

function changeRed (monthlySalary) {
    if (monthlySalary >= 20000) {
        document.querySelector('#monthly').style.color = 'red'; //turn background to red 
    } 
};

function removeRow(event) {
    event.target.closest('tr').remove();
}














// Issue right now is trying to ge tthe annual salary input to be added 
// together and then divided by 12 to get the monthly. 
// I am having a hard time pulling the inputs since they
// are declared inside of the submit function 


//document.querySelector('#monthly').innerHTML = monthly;



// function addMonth () {
//     let monthly = Number(annualSalary) / 12;
//     document.querySelector('#monthly').innerHTML = monthly;
// }

// function addToArray() {
//     annualSalary.push(amount);
//     console.log(annualSalary);
// }
   
// thinking of adding the annual salary to an array to add all together, since 
// my annualSalaries are declared inside of a function ..
// Or I could move the total monthly function within the submit form

// function totalMonthly () {
//     Number(annualSalary) + monthStart; 
//     document.querySelector('#monthly').innerHTML = annualStart;
// }

// function addToArray() {
//     let amount = Number(document.getElementById('annual-input').value);
//     annualSalary.push(amount);
//     console.log(annualSalary);
// // }