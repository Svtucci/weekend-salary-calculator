console.log('Hello World')

function submitForm(event) {
    console.log('submitForm');
    event.preventDefault();
    let firstName = document.querySelector('#first-input').value;
    let lastName = document.querySelector('#last-input').value;
    let id = document.querySelector('#id-input').value;
    let title = document.querySelector('#title-input').value;
    let annualSalary = document.querySelector('#annual-input').value;
    console.log(firstName);
    console.log(lastName);
    console.log(id);
    console.log(title);
    console.log(annualSalary);

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

}