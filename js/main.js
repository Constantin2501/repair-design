/*
document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);


});
*/

$(document).ready( () => {
  let modal = $('.modal'),
  modalDialog = $('.modal__dialog'),
  modalBtn = $('[data-toggle=modal]'),
  closeBtn = $('.modal__close');

  modalBtn.on('click', () =>  {
    modal.toggleClass('modal--visible');
  });
  // вызов модалки кликом по кнопкам с арибутом 'data-toggle=modal' 

  closeBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });
  // закрытие модалки кликом по кнопке close с классом 'modal__close'

  $(document).on('keydown', (e) => {
    if  (e.keyCode === 27){
          modal.removeClass('modal--visible');}
  });
  // закрытие модалке клавишей esc

  $(document).mouseup( (e) => { 
    if ( !modalDialog.is(e.target) && modalDialog.has(e.target).length === 0) {
      modal.removeClass('modal--visible');
    }
  });
  // закрытие модалки кликом вне области модального окна


  $(document).scroll( () => {
    let y = $(this).scrollTop();
    if (y > 800) {
      $('.hero__scroll-up').fadeIn();
    } else {
      $('.hero__scroll-up').fadeOut();
    }
  });
  // появление кнопки "наверх" при прокрутке
  
  $('.hero__scroll-up').click( () => {
    $('body,html').animate({scrollTop:0},800);
    return false;
  });
  // анимация плавной прокрутки наверх при нажатии кнопки "наверх"

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  // слайдер


  let next = $('.swiper-button-next');
  let prev = $('.swiper-button-prev');
  let bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)
  
  let nextSteps = $('.swiper-button-next-steps');
  let prevSteps = $('.swiper-button-prev-steps');
  let bulletsSteps = $('.swiper-pagination-steps');

  nextSteps.css('left', prevSteps.width() + 10 + bulletsSteps.width() + 10)
  bulletss.css('left', prevSteps.width() + 10)

  
  
});

