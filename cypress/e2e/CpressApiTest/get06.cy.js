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

 describe('restful-booker', () => {
it('get05', () => {

    //i Set the url
    const pethParam1= "/booking";
    const pethParam2="/3"

    //ii Send the request
    cy.request({
                method : 'GET',
                url:`${pethParam1}${pethParam2}` 

    })

    //iii Get the response and Assert it
    .then((response) => {
        
        //1)Status code is 200
          expect(response.status).to.eq(200)

        //2)Status text is OK
        expect(response.statusText).to.equal('OK')

        //3) Response time is less than 300ms
        expect(response.duration).to.be.lessThan(300)

        //4) First name is Susan
        expect(response.body.firstname).to.eq('Eric')
 
        //5) Last name is Susan
        expect(response.body.lastname).to.equal("Wilson") 

        //6)  Total prise is 678
        expect(response.body.totalprice).to.equal(675) 

        //7  Deposite paid is false 
        expect(response.body.depositpaid).to.be.false

        //8) Checkin-date is "2020-07-26"
        expect(response.body.bookingdates.checkin).to.equal('2019-12-04')

         //9) Checkin-date is "2020-07-26"
         expect(response.body.bookingdates.checkout).to.equal('2020-10-10')





    })
        





    });
    
});


