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



describe('number of todos and among the user ids', () => {

it('get04', () => {
//i Set the url 
const pethParam = '/todos';

//ii Set the payload
//iii Send the request

cy.request({
    url: pethParam ,
    headers: {
        Accept: 'application/json',
    },
})

// Get the response and Assert it

.then((response) => {

//1) HTTP Status Code should be 200
  expect(response.status).to.equal(200)

  //2) HTTP Status Code text shoul  be OK
  expect(response.statusText).to.eq("OK")

  //3) Response Time is less than 400ms
expect(response.duration).to.be.lessThan(400)


//4) Request Headers accept is “applications/json”
expect(response.headers['content-type']).to.include("application/json")


//5) There sould be 200 todos
 const title = response.body.map((item) =>item.title)
 expect(title).to.have.lengthOf(200)

//6) “molestiae perspiciatis ipsa” should be one of the todos title
 expect(title).to.include('molestiae perspiciatis ipsa')

 //7) 2,7 and 9 should be among the user ids 
 const userId = response.body.map(item => item.userId)
 expect(userId).to.include.members([2,7,9])
 



 

 })
});
})