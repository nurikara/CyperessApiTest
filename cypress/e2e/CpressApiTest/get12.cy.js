/*
Given
http://dummy.restapiexample.com/api/v1/employees

When
User send get request to the Url

Then
Status code is 200

And
There are 24 employees

And 
Tiger Nixon and Garrett Winters are among the employees

And
The greatest age is 66

And 
The name of the lowest age is"Tatyana Fitzpatrick" 

And 
Total salary of all employees is6,644,770

*/


describe('dummy.restapiexample',()=>{

it('get12', () => {
    //i Set the url

    const pathParam1 = "/api"
    const pathParam2 ="/v1"
    const pathParam3 ="/employees"

    //ii Set the expectedData
    let expectedData;
cy.fixture('dummyData').then((data)=>{
     expectedData = data;
})

//iii Send the request 

cy.request({
method: 'GET',
url:`${pathParam1}${pathParam2}${pathParam3}`

}).then((response)=>{

    //iv Get the response and Assert it
    const actualData = response.body.data
    
    expect(response.status).to.eq(expectedData.status);
    
    expect(actualData).to.length(expectedData.numOfEmployees);

    expect(actualData.map(data => data.employee_name)).to.include.members(expectedData.nameOfExpecedEmployee);

    expect(actualData.map(data => data.employee_age).sort((a, b) => b - a)[0]).to.eq(expectedData.maxAge);

let listOfAge =actualData.map((item)=>item.employee_age)
listOfAge =listOfAge.sort((a, b) => a - b)

let lowestAge = listOfAge[0]
let youngestEmplooy = actualData.filter((item)=>item.employee_age===lowestAge).map((item)=>item.employee_name)
expect(youngestEmplooy).to.include(expectedData.nameOfYoungestEmployee)


const totalSalary = actualData.reduce((acc, employee) => acc + employee.employee_salary, 0);
expect(totalSalary).to.eql(6644770);



})


})


});

