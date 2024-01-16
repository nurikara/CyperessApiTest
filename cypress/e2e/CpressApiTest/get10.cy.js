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



describe('gorest.co',() => {

    it('get10', () => {
   
        //i) Set the url
     const pathParam1='/public'
     const pathParam2='/v1'
     const pathParam3='/users'
     const pathParam4='/5914155'

     //ii) Set the the expectedData
     var expectedData;
     cy.fixture('gorestData2').then((data) => {
     expectedData = data
     
    })
    //iii) Send the request
    cy.request({
    method:'GET',
    url: `${pathParam1}${pathParam2}${pathParam3}${pathParam4}`

    })

    //iV) Get the response and assert it

    .then((response) => {
    const accualData = response.body
     expect(response.status).to.equal(200);
     expect(accualData).to.not.be.null
     expect(accualData.data).to.have.property('id',expectedData.id);
     expect(accualData.data).to.have.property('email',expectedData.email);
     expect(accualData.data).to.have.property('gender',expectedData.gender);
     expect(accualData.data).to.have.property('status',expectedData.status);
     


    });



});


it.only('get10_2', () => {
   
    //i) Set the url
 const pathParam1='/public'
 const pathParam2='/v1'
 const pathParam3='/users'
 const pathParam4='/5914155'

 //ii) Set the the expectedData
 var expectedData;
 cy.fixture('gorestData2').then((data) => {
 expectedData = data
 
})
//iii) Send the request
cy.request({
method:'GET',
url: `${pathParam1}${pathParam2}${pathParam3}${pathParam4}`

})

//iV) Get the response and assert it

.then((response) => {
const actualData = response.body.data
 expect(response.status).to.equal(200);
 expect(actualData).to.not.be.null
 
 expect(actualData).to.include({
  id:expectedData.id,
  status: expectedData.status,
  gender: expectedData.gender,
  email: expectedData.email
})
 


});



});


})