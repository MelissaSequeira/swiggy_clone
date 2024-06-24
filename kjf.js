document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    let itemCont = document.getElementById('sliderContainer');
    if (!itemCont) {
        console.error("Element with ID 'sliderContainer' not found");
        return;
    }

    let innerHtml = '';

    let items = [
        { id: 1, img: 'img/chinsewok.jpeg', txt: 'ITEMS AT RS179', restname: 'Chinese Wok', rating: 4.3, time: '30-35mins', foodtype: 'Chinese,asian,tibitan', addr: 'Santacruz East' },
        { id: 2, img: 'img/pizzahut.jpeg', txt: 'Rs125 OFF ABOVE RS249', restname: 'Pizza Hut', rating: 3.9, time: '55-60mins', foodtype: 'Pizzas', addr: 'Phoenix Market City' },
        { id: 3, img: 'img/chinsewok.jpeg', txt: '50% OFF UPTO rs100', restname: 'UBQ BY Barbeque Nation', rating: 3.9, time: '35-40 mins', foodtype: 'North Indian ,Barbeque,Biryani', addr: 'Bandra East' },
        { id: 4, img: 'img/pizzahut.jpeg', txt: 'Rs125 OFF ABOVE RS249', restname: 'Pizza Hut', rating: 3.9, time: '55-60mins', foodtype: 'Pizzas', addr: 'Phoenix Market City' },
        { id: 5, img: 'img/chinsewok.jpeg', txt: 'ITEMS AT RS179', restname: 'Chinese Wok', rating: 4.3, time: '30-35mins', foodtype: 'Chinese,asian,tibitan', addr: 'Santacruz East' }
    ];

    items.forEach(item => {
        innerHtml += `
            <div class="itemContainer1">
                <div class="imgrest">
                    <img src="${item.img}" alt="${item.restname}">
                    <p class="txt">${item.txt}</p>
                </div>
                <div class="restoname">${item.restname}</div>
                <div class="rate-time">${item.rating}..${item.time}</div>
                <div class="foodtype">${item.foodtype}</div>
                <div class="address">${item.addr}</div>
            </div>
        `;
    });

    itemCont.innerHTML = innerHtml;

    let index = 0;

    function showSlide(index) {
        const totalSlides = items.length;
        const offset = -index * 100;
        itemCont.style.transform = `translateX(${offset}%)`;
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items.length - 1;
        showSlide(index);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        index = (index < items.length - 1) ? index + 1 : 0;
        showSlide(index);
    });

    showSlide(index);
});
