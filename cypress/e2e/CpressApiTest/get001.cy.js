/*
Given 
    https://restful-booker.herokuapp.com/booking/3
When 
    User send a Get  request
Then 
    Http status code should  200
And 
    Status text should be OK.
And 
    Response time should be less than 800
And
    Response Body should be JSON Data Type

*/

describe('Htts Request',() =>{

it('get01', () => {
//i )  Set the endpoin

const url = ' https://restful-booker.herokuapp.com/booking/3';

//ii)  Payload

//iii) Sent the request 
cy.request({

        methot: 'GET',
        url: url,
})

//iiii) Assert Response
.then((response) => {

// Response u devoloper consolda yazdirma 
console.log(response.body)

// Response u cypress consolda yazdirma 
//cy.log(JSON.stringify(response.body))


expect(response.status).to.equal(200)

expect(response.statusText).to.equal('OK')

expect(response.duration).to.be.lessThan(800)

expect(response.headers['content-type']).to.include('application/json;')









    
});




})

})