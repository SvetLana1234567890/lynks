document.querySelector('.cart-order').innerHTML = localStorage.getItem('products');

function calcOrderCart() {
    const cartItems = document.querySelectorAll('.cart-order .cart-item'); 
    const totalOrderSumm = document.querySelector('.total-order-summ');
    let totalPriceOrder = 0;

    cartItems.forEach(function(item) {

        const amounAllOrder = item.querySelector('.cart-order .items-curret');
        const priceAllOrder = item.querySelector('.cart-order .prodPrice');
        const currentPriceOrder = parseInt(amounAllOrder.innerHTML) * parseInt(priceAllOrder.innerHTML);
        totalPriceOrder += currentPriceOrder;
    })
    totalOrderSumm.innerText = totalPriceOrder + 'грн.';
}
calcOrderCart();
window.addEventListener('click', function(event){
if (event.target.classList.contains('.cart-order .cart-delete')) {
    event.target.closest('.cart-order .cart-item').remove();
    //отображение блока "Корзина пустая" если товар есть или нет
    toogleCartStatus();
    //запуск функции пересчета товаров в корзине
    calcCartPrice();
    showBasketCnt();
    updateStorage();
    
}  
})