let carrito =[]
const elementsContainer = document.getElementById('root');
const cartNumber = document.querySelector('#count');
const totalCart = document.querySelector('#total');
const sidebar = document.querySelector('.sidebar');
const cartItems = document.querySelector('#cartItem');

function createElements(){
    productList.forEach((product) => {
        const elementsBox = document.createElement("div");
        elementsBox.classList.add("box");
    
        const imageBox = document.createElement("div");
        imageBox.classList.add("img-box");
    
        const productImage = document.createElement("img");
        productImage.setAttribute("src", product.image);
        productImage.classList.add("images");
        
        imageBox.appendChild(productImage);

        const productInfo = document.createElement("div");
        productInfo.classList.add("bottom");

        const productName = document.createElement("p");
        productName.innerText = product.name;

        const productPrice = document.createElement("h2");
        productPrice.innerText = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.price);

        const addToCartButton = document.createElement("button");
        addToCartButton.innerText = "Anadir al carrito";
        addToCartButton.addEventListener("click", () => {
            carrito.push({
                name: product.name,
                image: product.image,
                price: product.price,
                id: product.id,
            });
            displayCart();
        });
        productInfo.appendChild(productName);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(addToCartButton);

        elementsBox.appendChild(imageBox);
        elementsBox.appendChild(productInfo);

        elementsContainer.appendChild(elementsBox);
    });
};
function displayCart(){
    total = 0;
    cartItems.innerHTML = '';
    cartNumber.innerText = carrito.length;
    if(carrito.length==0){
        cartItems.innerHTML = 'Tu carrito esta vacio.';
        totalCart.innerHTML = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(total);
    } 
    else{
        carrito.forEach((product) => {
            total = total + product.price;
            totalCart.innerHTML = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(total);
            
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            const cartImgcontainer = document.createElement('div');
            cartImgcontainer.classList.add('row-img');

            const cartImg = document.createElement('img');
            cartImg.classList.add('rowimg');
            cartImg.setAttribute('src', product.image);

            cartImgcontainer.appendChild(cartImg);

            const productName = document.createElement('p');
            productName.setAttribute('style', 'font-size:12px;');
            productName.innerHTML = product.name;

            const productPrice = document.createElement('h2');
            productPrice.setAttribute('style', 'font-size:15px;');
            productPrice.innerHTML = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.price);

            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fa-solid');
            deleteIcon.classList.add('fa-trash');
            deleteIcon.addEventListener('click', () => {
                i = carrito.indexOf(product);
                deleteElement(i);
            });
            cartItem.appendChild(cartImgcontainer);
            cartItem.appendChild(productName);
            cartItem.appendChild(productPrice);
            cartItem.appendChild(deleteIcon);

            cartItems.appendChild(cartItem);
        });
    }
}
function deleteElement(a){
    carrito.splice(a, 1);
    displayCart();
}

createElements(productList);
displayCart();