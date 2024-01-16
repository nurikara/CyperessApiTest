/*
Given 
https://jsonplaceholder.typicode.com/todos/2

Then
User send request to the Url 

And 
Assert that Status code is 200

And 
Assert that userId is "1"

And
Assert that title is "quis ut nam facilis afficia qui"

And 
Assert that completed is false

And 
Assert that header via is "1.1" Vergur

And 
Assert that header server is "cloudflare"

*/

describe("jsonplaceholder",() => {

it('get08', () => {

//i) Set the url
const pathParam1= "/todos"
const pathParam2= "/2"
//ii) Set the expected data

const expectedData = {
                      status: 200,
                      userId: 1,
                      title:"quis ut nam facilis et officia qui",
                      completed: false,
                      via: "1.1 vegur",
                      server: "cloudflare"
                    }

                    //iii Send the request
                    cy.request({
                               method:"Get",
                               url: `${pathParam1}${pathParam2}`


                    })

                    //iv Get the response and Assert the it

                    .then((response) =>{
                    
                        //1)Assert that Status code is 200
                        expect(response.status).to.eq(200)
                        
                        //2) Assert that userId is "1"
                        expect(response.body.userId).to.eq(expectedData.userId)

                        //3) Assert that title is "quis ut nam facilis afficia qui"
                        expect(response.body.title).to.eq(expectedData.title)

                        //4) Assert that completed is false
                        expect(response.body.completed).to.eq(expectedData.completed)

                        //5) Assert that header via is "1.1" Vergur
                        expect(response.headers['via']).to.eq(expectedData.via)

                        //6) Assert that header server is "cloudflare"
                        expect(response.headers['server']).to.eq(expectedData.server)
                        expect(response.headers.server).to.eq(expectedData.server)

                      



                      })

                    })





    
});




