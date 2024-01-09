/*
Given 
    https://jsonplaceholder.typicode.com/todos
When

I send a Get request to the Url
And 

Request Headers accept is “applications/json”
Then 

HTTP Status Code should be 200
And 

Status text is OK
And 

Response time is less than 300ms
And 

Response format should be “applications/json”
And

There sould be 200 todos
And 

“molestiae perspiciatis ipsa” should be one of the todos title
And 

2,7 and 9 should be among the user ids 

*/
describe('todos among check',() => {
it('get04', () => {

    //i Set the url
    const pethParam = '/todos'
    
    //ii Set the payload
    //iiiSend the request 

    cy.request({
                 
                url: pethParam,

                headers: { 
                    
                    Accept : 'application/json'
                
                }


    })

    //iv Get the response and assert it

    .then((response) => {

      //1)HTTP Status Code should be 200
      expect(response.status).to.equal(200)

      //2)Status text is OK
      expect(response.statusText).to.equal('OK')

      //3) Response time is less than 300ms
      expect(response.duration).to.be.lessThan(300)

      //4) Response format should be “applications/json”
      expect(response.headers['content-type']).to.include('application/json')

      //5) There sould be 200 todos
      expect(response.body).has.length(200)

      //6) “molestiae perspiciatis ipsa” should be one of the todos title
      const title = response.body.map(todo => todo.title)
      expect(title).to.include('molestiae perspiciatis ipsa')

      //7) 2,7 and 9 should be among the user ids 
      const userId = response.body.map(todo => todo.userId)
      expect(userId).to.include.members([2,7,9])


    });






    
});




})