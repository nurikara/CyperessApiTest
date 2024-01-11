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
Assert that 'delectus aut autem' is not one the title whoes ids is less than 5
*/

describe("jsonPlaceHolder",() => {
it('get07', () => {
    //i Set the url
    const pethParam = '/todos'

    //ii Send the request

    cy.request({
                method: 'GET',
                url :pethParam       
         

    })
    //iii Get the response and Assert the response
    .then((response) => {
     
        //1) Assert that Status Code is 200
             expect(response.status).to.eql(200)
             
        //2) Assert that there are 10 ids greater than 190
             const ids = response.body.filter((item) =>item.id>190)
             expect(ids).to.lengthOf(10) 

        //3) userids  whoes ids less than 5 is 4 
             const userids = response.body.filter((item) =>item.id<5)
             expect(userids).to.lengthOf(4)
             
        //4) Assert that 'delectus aut autem' is not one the title whoes ids is less than 5
        
           const title = response.body.filter((item) => item.id<5).map((item) => item.title)
           expect(title).to.include('delectus aut autem')


    })
    
});

})