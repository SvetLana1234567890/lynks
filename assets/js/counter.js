window.addEventListener('click', function(event){
 
    //Объявдяем переменную для счетчика
    let counter;
    
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        //Находим обертку счетчика 
        const counterWraper = event.target.closest('.product-quality');
        counter = counterWraper.querySelector('[data-counter]');
        
    }
    if (event.target.dataset.action === 'plus') {
        
        counter.innerText = ++counter.innerText;
        calcCartPrice();
        updateStorage();
        calcOrderCart();

    }

    if (event.target.dataset.action === 'minus') { 
        // Уменьшение количества товаров       
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
            calcCartPrice();
            updateStorage();
            calcOrderCart();

        } 
        // Удаление товара если меньше 1шт
        else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
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
    // Удаление товара на х
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