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
    Response time should be less than 300
And
    Response Body should be JSON Data Type

*/

describe('Http Request', () => {

it('get01', () => {

//i) Set the endpoint 

const url ='https://restful-booker.herokuapp.com/booking/3';

//ii) Set the payload 
//iii) Send the request

cy.request({
                method: 'GET',
                url: url
})

//Get the response
.then((response) => {
                  
    //Response u  developer konsolda gorelim
    console.log(response.body);

    //Response u cypress consolunda gorelim.

    cy.log(JSON.stringify(response.body))

    expect(response.status).to.eq(200)

    expect(response.statusText).to.eq('OK');

    expect(response.duration).to.be.lessThan(400)
    
    expect(response.headers["content-type"]).include("application/json")


                    })

});


})

