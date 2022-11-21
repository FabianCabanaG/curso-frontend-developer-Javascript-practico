// Navbar email
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 

const mobileMenu = document.querySelector('.mobile-menu'); 
const menuIcon = document.querySelector('.menuIcon'); 


const shoppingCart = document.querySelector('.navbar-shopping-cart'); 
const productAside = document.querySelector('.product-detail'); 

const cardsContainer = document.querySelector('.cards-container');


function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
    productAside.classList.add('inactive');
};

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive')
    productAside.classList.add('inactive');
};

function toggleProductAside () {
    productAside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');  
    desktopMenu.classList.add('inactive'); 
};

menuEmail.addEventListener('click',toggleDesktopMenu);
menuIcon.addEventListener('click',toggleMobileMenu);
shoppingCart.addEventListener('click',toggleProductAside);


const productList = [];
productList.push(
    {
        name:'Bike',
        price:120,
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name:'Pantalla',
        price:220,
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);

productList.push(
    {
        name:'Compu',
        price:620,
        image:'https://i.blogs.es/5d6007/luffy-en-one-piece/1366_2000.jpeg'
    }
);

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgCard = document.createElement('img');
        imgCard.setAttribute('src',product.image);
    
        const productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('product-info');
    
        const productInfoInnerDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
        figureImg.setAttribute('alt','carrito de compra');
    
        productFigure.append(figureImg);
    
        productInfoInnerDiv.append(productPrice,productName);
    
        productInfoDiv.append(productInfoInnerDiv,productFigure);
    
        productCard.append(imgCard,productInfoDiv);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList)


