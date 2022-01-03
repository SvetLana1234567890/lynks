const cartWrapper = document.querySelector('.cart-wrapper');

const cartOrder = document.querySelector('.cart-order');

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart') || event.target.classList.contains('basketAdd')) {
       
        //по клику нахожу карточку с товаром
        const cart = event.target.closest('.product-wrap')

        const productInfo = {
            id: cart.dataset.id,
            imgSrc: cart.querySelector('.prod-img').getAttribute('src'),
            title: cart.querySelector('.item-title').innerText,
            price: cart.querySelector('.productPrice').innerText,
            counter: 1,
        };
        //console.log(productInfo);
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if (itemInCart) {
            //const counterElement = itemInCart.querySelector('[data-counter]');
            //counterElement.innerText = 1;
        } else {
            const cartItemHTML = `
                <li class = "cart-item" data-id="${productInfo.id}">
                    <input type="text" class="prodOrder" value="${productInfo.id}" name ="product_id[]"/>
                    <input type="text" class="prodOrder" value="${productInfo.title}" name="product_name[]"/>
                    
                    <div class="cart-img">
                        <a href="#"><img src="${productInfo.imgSrc}" alt=""></a>
                    </div>
                    <div class="cart-title">
                        <h4>${productInfo.title}</h4>
                        <div class="product-items">
                            <div class="product-quality"> 
                                <div class="dec qtybutton" data-action = "minus">-</div>
                                   <input type="number" class="prodOrder prodItem" data-counter="" value="${productInfo.counter}" name="product_counter[]"/>
                                <div class="inc qtybutton" data-action = "plus">+</div>
                            </div>
                            <span class="prodPrice">${productInfo.price}</span>
                        </div> 
                    </div>
                    <div class="cart-delete">×</div>
                </li>`;
            // Отобразим товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);   
        }
        
        toogleCartStatus();//отображение блока "Корзина пустая" если товар есть иди нет
        showBasketCnt(); // перерисовка количества товаров в корзине
        updateStorage(); //перерисовка в localStorage
        //запуск функции пересчета товаров в корзине
    }
    


});
// Вывод товаров из localStorage
const initialState = () => {
    if (localStorage.getItem('products') !== null) {
        document.querySelector('.cart-wrapper').innerHTML = localStorage.getItem('products');
        //document.querySelector('.cart-order').innerHTML = localStorage.getItem('products');

    }
};
initialState();
//Добавление товаров в localStorage
 const updateStorage = () => {
    let parent = document.querySelector('.cart-wrapper');
    let html = parent.innerHTML || parent.value;
    if (html.length) {
        localStorage.setItem('products', html);
    } else {
        localStorage.removeItem('products');
    };
    
};
toogleCartStatus();

