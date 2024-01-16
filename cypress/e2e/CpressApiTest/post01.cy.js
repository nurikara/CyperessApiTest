/*
Given
https://restful-booker.herokuapp.com/booking

And 
{
    "firstname": "John",
    "lastname: "okey",
    "totalprice": "1111",
    "depositpaid": true,
    "bookingdates":{
         
          "checkin":"2021-09-09"
          "checkout":"2022-09-21"

}}

When 
Send  POST request to the url

Then
Status code is 200
And 
response body should be like 

{
    "bookingid": 3668,
    "booking": {
        "firstname": "John",
        "lastname": "okey",
        "totalprice": 1111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2021-09-09",
            "checkout": "2022-09-21"
        }
    }}


*/