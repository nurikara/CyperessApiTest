/*
 Given 
 https://restful-booker.herokuapp.com/booking?firstname=Mark&lastname=Jones

 When 
 User send a request to the endpoint

 Then
 Status code is 200

 And
 Status message is OK

 And 
 Response time is less than 300ms
 
 And 
 Response format must be application/json

 And
 Among the data there should be someone whose name is Mark Jones

*/

describe('Restful-Booking',() => {
it('get05', () => {

    //i Set the url

    const pethParam = '/booking'
    const queryParam ={
                      firstname: 'Eric',
                      lastname: 'Jones'
    }

    //ii Send the request

    cy.request({

                method: 'GET',
                url: pethParam,
                qs: queryParam
    })

    //iii Get the response and assert it

    .then((response) => {
        //1)Status code is 200
        expect(response.status).to.eq(200)

        //2)Status text is OK
        expect(response.statusText).to.equal('OK')

        //3) Response time is less than 300ms
        expect(response.duration).to.be.lessThan(300)

        //4) Response format should be “applications/json”
        expect(response.headers['content-type']).to.include('application/json')

        //5)Among the data there should be someone whose name is Mark Jones
         expect(response.body[0].bookingid).to.be.eq(3)
    
});


})
})