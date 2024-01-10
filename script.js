let back = document.getElementById("back");
let front = document.getElementById("front");
let text = document.getElementById("title");
let mButton = document.getElementById("mButton");
let mP = document.getElementById("mP");

text.style.bottom = '400px';

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    back.style.top = value * 0.2 + 'px';
    front.style.bottom = value * 1 + 'px';
    text.style.bottom = 400 + value * 0.3 + 'px';
    mButton.style.marginRight = value * 0.1 + 'px';
    mP.style.marginLeft = value * 0.1 + 'px';
});



 const faqButtons = document.querySelectorAll('.btn-faq');
 const answerTexts = document.querySelectorAll('.answer-text');
 
 faqButtons.forEach(function(button, index) {
   button.addEventListener('click', function() {
     const isVisible = answerTexts[index].classList.contains('show');
     
     answerTexts.forEach(function(answer) {
       answer.classList.remove('show');
     });
     
     faqButtons.forEach(function(btn) {
       btn.innerHTML = '<img src="/assets/plus.svg" alt="">';
     });
 
     if (!isVisible) {
       answerTexts[index].classList.add('show');
       button.innerHTML = '<img src="/assets/min.svg" alt="">';
     }
   });
 });
 

 var swiper = new Swiper('.swiper-container', {
  spaceBetween: 24,
  autoplay: {
    delay: 1200,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 1,
    },
  }
});
var swiper = new Swiper('.swiper-container2', {
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 1,
    },
  }
});
var swiper = new Swiper('.swiper-container3', {
  
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 1,
    },
  }
});
 
var swiper = new Swiper('.swiper-container-proof', {
  
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 1,
    },
  }
});
 