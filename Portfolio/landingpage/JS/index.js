jQuery(function($){
    $("input[type='tel']").mask("+7(999) 999-9999");
});

const imgLinks = [
    '../Picture/Second2.png',
    '../Picture/Second.png',
];
const delay = 5000;
let currentIndex = 0;
setInterval(function() {
    document.getElementById('image').src = imgLinks[currentIndex];
    currentIndex++;
    if(currentIndex >= imgLinks.length) {
        currentIndex = 0;
    }
}, delay);
