window.addEventListener('click', function(event){
 
    //Объявдяем переменную для счетчика
    let counter;
    
    // событие при нажатии на "+" или "-"
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        //Находим обертку счетчика 
        const counterWraper = event.target.closest('.product-quality');
        counter = counterWraper.querySelector('[data-counter]');
        
    }
    // +1 в счетчике
    if (event.target.dataset.action === 'plus') { 
        counter.value = (+counter.value + 1);
        calcCartPrice();
        updateStorage();
        calcOrderCart();

    }
    // -1 в счетчике
    if (event.target.dataset.action === 'minus') { 
        // Уменьшение количества товаров       
        if (parseInt(counter.value) > 1) {
            counter.value = (+counter.value - 1);
            calcCartPrice();
            updateStorage();
            calcOrderCart();

        } 
        // Удаление товара если меньше 1шт
        else if (event.target.closest('.cart-wrapper') && parseInt(counter.value) === 1) {
           event.target.closest('.cart-item').remove(); 

           //отображение блока "Корзина пустая" если товар есть иди нет
            toogleCartStatus();
            //запуск функции пересчета товаров в корзине
            calcCartPrice();
            showBasketCnt();
            updateStorage();
            calcOrderCart();

        }        
    }
    // Удаление товара при нажатии на х
    if (event.target.classList.contains("cart-delete")) {
        event.target.closest('.cart-item').remove();
        //отображение блока "Корзина пустая" если товар есть или нет
        toogleCartStatus();
        //запуск функции пересчета товаров в корзине
        calcCartPrice();
        showBasketCnt();
        updateStorage();
        calcOrderCart();
    }  
});