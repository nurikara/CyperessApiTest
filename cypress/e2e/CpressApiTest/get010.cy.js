/* 
Given
http://gorest.co.in/public/v1/users/5886275

When
User sends Get request

And 
Assert that Status is 200

And 
Assert that Response body is not null

And 
Assert that id is 5914198

And
Assert that email is gajabahu_verma@rosenbaum-johnson.test

And 
Assert that gender is male

And 
Assert that status is active

*/

describe('gorest.co.in',() => {
it('get10', () => {

    //i) Set the url 
    const pathParam1 = '/public'
    const pathParam2 = '/v1'
    const pathParam3 = '/users'
    const pathParam4 = '/5914160'

    //ii) Set the expected data
    let expectedData;
    cy.fixture('gorestData2').then((data) => {
    
    expectedData = data

    })

    //iii) Send the request

    cy.request({
     
       method: 'GET',
       url: `${pathParam1}${pathParam2}${pathParam3}${pathParam4}`

}).then((response) => {

    //iV Get the response and assert it

    const actualData= response.body.data

    expect(response.status).to.eq(200)

    expect(actualData).to.not.be.null

    expect(actualData).to.have.property('id',expectedData.id)

    expect(actualData).to.have.property('email',expectedData.email)

    expect(actualData).to.have.property('gender',expectedData.gender)

    expect(actualData).to.have.property('status',expectedData.status)

});


})

it('get10_2', () => {

    //i) Set the url 
    const pathParam1 = '/public'
    const pathParam2 = '/v1'
    const pathParam3 = '/users'
    const pathParam4 = '/5914160'

    //ii) Set the expected data
    let expectedData;
    cy.fixture('gorestData2').then((data) => {
    
    expectedData = data

    })

    //iii) Send the request

    cy.request({
     
       method: 'GET',
       url: `${pathParam1}${pathParam2}${pathParam3}${pathParam4}`

}).then((response) => {

    //iV Get the response and assert it

    const actualData= response.body.data

    expect(response.status).to.eq(200)

    expect(actualData).to.not.be.null

  expect(actualData).to.include({
    id: expectedData.id,
    email: expectedData.email,
    gender: expectedData.gender,
    status: expectedData.status




  })

});




})





});