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
        id: 44,
        name: 'Petite Coin Bangle',
        image: 'bracelet1.png',
        price: 178
    },
    {
        id: 45,
        name: 'Iolite Stone Wire Wrap',
        image: 'bracelet2.png',
        price: 170
    },
    {
        id: 46,
        name: 'Venus Bracelet',
        image: 'bracelet3.png',
        price: 55
    },
    {
        id: 47,
        name: 'Herkimer Diamond Ankle',
        image: 'bracelet4.png',
        price: 45
    },
    {
        id: 48,
        name: 'Curb Chain Bracelet',
        image: 'bracelet5.png',
        price: 125
    },
    {
        id: 49,
        name: 'Dream Catcher Star Ankle',
        image: 'bracelet6.png',
        price: 40
    },
    {
        id: 50,
        name: 'Threes a Charm',
        image: 'bracelet7.png',
        price: 38
    },
    {
        id: 51,
        name: 'Mini Star Bracelet',
        image: 'bracelet8.png',
        price: 40
    },
     {
        id: 52,
        name: 'The Golden Bangles',
        image: 'bracelet9.png',
        price: 225
    },
     {
        id: 53,
        name: 'Dream Catcher Star Gem',
        image: 'bracelet10.png',
        price: 65
    },
     {
        id: 54,
        name: 'Pearl Wire Wrap',
        image: 'bracelet11.png',
        price: 208
    },
     {
        id: 55,
        name: 'Bar Gem Bracelet',
        image: 'bracelet12.png',
        price: 65
    },
     {
        id: 56,
        name: 'Ankle Stone Bracelet',
        image: 'bracelet13.png',
        price: 45
    },
     {
        id: 57,
        name: 'Gold Ankle',
        image: 'bracelet14.png',
        price: 48
    },
     {
        id: 58,
        name: 'Silver Lux Gem',
        image: 'bracelet15.png',
        price: 158
    },
     {
        id: 59,
        name: 'The Bar Bracelet',
        image: 'bracelet16.png',
        price: 45
    },
     {
        id: 60,
        name: 'The Turqoiise and Hemitie',
        image: 'bracelet17.png',
        price: 98
    },
     {
        id: 61,
        name: 'Love Bracelet and Triplicity Ring',
        image: 'bracelet18.png',
        price: 165
    },
     {
        id: 62,
        name: 'Dream Catchers Mini',
        image: 'necklace19.png',
        price: 65
    },
     {
        id: 63,
        name: 'Gem PC Bracelet',
        image: 'bracelet20.png',
        price: 55
    },
     {
        id: 64,
        name: 'Together Bracelet',
        image: 'bracelet21.png',
        price: 42
    },
     {
        id: 65,
        name: 'Link Ankle',
        image: 'bracelet22.png',
        price: 35
    },
     {
        id: 66,
        name: 'Sunshine Ankle',
        image: 'bracelet23.png',
        price: 40
    },
     {
        id: 67,
        name: 'Good Fortune Bracelet',
        image: 'bracelet24.png',
        price: 35
    },
     {
        id: 68,
        name: 'Gold Ankle',
        image: 'bracelet25.png',
        price: 48
    },
     {
        id: 69,
        name: 'Sugar Ankle',
        image: 'bracelet26.png',
        price: 82
    },
     {
        id: 70,
        name: 'Three Strand Black Spinel',
        image: 'bracelet27.png',
        price: 275
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