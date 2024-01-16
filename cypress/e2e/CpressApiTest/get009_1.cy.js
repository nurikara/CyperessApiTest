/*
Given
http://gorest.co.in/public/v1/users

When
User Sends Get Request to the URl

Then
Assert that Status is 200

And 
Assert that total is 2930

And
Assert that pages value is 293

And 
Assert that page is 1

And 
Assert that limit is 10

And 
Assert that previous link is null

And 
Assert that current link is "http://gorest.co.in/public/v1/users?page=1"

And 
Assert that next link is http://gorest.co.in/public/v1/users?page=2

Assert that number of fameles is less than number of males 

*/

describe("gorest.co",() =>{

    it('get09', () => {
    
    //i Set the url
    const pathParam1 = '/public'
    const pathParam2 = '/v1'
    const pathParam3= '/users'

    //ii Set the expectedData

   const expectedData = {
        "total": 3150,
        "pages": 315,
        "page": 1,
        "limit": 10,
        "links": {
            "previous": null,
            "current": "https://gorest.co.in/public/v1/users?page=1",
            "next": "https://gorest.co.in/public/v1/users?page=2"
      }}

      //iii Send the request 

      cy.request({
                method:'GET',
                 url: `${pathParam1}${pathParam2}${pathParam3}`



      })

      //iv Get the response and Assert it

      .then((response)=>{
     const actualData = response.body.meta.pagination
     
     //1) Assert that Status is 200
        expect(response.status).to.eq(200)

     //2) Assert that total is 3162
     expect(actualData.total).to.eq(expectedData.total)
  
     //3)Assert that pages value is 293
     expect(actualData.pages).to.eq(expectedData.pages)

     //4) Assert that page is 1
     expect(actualData.page).to.eq(expectedData.page)
     
     //5) Assert that limit is 10
     expect(actualData.limit).to.eq(expectedData.limit)

     //6)Assert that previous link is null 
     expect(actualData.links.previous).to.eq(expectedData.links.previous)

     //7) Assert that current link is "http://gorest.co.in/public/v1/users?page=1"
     expect(actualData.links.current).to.eq(expectedData.links.current)

     //8) Assert that next link is http://gorest.co.in/public/v1/users?page=2
        expect(actualData.links.next).to.eq(expectedData.links.next)

    //9) Assert that number of fameles is less than number of males 

    const numberOfFamales = response.body.data.map((item) =>item.gender ).filter((data) =>data ==="female").length
    const numberOfMales = response.body.data.map((item) =>item.gender ).filter((data) =>data ==="male").length

     expect(numberOfFamales).to.eq(numberOfMales)

      })


        
    });


})

