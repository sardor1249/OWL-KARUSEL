// Owl Corusel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 10,
        // loop: true,
        // autoplay:true,
        // autoplayTimeout: 1000,
        margin:10,
        // autoplayHoverPause: true,
    });
  });

//   my code

let BigImg = document.querySelector('.BigImg img');
let SmallImg = document.querySelectorAll('.SmallImg img');
let title = document.querySelector('.BigImg h4');

SmallImg.forEach(img => {
    img.addEventListener('click', () => {
        title.innerHTML = img.parentElement.children[1].innerHTML;
        BigImg.setAttribute('src', img.getAttribute('src'));
    });
});