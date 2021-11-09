function showBasketCnt() {
    const cartWrapper = document.querySelector('.cart-wrapper') || document.querySelector('.cart-order');
    const cartCnt = document.querySelector('.product-count');

    if(cartWrapper.children.length > 0) {
        cartCnt.innerText = cartWrapper.children.length;
    }
//console.log(cartWrapper.children.length);
}
showBasketCnt();