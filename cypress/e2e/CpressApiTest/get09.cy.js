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
Assert that next link is "http://gorest.co.in/public/v1/users?page=2"

Assert that number of fameles is less than number of males 

*/

describe("gorest.co",() => {
it('get09', () => {
//i Set the url
const pathParam1 = "/public"
const pathParam2 = "/v1"
const pathParam3 = "/users"

//ii Set the expected data

const expectedData={
    total: 3168,
    pages: 317,
    page: 1,
    limit: 10,
    links: {
        previous: null,
        current: "https://gorest.co.in/public/v1/users?page=1",
        next: "https://gorest.co.in/public/v1/users?page=2"
    }}

//iii Send the request

cy.request({
    method: 'GET',
  //  url: `${pathParam1}${pathParam2}${pathParam3}`,
      url: 'https://gorest.co.in/public/v1/users'
})

// iv Get the response and Assert it 

.then((response)=>{

       const actualData = response.body.meta.pagination;
   
    //1) Assert that Status is 200
        expect(response.status).to.equal(200)
    
     //2) Assert that total is 2930
        expect(actualData.total).to.equal(expectedData.total)

     //3) Assert that pages value is 293
        expect(actualData.pages).to.equal(expectedData.pages)

    //4) Assert that page is 1
        expect(actualData.page).to.equal(expectedData.page)
        
    //5) Assert that limit is 10
        expect(actualData.limit).to.equal(expectedData.limit)

    //6) Assert that previous link is null
        expect(actualData.links.previous).to.equal(expectedData.links.previous)

    //7) Assert that current link is "http://gorest.co.in/public/v1/users?page=1"
        expect(actualData.links.current).to.equal(expectedData.links.current)
        
    //8) Assert that next link is "http://gorest.co.in/public/v1/users?page=2"
        expect(actualData.links.next).to.equal(expectedData.links.next)

    //9) Assert that number of fameles is less than number of males 

    const genders = response.body.data.map((users)=>users.gender)

    const males = genders.filter((item) => item ==="male").length
    const famales = genders.filter((item) => item ==="female").length


    expect(famales).to.be.lessThan(males)






})
    
})

})

