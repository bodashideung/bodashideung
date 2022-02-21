const menu = document.querySelector('.btn-menu');
const close = document.querySelector('.btn-close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.add('open-nav');
});

close.addEventListener('click', () => {
  nav.classList.remove('open-nav');
});

// scrool-to-top


$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  if (wScroll > $('.content-title').offset().top - 480) {
    $('.cta-to-top').addClass('pop-up');
  }

  if (wScroll < $('.content-title').offset().top) {
    $('.cta-to-top').removeClass('pop-up');
  }

  //artwork 1

  if (wScroll > $('.artwork1').offset().top - 400) {
    $('.artwork1').css({
      transform: 'translateX(0)',
    });
    $('.artwork1').addClass('pop-up');
  }
  if (wScroll < $('.artwork1').offset().top - 800) {
    $('.artwork1').css({
      transform: 'translateX(7rem)',
    });
    $('.artwork1').removeClass('pop-up');
  }

  if (wScroll > $('.artwork2').offset().top + 100) {
    $('.artwork1').css({
      transform: 'translateY(-30rem)',
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
  if (wScroll > $('.artwork3').offset().top - 50) {
    $('.artwork2').css({
      transform: 'translateX(-70rem)',
    });
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

  if (wScroll > $('.artwork4').offset().top - 300) {
    $('.artwork3').css({
      transform: 'translateY(-25rem)',
    });
  }

  //artwork 4

  if (wScroll > $('.artwork4').offset().top - 500) {
    $('.artwork4').css({
      transform: 'translateY(0)',
    });
    $('.artwork4').addClass('pop-up');
  }
  if (wScroll < $('.artwork4').offset().top - 490) {
    $('.artwork4').css({
      transform: 'translateY(7.5rem)',
    });
    $('.artwork4').removeClass('pop-up');
  }

  if (wScroll > $('.artwork5').offset().top - 80) {
    $('.artwork4').css({
      transform: 'translateX(70rem)',
    });
  }

  //artwork 5

  if (wScroll > $('.artwork5').offset().top - 490) {
    $('.artwork5').css({
      transform: 'translateY(0)',
    });
    $('.artwork5').addClass('pop-up');
  }
  if (wScroll < $('.artwork5').offset().top - 490) {
    $('.artwork5').css({
      transform: 'translateY(7.5rem)',
    });
    $('.artwork5').removeClass('pop-up');
  }

  if (wScroll > $('.artwork6').offset().top - 80) {
    $('.artwork5').css({
      transform: 'translateX(-30rem)',
    });
  }

  //artwork 6

  if (wScroll > $('.artwork6').offset().top - 490) {
    $('.artwork6').css({
      transform: 'translateY(0)',
    });
    $('.artwork6').addClass('pop-up');
  }
  if (wScroll < $('.artwork6').offset().top - 490) {
    $('.artwork6').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork6').removeClass('pop-up');
  }

  if (wScroll > $('.artwork7').offset().top - 100) {
    $('.artwork6').css({
      transform: 'translateX(60rem)',
    });
  }

  //artwork 7


  if (wScroll > $('.artwork7').offset().top - 490) {
    $('.artwork7').css({
      transform: 'translateY(0)',
    });
    $('.artwork7').addClass('pop-up');
  }
  if (wScroll < $('.artwork7').offset().top - 490) {
    $('.artwork7').css({
      transform: 'translateY(8rem)',
    });
    $('.artwork7').removeClass('pop-up');
  }
  if (wScroll > $('.artwork9').offset().top - 820) {
    $('.artwork7').css({
      transform: 'translateY(-20rem)',
    });
  }

  //artwork 8

  if (wScroll > $('.artwork8').offset().top - 490) {
    $('.artwork8').css({
      transform: 'translateY(0)',
    });
    $('.artwork8').addClass('pop-up');
  }
  if (wScroll < $('.artwork8').offset().top - 490) {
    $('.artwork8').css({
      transform: 'translateY(8rem)',
    });
    $('.artwork8').removeClass('pop-up');
  }

  if (wScroll > $('.artwork9').offset().top - 100) {
    $('.artwork8').css({
      transform: 'translateX(-60rem)',
    });
  }

  //artwork 9

  if (wScroll > $('.artwork9').offset().top - 490) {
    $('.artwork9').css({
      transform: 'translateY(0)',
    });
    $('.artwork9').addClass('pop-up');
  }
  if (wScroll < $('.artwork9').offset().top - 490) {
    $('.artwork9').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork9').removeClass('pop-up');
  }
  if (wScroll > $('.artwork10').offset().top - 70) {
    $('.artwork9').css({
      transform: 'translateX(30rem)',
    });
  }

  //artwork 10

  if (wScroll > $('.artwork10').offset().top - 490) {
    $('.artwork10').css({
      transform: 'translateY(0)',
    });
    $('.artwork10').addClass('pop-up');
  }
  if (wScroll < $('.artwork10').offset().top - 490) {
    $('.artwork10').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork10').removeClass('pop-up');
  }

  if (wScroll > $('.artwork11').offset().top - 500) {
    $('.artwork10').css({
      transform: 'translateY(-30rem)',
    });
  }

  //artwork 11

  if (wScroll > $('.artwork11').offset().top - 490) {
    $('.artwork11').css({
      transform: 'translateY(0)',
    });
    $('.artwork11').addClass('pop-up');
  }
  if (wScroll < $('.artwork11').offset().top - 490) {
    $('.artwork11').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork11').removeClass('pop-up');
  }

  if (wScroll > $('.artwork12').offset().top - 500) {
    $('.artwork11').css({
      transform: 'translateY(-30rem)',
    });
  }

  //artwork 12

  if (wScroll > $('.artwork12').offset().top - 490) {
    $('.artwork12').css({
      transform: 'translateY(0)',
    });
    $('.artwork12').addClass('pop-up');
  }
  if (wScroll < $('.artwork12').offset().top - 490) {
    $('.artwork12').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork12').removeClass('pop-up');
  }


 // min-width 1024px

  const mediaQuery = window.matchMedia('(min-width: 1024px)');

  if (mediaQuery.matches){


  if (wScroll > $('.content-title').offset().top - 480) {
    $('.cta-to-top').addClass('pop-up');
  }

  if (wScroll < $('.content-title').offset().top) {
    $('.cta-to-top').removeClass('pop-up');
  }

  //artwork 1

  if (wScroll > $('.artwork1').offset().top) {
    $('.artwork1').css({
      transform: 'translateX(0)',
    });
    $('.artwork1').addClass('pop-up');
  }
  if (wScroll < $('.artwork1').offset().top - 800) {
    $('.artwork1').css({
      transform: 'translateX(7rem)',
    });
    $('.artwork1').removeClass('pop-up');
  }

  if (wScroll > $('.artwork2').offset().top + 100) {
    $('.artwork1').css({
      transform: 'translateY(-30rem)',
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
  if (wScroll > $('.artwork3').offset().top - 400) {
    $('.artwork2').css({
      transform: 'translateX(-70rem)',
    });
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

  if (wScroll > $('.artwork4').offset().top - 500) {
    $('.artwork3').css({
      transform: 'translateY(-25rem)',
    });
  }

  //artwork 4

  if (wScroll > $('.artwork4').offset().top - 500) {
    $('.artwork4').css({
      transform: 'translateY(0)',
    });
    $('.artwork4').addClass('pop-up');
  }
  if (wScroll < $('.artwork4').offset().top - 490) {
    $('.artwork4').css({
      transform: 'translateY(7.5rem)',
    });
    $('.artwork4').removeClass('pop-up');
  }

  if (wScroll > $('.artwork6').offset().top - 500) {
    $('.artwork4').css({
      transform: 'translateX(70rem)',
    });
  }

  //artwork 5

  if (wScroll > $('.artwork5').offset().top - 490) {
    $('.artwork5').css({
      transform: 'translateY(0)',
    });
    $('.artwork5').addClass('pop-up');
  }
  if (wScroll < $('.artwork5').offset().top - 490) {
    $('.artwork5').css({
      transform: 'translateY(7.5rem)',
    });
    $('.artwork5').removeClass('pop-up');
  }

  if (wScroll > $('.artwork6').offset().top - 500) {
    $('.artwork5').css({
      transform: 'translateX(-30rem)',
    });
  }

  //artwork 6

  if (wScroll > $('.artwork6').offset().top - 490) {
    $('.artwork6').css({
      transform: 'translateY(0)',
    });
    $('.artwork6').addClass('pop-up');
  }
  if (wScroll < $('.artwork6').offset().top - 490) {
    $('.artwork6').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork6').removeClass('pop-up');
  }

  if (wScroll > $('.artwork7').offset().top - 490) {
    $('.artwork6').css({
      transform: 'translateX(60rem)',
    });
  }

  //artwork 7

  if (wScroll > $('.artwork7').offset().top - 490) {
    $('.artwork7::after').css({
      transform: 'translateY(20rem)',
    });
    $('.artwork7').addClass('pop-up');
  }

  if (wScroll > $('.artwork7').offset().top - 490) {
    $('.artwork7').css({
      transform: 'translateY(0)',
    });
    $('.artwork7').addClass('pop-up');
  }
  if (wScroll < $('.artwork7').offset().top - 490) {
    $('.artwork7').css({
      transform: 'translateY(8rem)',
    });
    $('.artwork7').removeClass('pop-up');
  }
  if (wScroll > $('.artwork9').offset().top - 820) {
    $('.artwork7').css({
      transform: 'translateY(-20rem)',
    });
  }

  //artwork 8

  if (wScroll > $('.artwork8').offset().top - 490) {
    $('.artwork8').css({
      transform: 'translateY(0)',
    });
    $('.artwork8').addClass('pop-up');
  }
  if (wScroll < $('.artwork8').offset().top - 490) {
    $('.artwork8').css({
      transform: 'translateY(8rem)',
    });
    $('.artwork8').removeClass('pop-up');
  }

  if (wScroll > $('.artwork9').offset().top - 500) {
    $('.artwork8').css({
      transform: 'translateX(-60rem)',
    });
  }

  //artwork 9

  if (wScroll > $('.artwork9').offset().top - 490) {
    $('.artwork9').css({
      transform: 'translateY(0)',
    });
    $('.artwork9').addClass('pop-up');
  }
  if (wScroll < $('.artwork9').offset().top - 490) {
    $('.artwork9').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork9').removeClass('pop-up');
  }
  if (wScroll > $('.artwork10').offset().top - 500) {
    $('.artwork9').css({
      transform: 'translateX(30rem)',
    });
  }

  //artwork 10

  if (wScroll > $('.artwork10').offset().top - 490) {
    $('.artwork10').css({
      transform: 'translateY(0)',
    });
    $('.artwork10').addClass('pop-up');
  }
  if (wScroll < $('.artwork10').offset().top - 490) {
    $('.artwork10').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork10').removeClass('pop-up');
  }

  if (wScroll > $('.artwork12').offset().top - 500) {
    $('.artwork10').css({
      transform: 'translateY(-30rem)',
    });
  }

  //artwork 11

  if (wScroll > $('.artwork11').offset().top - 490) {
    $('.artwork11').css({
      transform: 'translateY(0)',
    });
    $('.artwork11').addClass('pop-up');
  }
  if (wScroll < $('.artwork11').offset().top - 490) {
    $('.artwork11').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork11').removeClass('pop-up');
  }

  if (wScroll > $('.artwork12').offset().top - 500) {
    $('.artwork11').css({
      transform: 'translateY(-20rem)',
    });
  }

  //artwork 12

  if (wScroll > $('.artwork12').offset().top - 490) {
    $('.artwork12').css({
      transform: 'translateY(0)',
    });
    $('.artwork12').addClass('pop-up');
  }
  if (wScroll < $('.artwork12').offset().top - 490) {
    $('.artwork12').css({
      transform: 'translateY(7rem)',
    });
    $('.artwork12').removeClass('pop-up');
  }

}
});


