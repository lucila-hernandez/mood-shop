import data from './data.js'

const itemsContainer = document.querySelector('#items')

// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item'
	// create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image
	img.width = 300
	img.height = 300
	// Add the image to the div
	newDiv.appendChild(img)
	// put new div inside items container
	itemsContainer.appendChild(newDiv)

    // create a paragraph element for a description
    const desc = document.createElement('P')
    // give the paragraph text from the data
    desc.innerText = data[i].desc
    // append the paragraph to the div
    newDiv.appendChild(desc)
    // do the same thing for price
    const price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    // Make a button 
    const button = document.createElement('button')
    // add a data-id name to the button
    button.className = 'add-to-cart'
	// creates a custom attribute called data-price. That will hold price for each element in the button
	button.dataset.price = data[i].price
	button.innerHTML = "Add to Cart"
	newDiv.appendChild(button)
}



const cart = []

document.body.addEventListener('click', (e) => {
    if (e.target.matches('.add-to-cart')) {
      console.log(e.target)
      addItemToCart(e.target.id, e.target.dataset.price)
      console.log(cart) // Use console.log to test your work
    }
  })

const addItemToCart = (id, price) => {
    // Loop over cart items. 
    for (let i = 0; i < cart.length; i += 1) {
      // If we find a matching item increase the quantity
      if (cart[i].id === id) {
        cart[i].qty += 1
        return // exit this function early
      }
    }
    // If no matching items were found add a new item
    cart.push({ id, price, qty: 1 })
  }



//function removeFromCart(itemId) {}

//function calculateTotal() {}

