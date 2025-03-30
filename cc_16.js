// Task 2 Fetch Products w/ .then()

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

// Task 3 Fetch Products w/ async/wait

async function fetchProductsAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        // Fetching Product data from API
        const productData = await response.json();
        displayProducts(productData);   //displaying products on webpage
    } catch (error) {
        handleError(error);
    }
}

// Task 4 Display the Products

function displayProducts(products) {
    const container = document.getElementById("product-container");
   
     //First 5 products
     products.slice(0, 5).forEach(product => {
        //Creating a product card and assigning a class for styling
        const productCard = document.createElement('div');
        productCard.setAttribute('class','product-card');
        
        //Create product name
        const productName = document.createElement('h3');
        productName.setAttribute('class', 'product-header');
        productName.textContent = product.fields.name;
        productCard.append(productName);

        //Create product price
        const productPrice = document.createElement('div');
        productPrice.setAttribute('class', 'product-price');
        productPrice.textContent = '$' + product.fields.price;
        productCard.append(productPrice);

        //Create product image
        const divProductImage = document.createElement('div');
        divProductImage.setAttribute('class', 'product-image');
        const productImage = document.createElement('img');
        productImage.src =  product.fields.image[0].thumbnails.small.url; // Setting the product image URL
        productImage.width = 250;
        productImage.height = 250;
        divProductImage.append(productImage);
        productCard.append(divProductImage);
        
        //Append product card to main container
        divProductContainer.append(productCard);
    })
    
}



      