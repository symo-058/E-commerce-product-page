const iconMenu = document.querySelector(".icon-menu")
const iconClose = document.querySelector(".icon-close")
const iconClose1 = document.querySelector(".icon-close1")
const menu = document.querySelector(".menu")
const offCanvas = document.querySelector(".off-canvas")
const offCanvas1 = document.querySelector(".off-canvas1")
const slideSection = document.querySelector(".slide-section")
const thumbs1 = document.querySelector('.thumbs1')
const thumbs = document.querySelector('.thumbs')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')



iconClose1.addEventListener('click', () => {
    offCanvas1.style.visibility = "hidden";
    thumbs1.style.visibility = "hidden";
    previous.style.visibility = "hidden"; 
    next.style.visibility = "hidden";
    slideSection.style.visibility = "hidden";
})

thumbs.addEventListener('click', () => {
    offCanvas1.style.visibility = "visible";
    thumbs1.style.visibility = "visible";
    previous.style.visibility = "visible"; 
    next.style.visibility = "visible";
    slideSection.style.visibility = "visible";
})


iconMenu.addEventListener("click", function(){
    menu.style.visibility = "visible";
    offCanvas.style.display = "block";
})

iconClose.addEventListener("click", function(){
    menu.style.visibility = "hidden";
    offCanvas.style.display = "none";
})

const itemsAdded = document.querySelector(".item-no")
const addCart = document.querySelector(".add-btn")
const filledBasket = document.querySelector(".basket-filled")
const emptyBasket = document.querySelector(".basket-empty")
const emptyBasket2 = document.querySelector("#basket-empty2")
const iconMinus = document.querySelector(".icon-minus")
const iconPlus = document.querySelector(".icon-plus")
const bubbleDisplay = document.querySelector('.bubble')

let value = 0;
let minValue = 0;

function updateCounter(){
    itemsAdded.textContent = value;
}


iconPlus.addEventListener('click', function(){
    value++;
    updateCounter();
})

iconMinus.addEventListener('click', function(){
    if (value > minValue) {
    value--;
    updateCounter();
    }
    
})

document.addEventListener("DOMContentLoaded", function(){
    addCart.addEventListener("click", function (){
    if (value > 0 ) {
        filledBasket.style.visibility = "visible";
        bubbleDisplay.style.visibility = 'visible'

        let multiply = 125.00 * value;
        totalPrice.textContent = multiply;
        totalItem.textContent = value;
        bubbleDisplay.textContent = value;
    }
    else{
        bubbleDisplay.textContent = value;
        emptyBasket.style.visibility = "visible";
        
        setTimeout(function(){
            emptyBasket.style.visibility = 'hidden'
        }, 2000);
    }
})
})

const checkoutBtn = document.querySelector('.checkout')
checkoutBtn.addEventListener("click", function (){
    bubbleDisplay.style.visibility = 'hidden'
    filledBasket.style.visibility = "hidden";
    itemsAdded.textContent = 0;
})

const nowPrice = document.querySelector('.now-price')
const price = document.querySelector('.price2')
const totalItem = document.querySelector('.total-item')
const totalPrice = document.querySelector('.total-price')

const iconDelete = document.querySelector('.icon-delete')

iconDelete.addEventListener('click', function(){
    filledBasket.style.visibility = "hidden"
    itemsAdded.textContent = 0;
    bubbleDisplay.style.visibility = 'hidden'
    emptyBasket.style.visibility = "visible"

    setTimeout(function(){
        emptyBasket.style.visibility = 'hidden'
    }, 2000);    
})


document.addEventListener("DOMContentLoaded", function() {
const previousBtn = document.querySelector(".icon-previous")
const nextBtn = document.querySelector(".icon-next")
const slides = document.querySelector('.slides')
const thumb1 = document.querySelector('.thumb-1')
const thumb2 = document.querySelector('.thumb-2')
const thumb3 = document.querySelector('.thumb-3')
const thumb4 = document.querySelector('.thumb-4')
const slides1 = document.querySelector('.slides1')

let currentIndex = 0;

    function goToSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    slides1.style.transform = `translateX(-${index * 100}%)`;
}

    function goToSlide1(index) {
    slides1.style.transform = `translateX(-${index * 100}%)`;
}

let clicked = false;

thumb1.addEventListener('click', function() {
    if (currentIndex = 1) {
        currentIndex--;
        goToSlide1(currentIndex);
    }
})

thumb2.addEventListener('click', function() {
    if (currentIndex = 1) {
        // currentIndex++;
        goToSlide1(currentIndex);
    }
})

thumb3.addEventListener('click', function() {
    if (currentIndex = 2) {
        // currentIndex++;
        goToSlide1(currentIndex);
    }
})

thumb4.addEventListener('click', function() {
    if (currentIndex = 3) {
        // currentIndex++;
        goToSlide1(currentIndex);
    }
})

previousBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        goToSlide(currentIndex);
    }
})

nextBtn.addEventListener('click', function() {
    if (currentIndex < slides.children.length - 1) {
        currentIndex++;
        goToSlide(currentIndex);
    }
})
})


