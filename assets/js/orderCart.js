// вывод списка товаров в форме заказа
document.querySelector('.cart-order').innerHTML = localStorage.getItem('products');
// пересчет суммы товаров в форме заказа
function calcOrderCart() {
    const cartItems = document.querySelectorAll('.cart-order .cart-item'); 
    const totalOrderSumm = document.querySelector('.total-order-summ');
    let totalPriceOrder = 0;

    cartItems.forEach(function(item) {

        const amounAllOrder = item.querySelector('.cart-order .prodItem');
        const priceAllOrder = item.querySelector('.cart-order .prodPrice');
        const currentPriceOrder = amounAllOrder.value * parseInt(priceAllOrder.innerHTML);
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
});

// jQuery(document).ready(function () {
//     jQuery('.send-form').click( function() {
//         var form = jQuery(this).closest('form');

//         if (form.valid() ) {
//             var actUrl = form.attr('action');

//             jQuery.ajax({
//                 url: actUrl,
//                 type: 'post',
//                 dataType: 'html',
//                 data: form.serialize(),
//                 success: function(data) {
//                     form.html(data);
//                     form.find('.status').html("Дякуємо за замовлення! Менеджер зв'яжеться з вами найближчим часом.");
//                 },
//                 error: function() {
//                     form.find('.status').html('Помилка серверу');
//                 }
//             });
//         }
//     });
// });