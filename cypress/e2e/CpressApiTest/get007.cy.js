/*
Given 
https://jsonplaceholder.typicode.com/todos

When
User sends GET Request to the URL

Then
Assert that Status Code is 200

And
Assert that there are 10 ids greater than 190

And 
Assert that the number of userids  whoes ids less than 5 is 4 

And 
Assert that 'delectus aut autem' is  one the title whoes ids is less than 5
*/

describe("jsonplaceholder.typicode",() => {

    it('get07', () => {
        //i Set the url
        const pethParam = '/todos'

        //ii Send the request 

        cy.request({
            method: 'GET',
            url: pethParam,
        })
        //iii Get the response and assert it
         .then((response)=> {

        //1)Assert that Status Code is 200
         expect(response.status).to.eq(200)

         //2)Assert that there are 10 ids greater than 190
         const idsThatGreaterThan190 = response.body.filter((item)=> item.id>190)
         expect(idsThatGreaterThan190).to.length(10)

        //3)Assert that the number of userids  whoes ids less than 5 is 4
         const idsThatLessThan5 = response.body.filter((item)=> item.id<5)
         expect(idsThatLessThan5).to.length(4)

         //4)Assert that 'delectus aut autem' is  one the title whoes ids is less than 5
         const idsThatLessThan5Title = response.body.filter((item)=> item.id<5).map((item)=> item.title)
         expect(idsThatLessThan5Title).to.include('delectus aut autem')




})

    })



})