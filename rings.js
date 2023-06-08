let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 28,
        name: 'Circle Gem Rings',
        image: 'ring1.png',
        price: 58
    },
    {
        id: 29,
        name: 'Duo Gold Rings',
        image: 'ring2.png',
        price: 98
    },
    {
        id: 30,
        name: 'Silver & Gem Rings',
        image: 'ring3.png',
        price: 64
    },
    {
        id: 31,
        name: 'Silver & Large Gem Rings',
        image: 'ring4.png',
        price: 78
    },
    {
        id: 32,
        name: 'Gold Large Gem Rings',
        image: 'ring5.png',
        price: 84
    },
    {
        id: 33,
        name: 'Gold & Gem Rings',
        image: 'ring6.png',
        price: 74
    },
    {
        id: 34,
        name: 'Duo Silver Rings',
        image: 'ring7.png',
        price: 88
    },
    {
        id: 35,
        name: 'Three Cheers Rings',
        image: 'ring8.png',
        price: 28
    },
     {
        id: 36,
        name: 'Triplicity Rings',
        image: 'ring9.png',
        price: 18
    },
     {
        id: 37,
        name: 'Mini Oval Gemstone Ring',
        image: 'ring10.png',
        price: 62
    },
     {
        id: 38,
        name: 'Herkimer Diamond Ring',
        image: 'ring11.png',
        price: 60
    },
     {
        id: 39,
        name: 'Mini Herkimer Diamond Ring',
        image: 'ring12.png',
        price: 45
    },
     {
        id: 40,
        name: 'Mini Star Ring',
        image: 'ring13.png',
        price: 25
    },
     {
        id: 41,
        name: '4Ever Rings',
        image: 'ring14.png',
        price: 90
    },
     {
        id: 42,
        name: 'Wrapped in Joy Rings',
        image: 'ring15.png',
        price: 49
    },
     {
        id: 43,
        name: 'Quadruplicity Ring',
        image: 'ring16.png',
        price: 20
    }
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="/backend/image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}