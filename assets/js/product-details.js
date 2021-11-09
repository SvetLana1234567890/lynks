


window.addEventListener('click', function (event) {
    const modalBody = document.querySelector('.modal-body');
     if (event.target.hasAttribute('data-bs-toggle')) {
        
        const cartDtl = event.target.closest('.product-wrap');
        
        const productInfoDtl = {
                    id: cartDtl.dataset.id,
                    imgSrc: cartDtl.querySelector('.prod-img').getAttribute('src'),
                    title: cartDtl.querySelector('.item-title').innerText,
                    price: cartDtl.querySelector('.productPrice').innerText,
                    description: cartDtl.querySelector('.prod-img').getAttribute('alt'),
                };

                const prodDtlHTML = `
                <div class="product-wrap row gx-0" data-id="${productInfoDtl.id}">
                    <div class="col-lg-5 col-md-5 col-12">
                        <div class=" modal-img-wrap">
                            <img class="prod-img" src="${productInfoDtl.imgSrc}" alt="">
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7 col-12"  >
                        <div class="product-details-content quickview-content">
                            <h2 class="item-title">${productInfoDtl.title}</h2>
                            <div class="product-details-price">
                                <span class="productPrice new-price">${productInfoDtl.price}</span>
                            </div>
                            <p>${productInfoDtl.description}</p>
                            <div class="product-details-action-wrap">
                                <div class="single-product-cart btn-hover">
                                    <a href="#pro-1" class="basketAdd" data-bs-dismiss="modal">Додати в кошик</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
     modalBody.innerHTML = prodDtlHTML;         
     }
     
});
