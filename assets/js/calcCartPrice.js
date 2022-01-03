// Пересчет суммы покупок в корзине
function calcCartPrice() {
	const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-wrapper .cart-item'); 
    const totalSumm = document.querySelector('.total-summ');
    let totalPrice = 0;

    // ( function () {
    //     const amounAll = item.querySelector('.cart-wrapper .prodItem');
    //     for (var i=0; i<amounAll.length; i++) {
    //         summ += parseInt( amounAll[i].value);
    //     }
    //     totalSumm.innerText = summ;
    // })();
    cartItems.forEach(function(item) {

        const amounAll = item.querySelector('.cart-wrapper .prodItem');
        const priceAll = item.querySelector('.cart-wrapper .prodPrice');
        const currentPrice = amounAll.value * parseInt(priceAll.innerHTML);
        totalPrice += currentPrice;
    })
    //console.log(totalPrice);

    //Выводим сумму в корзине
    totalSumm.innerText = totalPrice;

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
    // const priceElement = document.querySelectorAll('.prodPrice');  //console.log(cartItem);
    // const totalPriceEl = document.querySelector('.total-price');


    // let priceTotal = 0;

    // priceElement.forEach(function (item) {
    //     //console.log(item);

    //     const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

    //     priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);

    //     console.log(priceTotal);
    // });
    // totalPriceEl.innerText = priceTotal;
}