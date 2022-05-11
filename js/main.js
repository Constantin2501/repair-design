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
  
  
  
  
});

