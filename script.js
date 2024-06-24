document.addEventListener('DOMContentLoaded', () => {
let left = document.querySelector('.ldirbutt');
let right = document.querySelector('.rdirbutt');
let left2 = document.querySelector('.ldirbutt2');
let right2 = document.querySelector('.rdirbutt2');
let slider1 = document.querySelector('.catpics');
let pics = document.querySelectorAll('.pics'); 
let slider2= document.querySelector('.itemsContainer');
let respics = document.querySelectorAll('.itemContainernew');
// use querySelectorAll to select all pic elements
let slideno1 = 0;
let picWidth = 168; // width of the .pics elements + margin (144px + 24px)
// let itemCont = document.querySelector('.itemContainer');
let slideno2 = 0;
let RespicWidth = 284; 
let innerHtml = '';
right.addEventListener('click', () => {
    if (slideno1 < pics.length - Math.floor(slider1.clientWidth / picWidth)) { // Adjust condition for proper range
        slideno1++;
        slider1.style.transform = `translateX(-${slideno1 * picWidth}px)`;
    }
});

left.addEventListener('click', () => {
    if (slideno1 > 0) { // Add left button functionality
        slideno1--;
        slider1.style.transform = `translateX(-${slideno1 * picWidth}px)`;
    }
});
right2.addEventListener('click', () => {
    if (slideno2 < pics.length - Math.floor(slider2.clientWidth / RespicWidth)) { // Adjust condition for proper range
        slideno2++;
        slider2.style.transform = `translateX(-${slideno2 * RespicWidth}px)`;
    }
});

left2.addEventListener('click', () => {
    if (slideno2 > 0) { // Add left button functionality
        slideno2--;
        slider2.style.transform = `translateX(-${slideno2 * RespicWidth}px)`;
    }
});
let items = [
    { id: 1, img: 'img/chinsewok.jpeg', txt: 'ITEMS AT RS179', restname: 'Chinese Wok', rating: 4.3, time: '30-35mins', foodtype: 'Chinese,asian,tibitan', addr: 'Santacruz East' },
    { id: 2, img: 'img/UBQ BY Barbeque Nation.jpeg', txt: '50% OFF UPTO rs100', restname: 'UBQ BY Barbeque Nation', rating: 3.9, time: '35-40mins', foodtype: 'North Indian, Barbecue, Biryani, Kebabs, Mughlai, Desserts', addr: 'Bandra East' },
    { id: 3, img: 'img/barbieq nation.jpeg', txt: '50% OFF UPTO rs100', restname: 'Barbeque Nation', rating: 3.9, time: '35-40 mins', foodtype: 'North Indian ,Barbeque,Biryani', addr: 'Bandra East' },
    { id: 4, img: 'img/pizzahut.jpeg', txt: 'Rs125 OFF ABOVE RS249', restname: 'Pizza Hut', rating: 3.9, time: '55-60mins', foodtype: 'Pizzas', addr: 'Phoenix Market City' },
    { id: 5, img: 'img/la pinzos pizza.jpeg', txt: 'ITEMS AT RS179', restname: 'la pinzos pizza', rating: 4.3, time: '30-35mins', foodtype: 'Chinese,asian,tibitan', addr: 'Santacruz East' },
    { id: 6, img: 'img/belgan waffle.jpeg', txt: 'ITEMS AT RS179', restname: 'Belgan waffle', rating: 4.3, time: '30-35mins', foodtype: 'Chinese,asian,tibitan', addr: 'Santacruz East' },
    { id: 7, img: 'img/macdonalds.jpeg', txt: 'ITEMS AT RS179', restname: 'Macdonalds', rating: 4.3, time: '30-35mins', foodtype: 'Chinese,asian,tibitan', addr: 'Santacruz East' },
    { id: 8, img: 'img/burger king.jpeg', txt: 'ITEMS AT RS179', restname: 'Burger king', rating: 4.3, time: '30-35mins', foodtype: 'Chinese,asian,tibitan', addr: 'Santacruz East' },
    { id: 9, img: 'img/kfc.avif', txt: 'ITEMS AT RS179', restname: 'KFC', rating: 4.3, time: '30-35mins', foodtype: 'Chinese,asian,tibitan', addr: 'Santacruz East' },
    { id: 10, img: 'img/subway.jpeg', txt: 'ITEMS AT RS179', restname: 'Subway', rating: 4.3, time: '30-35mins', foodtype: 'Chinese,asian,tibitan', addr: 'Santacruz East' },
    
];


let itemsContainerElement = document.querySelector('.itemsContainer');
if (!itemsContainerElement) {
  return;
}
items.forEach(item => {
  innerHtml +=`
    <div class="itemContainernew">
        <div class="imgrest">
            <img src="${item.img} ">
            <p class="txt">${item.txt}</p>
        </div>
        <div class="restoname">${item.restname}</div>
        <div class="rate-time">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
        ${item.rating} • ${item.time}
        </div>
        <div class="foodtype">${item.foodtype}</div>
        <div class="address">${item.addr}</div>
    </div>`
});
itemsContainerElement.innerHTML = innerHtml;
itemCont.innerHTML = innerHtml;});


let innerhtml1 = '';

let item1s = [
    { mid: 1, mimg: 'img/chinsewok.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Chinese Wok', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 2, mimg: 'img/UBQ BY Barbeque Nation.jpeg', mtxt: '50% OFF UPTO rs100', mrestname: 'UBQ BY Barbeque Nation', mrating: 3.9, mtime: '35-40mins', mfoodtype: 'North Indian, Barbecue, Biryani, Kebabs, Mughlai, Desserts', addr: 'Bandra East' },
    { mid: 3, mimg: 'img/barbieq nation.jpeg', mtxt: '50% OFF UPTO rs100', mrestname: 'Barbeque Nation', mrating: 3.9, mtime: '35-40 mins', mfoodtype: 'North Indian ,Barbeque,Biryani', maddr: 'Bandra East' },
    { mid: 4, mimg: 'img/pizzahut.jpeg', mtxt: 'Rs125 OFF ABOVE RS249', mrestname: 'Pizza Hut', mrating: 3.9, mtime: '55-60mins', mfoodtype: 'Pizzas', maddr: 'Phoenix Market City' },
    { mid: 5, mimg: 'img/la pinzos pizza.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'la pinzos pizza', rating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 6, mimg: 'img/belgan waffle.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Belgan waffle', rating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 7, mimg: 'img/macdonalds.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Macdonalds', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 8, mimg: 'img/burger king.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Burger king', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 9, mimg: 'img/kfc.avif', mtxt: 'ITEMS AT RS179', mrestname: 'KFC', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 10, mimg: 'img/bigbowl.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Subway', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 12, mimg: 'img/dabba garam.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Subway', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 13, mimg: 'img/dominos.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Subway', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 14, mimg: 'img/dumsafar.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Subway', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 15, mimg: 'img/great indian kichdi.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Subway', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 16, mimg: 'img/guru kripa.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Subway', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 17, mimg: 'img/sahahara hotel.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Subway', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 18, mimg: 'img/starbucks.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Subway', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 19, mimg: 'img/theobroma.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Subway', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 20, mimg: 'img/chayoos.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Subway', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    { mid: 21, mimg: 'img/subway.jpeg', mtxt: 'ITEMS AT RS179', mrestname: 'Subway', mrating: 4.3, mtime: '30-35mins', mfoodtype: 'Chinese,asian,tibitan', maddr: 'Santacruz East' },
    
    
    
];let restinfodiv = document.querySelector('.restoinfo');
if (!restinfodiv) {
    console.log('restoinfo element not found');
} else {
    item1s.forEach(item1 => {
        innerhtml1 += `<div class="mumrestopics">
            <div class="mumrestimg">
                <img src="${item1.mimg}">
            </div>
            <div class="restoname">${item1.mrestname}</div>
            <div class="rate-time">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                    <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path>
                    <defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs>
                </svg>
                ${item1.mrating} • ${item1.mtime}
            </div>
            <div class="foodtype">${item1.mfoodtype}</div>
            <div class="address">${item1.maddr}</div>
        </div>`;
    });

    console.log(innerhtml1);  // Log the HTML to check if it is being generated correctly
    restinfodiv.innerHTML = innerhtml1;
}