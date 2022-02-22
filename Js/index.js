const openVangogh = document.querySelector('.btn-full-vangogh');
const fullVangogh = document.querySelector('.full-img1');
const hiddenVangogh = document.querySelector('.close-1');

openVangogh.addEventListener('click', () => {
  fullVangogh.classList.add('vangogh');
});
hiddenVangogh.addEventListener('click', () => {
  fullVangogh.classList.remove('vangogh');
});

const openDybala = document.querySelector('.btn-full-dybala');
const fullDybala = document.querySelector('.full-img2');
const hideDybala = document.querySelector('.close-2');

openDybala.addEventListener('click', () => {
  fullDybala.classList.add('dybala');
});
hideDybala.addEventListener('click', () => {
  fullDybala.classList.remove('dybala');
});

const openZidane = document.querySelector('.btn-full-zidane');
const fullZidane = document.querySelector('.full-img3');
const hideZidane = document.querySelector('.close-3');

openZidane.addEventListener('click', () => {
  fullZidane.classList.add('zidane');
});
hideZidane.addEventListener('click', () => {
  fullZidane.classList.remove('zidane');
});

const menu = document.querySelector('.btn-menu');
const close = document.querySelector('.btn-close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.add('open-nav');
});

close.addEventListener('click', () => {
  nav.classList.remove('open-nav');
});

// parallax

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $('.hero').css({
    transform: 'translate(0, ' + -wScroll / 45 + '%)',
  });

  $('.hero-title').css({
    transform: 'translate(0, ' + wScroll / 15 + '%)',
  });

  $('.hero-img').css({
    transform: 'translate(0, ' + -wScroll / 50 + '%)',
  });

  $('.link-icon-media').css({
   transform: 'translate('+ wScroll+ '%, 0)',
      });


  //scroll to top

  if (wScroll > $('.content-title').offset().top - 480) {
    $('.cta-to-top').addClass('pop-up');
  }

  if (wScroll < $('.content-title').offset().top - 480) {
    $('.cta-to-top').removeClass('pop-up');
  }

  //artwork tittle

  if (wScroll > $('.content-title').offset().top - 470) {
    $('.content-title h2, .content-title p').css({
      transform: 'translateX(0)',
    });
  }
  if (wScroll < $('.content-title').offset().top - 500) {
    $('.content-title h2, .content-title p').css({
      transform: 'translateX(-500px)',
    });
  }


  //artwork 1

  if (wScroll > $('.artwork1').offset().top - 450) {
    $('.artwork1').css({
      transform: 'translateY(0)',
    });
    $('.artwork1').addClass('pop-up');
  }
  if (wScroll < $('.artwork1').offset().top - 380) {
    $('.artwork1').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork1').removeClass('pop-up');
  }

  if (wScroll > $('.artwork2').offset().top - 300) {
    $('.artwork1').css({
      transform: 'translateY(-15rem)',
    });
  }

  //artwork 2

  if (wScroll > $('.artwork2').offset().top - 490) {
    $('.artwork2').css({
      transform: 'translateY(0)',
    });
    $('.artwork2').addClass('pop-up');
  }
  if (wScroll < $('.artwork2').offset().top - 490) {
    $('.artwork2').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork2').removeClass('pop-up');
  }

  //artwork 3

  if (wScroll > $('.artwork3').offset().top - 490) {
    $('.artwork3').css({
      transform: 'translateY(0)',
    });
    $('.artwork3').addClass('pop-up');
  }
  if (wScroll < $('.artwork3').offset().top - 490) {
    $('.artwork3').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork3').removeClass('pop-up');
  }


  const mediaQuerym = window.matchMedia('(min-width: 768px)');

  if (mediaQuerym.matches){
    $('.link-icon-media').css({
      transform: 'translate('+ wScroll/5+ '%,0)',
         });

    // artwork
  
  
   //artwork 1

   if (wScroll > $('.hero').offset().top) {
    $('.artwork1').css({
      transform: 'translateY(0)',
    });
    $('.artwork1').addClass('pop-up');
   }
    // if (wScroll < $('.artwork1').offset().top - 380) {
    // $('.artwork1').css({
    //   transform: 'translateY(7rem)',
    // });
    // $('.artwork1').removeClass('pop-up');
    // }

    // if (wScroll > $('.artwork2').offset().top - 320) {
    //   $('.artwork1').css({
    //     transform: 'translateY(-15rem)',
    //   });
    // }

    //artwork 2

    if (wScroll > $('.hero').offset().top) {
    $('.artwork2').css({
      transform: 'translateY(0)',
    });
    $('.artwork2').addClass('pop-up');
    }
    // if (wScroll < $('.artwork2').offset().top - 490) {
    // $('.artwork2').css({
    //   transform: 'translateY(7rem)',
    // });
    // $('.artwork2').removeClass('pop-up');
    // }

    //artwork 3

    if (wScroll > $('.hero').offset().top) {
    $('.artwork3').css({
      transform: 'translateY(0)',
    });
    $('.artwork3').addClass('pop-up');
    }
  }

  const mediaQuery = window.matchMedia('(min-width: 1024px)');

  if (mediaQuery.matches){
    $('.link-icon-media').css({
      transform: 'translate('+ -wScroll/5+ '%,0)',
         });

  }


});
