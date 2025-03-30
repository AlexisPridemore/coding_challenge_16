// Task 2 Fetch Products

function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products') // Using Fetch to get product data from API
    .then(response => { // Check response 
       if (!response.ok)  {
        throw new Error('Error Loading HTTP') // Throw an error if response is not successful 
       }
       return response.json(); // Converting the response data to JSON 
    })

    .then(products => {
        // Going through each product in the list
        products.forEach(product => { 
            console.log(product.fields.name); // Log each product's name in the console
        } )
    })
     .catch(error => {  //log any errors
        console.error('Error occurred during fetch operation:', error); // Logging of error to console
    })
}