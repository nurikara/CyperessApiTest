/*
Given
     https://jsonplaceholder.typicode.com/todos/198
When
     User send Get request to the endpoint
Then 
     Status code is 200
And 
     Status text is OK
And 
     Response Time is less than 400ms
And 
    Response body is JSON data type 
And 
    title  is quis eius est sint explicabo
And 
    completed is  true
*/

describe('jesonplaceholder body check',()=>{
    it('get03', () => {

        //i Set the url
        const url = "https://jsonplaceholder.typicode.com/todos/198"

        //ii Set the Payload
        
        //iii Send the request 

        cy.request({
           
                      method: 'Get',
                      url: url,


        })

        //iV Get the response and assert it
.then((response)=>{

    //1 Status code is 200
     expect(response.status).to.eq(200)

     //2 Status text is OK
     expect(response.statusText).to.eq("OK")

     //3 Response Time is less than 400ms
     expect(response.duration).to.be.lessThan(400)

     //4 Response body is JSON data type 
      expect(response.headers['content-type']).to.include("application/json")

      //5  title  is quis eius est sint explicabo 
      expect(response.body.title).to.be.eq("quis eius est sint explicabo")

      //6 completed is  true
      expect(response.body.completed).to.be.true



})
        
})
})