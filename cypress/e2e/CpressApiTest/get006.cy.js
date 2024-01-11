/*
 Given 
 https://restful-booker.herokuapp.com/booking/3

 When
 User send get-request to the url

 Then
 Http-Status code is  200

 And 
 Status text is OK

 And 
 Response time is less than 300ms

 And 
 Response format is should be "application/json"

 And 
 First name is Susan

 And 
 Last name is Brown

 And 
 Total prise is 678

 And 
 Deposite paid is false 

 And 
 Checkin-date is "2020-07-26"

 And 
 Checkout-date is "2020-08-12"

*/



describe('restful-bookers',() => {
it('get06', () => {

    //i Set the url
    const pethParam1 = '/booking'
    const pethParam2 = '/3'

    //ii Send the request
    cy.request({
                method: 'GET',
                url: `${pethParam1}${pethParam2}`

})

//iii Get the response and assert it
.then((response) => {
 //1)HTTP Status Code should be 200
 expect(response.status).to.equal(200)

 //2)Status text is OK
 expect(response.statusText).to.equal('OK')

 //3) Response time is less than 300ms
 expect(response.duration).to.be.lessThan(300)

 //4) Response format should be “applications/json”
 expect(response.headers['content-type']).to.include('application/json')

 //5)First name is Susan
 expect(response.body.firstname).to.equal("Mark")

 
 //6) Last name is Brown
expect(response.body.lastname).to.equal("Brown")
 
 //7) Total prise is 678
 expect(response.body.totalprice).to.equal(480)

 
 //8) Deposite paid is false
 expect(response.body.depositpaid).to.be.true
 

 //9 Checkin-date is "2020-07-26"
 expect(response.body.bookingdates.checkin).to.equal("2017-10-28")


 
 //10 Checkout-date is "2020-08-12"
 expect(response.body.bookingdates.checkout).to.equal("2023-05-20")








})
    
});



})