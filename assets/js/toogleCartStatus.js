function toogleCartStatus(){

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');

    const orderForm = document.querySelector('#order-form');
     
    if(cartWrapper.children.length > 0) {
         cartEmptyBadge.style.display = 'none';
         orderForm.style.display = 'block';
    } else {
        cartEmptyBadge.style.display = 'block'; 
        orderForm.style.display = 'none';
     }

    
}