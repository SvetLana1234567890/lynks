function calcCartPrice() {
	const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-wrapper .cart-item'); 
    const totalSumm = document.querySelector('.total-summ');
    let totalPrice = 0;

    cartItems.forEach(function(item) {

        const amounAll = item.querySelector('.cart-wrapper .items-curret');
        const priceAll = item.querySelector('.cart-wrapper .prodPrice');
        const currentPrice = parseInt(amounAll.innerHTML) * parseInt(priceAll.innerHTML);
        totalPrice += currentPrice;
    })
    //console.log(totalPrice);

    //Выводим сумму в корзине
    totalSumm.innerText = totalPrice;
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