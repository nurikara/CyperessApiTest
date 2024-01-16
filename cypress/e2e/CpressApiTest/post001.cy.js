/*
Given
https://restful-booker.herokuapp.com/booking

And 
{
    "firstname": "John",
    "lastname: "okey",
    "totalprice": "1111",
    "depositpaid": true,
    "bookingdates":{
         
          "checkin":"2021-09-09"
          "checkout":"2022-09-21"

}}

When 
Send  POST request to the url

Then
Status code is 200
And 
response body should be like 

{
    "bookingid": 3668,
    "booking": {
        "firstname": "John",
        "lastname": "okey",
        "totalprice": 1111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2021-09-09",
            "checkout": "2022-09-21"
        }
    }}


*/

describe('restful-booker',() => {

    it('post01', () => {
        
  
    // Set the url
    const url= "/booking"

    // Set the payLoad
 
     cy.fixture('payload').then((data) => {
       let expectedData = data;
        cy.log(expectedData.firstname + ' ' + expectedData.lastname)



// Send the request 
cy.request({
method: 'POST',
body:expectedData,
url:url,
headers: {'Content-Type': 'application/json'}

}).then((response) => {
// Get the response and assert it
const actualData = response.body.booking;
expect(response.status).to.equal
expect(actualData.firstname).to.eq(expectedData.firstname)
expect(actualData.lastname).to.eq(expectedData.lastname)
expect(actualData.totalprice).to.eq(expectedData.totalprice)
expect(actualData.depositpaid).to.eq(expectedData.depositpaid)

expect(actualData.bookingdates).to.have.include({

    checkin:expectedData.bookingdates.checkin,
    checkout:expectedData.bookingdates.checkout
})


})   


})  });})

