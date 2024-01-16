/*
Given 
https://restful-booker.herokuapp.com/booking/3

When
User sends Get request to the url

Then
Assert that status code is 200

And 
Assert that firstname is Mark

And 
Assert that lastname is Ericssons

And 
Assert that price is 217

And 
Assert that depositpaid is true

And 
Assert that checkin date is "2015-"

And 
Assert that checkout date is "2015-"

*/

describe('restful-booker',() => {
it('get011', () => {
   
    //i) Set the url
const pathParam1 ='/booking'   
const pathParam2 =  '/3' 

// ii Set expected data
let expectedData;
cy.fixture('restful').then((data) => {

    expectedData = data
});

///iii) Send request
cy.request({
      method: 'GET',
      url: `${pathParam1}${pathParam2}`

})
.then((response) => {
     const actualData = response.body
    
      expect(response.status).to.eq(200)
      expect(actualData.firstname).to.eq(expectedData.firstname)
      expect(actualData).to.have.property('lastname',expectedData.lastname)    
      expect(actualData).to.have.property('totalprice',expectedData.totalprice)
      expect(actualData).to.have.property('depositpaid',expectedData.depositpaid)

      expect(actualData.bookingdates).to.include({
        
           checkin: expectedData.bookingdates.checkin,
           checkout: expectedData.bookingdates.checkout,


      })

})
})})