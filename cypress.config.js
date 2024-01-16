const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
   
      //  baseUrl: "http://gorest.co.in",
     //   baseUrl: "https://jsonplaceholder.typicode.com",
       baseUrl: "https://restful-booker.herokuapp.com"
        //  baseUrl: "https://dummy.restapiexample.com"
  
  },

});
