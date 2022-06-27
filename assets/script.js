// update quantity
function quanUpdate(showQuantity) {
    let quantity = document.querySelector('.total-quantity');
    quantity.innerHTML = showQuantity;
}

// Start quantity at 1 since product is in cart
let quantity = 1

// Buttons
const quanMinus = document.querySelector('#quantity-down')
const quanPlus = document.querySelector('#quantity-up')

// add event listener to decrease quantity
quanMinus.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
    }
    quanUpdate(`Quantity: ${quantity}`)
})

// add event listener to increase quantity
quanPlus.addEventListener('click', function(){
    quantity++
    quanUpdate(`Quantity: ${quantity}`)
})
