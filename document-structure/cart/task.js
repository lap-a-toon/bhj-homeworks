document.addEventListener('DOMContentLoaded',()=>{
    let products = document.querySelector('.products');
    let cart = document.querySelector('.cart__products');
    products.addEventListener('click',(e)=>{
        let product = e.target.closest('.product');

        // QUANTITY
        if(e.target.classList.contains('product__quantity-control')){
            let product__quantity_elem = product.querySelector('.product__quantity-value')
            let product__quantity = parseInt(product__quantity_elem.innerText);
            if(e.target.classList.contains('product__quantity-control_inc')){
                product__quantity = product__quantity + 1
            }
            if(e.target.classList.contains('product__quantity-control_dec')){
                product__quantity = (product__quantity === 1) ? 1 : product__quantity - 1
            }
            product__quantity_elem.innerText = product__quantity;
        }

        // ADD_TO_CART
        if(e.target.classList.contains('product__add')){
            let product__quantity = parseInt(product.querySelector('.product__quantity-value').innerText);
            let productID = product.getAttribute('data-id');
            let cartProducts = [...cart.querySelectorAll('.cart__product')];

            let productExists = cartProducts.find(cartProduct=>{
                return cartProduct.getAttribute('data-id') === productID;
            });
            if(productExists){
                productExists.querySelector('.cart__product-count').innerText = parseInt(productExists.querySelector('.cart__product-count').innerText) + product__quantity;
            }else{
                let cartProduct = document.createElement('div');
                cartProduct.setAttribute('class','cart__product');
                cartProduct.setAttribute('data-id',productID);
                let cartProductImage = document.createElement('img');
                cartProductImage.setAttribute('class','cart__product-image');
                cartProductImage.setAttribute('src',product.querySelector('.product__image').getAttribute('src'));
                let cartProductQuantity = document.createElement('div');
                cartProductQuantity.setAttribute('class','cart__product-count');
                cartProductQuantity.innerText = product__quantity;
                cartProduct.appendChild(cartProductImage);
                cartProduct.appendChild(cartProductQuantity);
                cart.appendChild(cartProduct);
            }
        }
    })
})