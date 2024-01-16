
/*
Given
http://dummy.restapiexmple.com/api/v1/employees

When
User send get request to the Url

Then
Status code is 200

And
There are 24 employees

And 
"Tiger Nixon" and "Garrett Winters" are among the employees

And
The greatest age is 66

And 
The name of the lowest age is"Tatyana Fitzpatrick" 

And 
Total salary of all employees is6,644,770

*/

describe("dummy.restapiexmple",() => {
it('get12', () => {

    //ii) Set the url
    const pathParam1 = '/api'
    const pathParam2 = '/v1'
    const pathParam3 = '/employees'

    //ii) Set the expectedData
    let expectedData;
    cy.fixture('dummyData').then((data) => {
    
    expectedData = data
    });
//iii) Send the request

cy.request({

method:'GET',
url:`${pathParam1}${pathParam2}${pathParam3}`

})

// iV) Get the response and assert it

.then((response) => {

    expect(response.status).to.equal(expectedData.status)

    expect(response.body.data).to.have.length(24)

    expect(response.body.data.map((data) =>data.employee_name)).to.include.members(expectedData.nameOfExpecedEmployee)

    let listOfage = response.body.data.map((data) =>data.employee_age)
    listOfage = listOfage.sort((a, b)=>a-b);
    expect(listOfage[listOfage.length - 1]).to.eq(expectedData.maxAge)

    const lowestAge = listOfage[0]
    let youngestEmp= response.body.data.filter((data)=>data.employee_age===lowestAge).map((item)=>item.employee_name)
    expect(youngestEmp).to.include(expectedData.nameOfYoungestEmployee)

    expect(response.body.data.reduce((sum,employee)=>sum+employee.employee_salary,0)).to.eq(expectedData.expectedTotalSalary)

})

});


})
