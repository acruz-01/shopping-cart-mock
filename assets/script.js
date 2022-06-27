// quantity update
function quanUpdate(showQuantity) {
    let quantity = document.querySelector('.total-quantity');
    quantity.innerHTML = showQuantity;
}

// Initial quantity 
let quantity = 1

// add and minus buttons
const quanMinus = document.querySelector('#quantity-down')
const quanPlus = document.querySelector('#quantity-up')

// event listener for decrease quantity
quanMinus.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
    }
    quanUpdate(`Quantity: ${quantity}`)
})

// even listener for increase quantity
quanPlus.addEventListener('click', function(){
    quantity++
    quanUpdate(`Quantity: ${quantity}`)
})
