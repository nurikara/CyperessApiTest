/*
Given
  https://restful-booker.herokuapp.com/booking/2040

When
  User send Get Request to the endpoint
Then 
  Status Code is 404
And 
  Status-text is "Not Found"
And 
  Response body include "Not Found"
And 
  Response body does not include "Nuri Kara"
And 
  Header Server is "Cowboy"
And  
Header Connection is "keep-alive"

*/

describe('GET Method Testing', () => {

it('get02', () => {

   // i) Set the URL

   const url = 'https://restful-booker.herokuapp.com/booking/20400';
   
   

   //ii) Set the payload 


   //iii) Sent the request 

   cy.request({
         
               method: 'GET',
               url: url,
               failOnStatusCode : false
      })

   //iv) Get  the response and Assert Response
.then((response) => {
console.log(response.body);
cy.log(JSON.stringify(response.body));

//Status Code is 404
expect(response.status).to.eq(404);

// Status-text is "Not Found"
expect(response.statusText).to.eq("Not Found");

//Response body include "Not Found"
expect(response.body).to.include("Not Found");

//Response body does not include "Nuri Kara"

expect(response.body).to.not.include("Nuri Kara");

// Header Server is "Cowboy"
expect(response.headers['server']).to.equal("Cowboy");


//Header Connection is "keep-alive"

expect(response.headers['connection']).to.equal("keep-alive");




})

    
});


})