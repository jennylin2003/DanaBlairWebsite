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
        id: 1,
        name: 'PC 4 Necklace',
        image: 'necklace1.png',
        price: 160
    },
    {
        id: 2,
        name: 'Mini Dream Catcher',
        image: 'necklace2.png',
        price: 56
    },
    {
        id: 3,
        name: 'LOVE Necklace',
        image: 'necklace3.png',
        price: 350
    },
    {
        id: 4,
        name: 'Divine Necklace',
        image: 'necklace4.png',
        price: 89
    },
    {
        id: 5,
        name: 'Mini V',
        image: 'necklace5.png',
        price: 48
    },
    {
        id: 6,
        name: 'Sugar Necklace',
        image: 'necklace6.png',
        price: 50
    },
    {
        id: 7,
        name: 'Life & Joy Long',
        image: 'necklace7.png',
        price: 165
    },
    {
        id: 8,
        name: 'Consistency Gemstone Necklace',
        image: 'necklace8.png',
        price: 192
    },
     {
        id: 9,
        name: 'Herkimer Diamond Drop Necklace',
        image: 'necklace9.png',
        price: 75
    },
     {
        id: 10,
        name: 'Circle Gem Necklace',
        image: 'necklace10.png',
        price: 89
    },
     {
        id: 11,
        name: 'Gem Stone Necklace',
        image: 'necklace11.png',
        price: 68
    },
     {
        id: 12,
        name: 'Sun Drop Necklace',
        image: 'necklace12.png',
        price: 45
    },
     {
        id: 13,
        name: 'Dream Catcher Star Gem Necklace',
        image: 'necklace13.png',
        price: 64
    },
     {
        id: 14,
        name: 'Gold Ankle Necklace',
        image: 'necklace14.png',
        price: 48
    },
     {
        id: 15,
        name: 'Multi-Color Tourmaline Pendant Necklace',
        image: 'necklace15.png',
        price: 88
    },
     {
        id: 16,
        name: 'Emerald Necklace',
        image: 'necklace16.png',
        price: 310
    },
     {
        id: 17,
        name: 'Y Gem Necklace',
        image: 'necklace17.png',
        price: 82
    },
     {
        id: 18,
        name: 'Long Gemstone Necklace',
        image: 'necklace18.png',
        price: 115
    },
     {
        id: 19,
        name: 'Sugar Necklace',
        image: 'necklace19.png',
        price: 50
    },
     {
        id: 20,
        name: 'Mini Dream Catcher Star Necklace',
        image: 'necklace20.png',
        price: 58
    },
     {
        id: 21,
        name: 'Life and Joy Necklace',
        image: 'necklace21.png',
        price: 95
    },
     {
        id: 22,
        name: 'Galaxy Gem Necklace',
        image: 'necklace22.png',
        price: 110
    },
     {
        id: 23,
        name: 'Super Divine Necklace',
        image: 'necklace23.png',
        price: 110
    },
     {
        id: 24,
        name: 'Good Fortune Necklace',
        image: 'necklace24.png',
        price: 55
    },
     {
        id: 25,
        name: 'Gem PC Necklace',
        image: 'necklace25.png',
        price: 75
    },
     {
        id: 26,
        name: 'Seven Cheers Necklace',
        image: 'necklace26.png',
        price: 82
    },
     {
        id: 27,
        name: 'Balance Horizon Necklace',
        image: 'necklace27.png',
        price: 55
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