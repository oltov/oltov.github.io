'use strict';

(function () {
  const HEADER = document.querySelector('.header')
  const closeButton = HEADER.querySelector('.nav__button-close')
  const openButton = HEADER.querySelector('.button-menu')
  const NAV = HEADER.querySelector('.nav')
  const PAGE_OFF = document.querySelector('.page-on')
  const CLOSE_FORM = HEADER.querySelector('.form__button')
  const NAV_CALL = HEADER.querySelector('.button__any--nav')
  const FORM_HEADER = HEADER.querySelector('.form')
  const LIST_LINKS = NAV.querySelectorAll('.nav__item')

  const WIDTH_ELEM = document.documentElement.clientWidth;
  const WIDTH_DESKTOP = 1170;

  const REMOVE_ADD_CLASS = function (el, remove, add) {
    el.classList.remove(remove);
    el.classList.add(add);
  }

  const ADD_LISTENER_FOR_LINKS = function () {
    LIST_LINKS.forEach(function (it) {
      it.addEventListener('click', function () {
        REMOVE_ADD_CLASS(PAGE_OFF, 'page-off', 'page-on');
        REMOVE_ADD_CLASS(NAV, 'nav--opened', 'nav--closed');
      })
    })
  };

  const WORK_TAB_TABLET = function () {
    if (WIDTH_ELEM < WIDTH_DESKTOP) {
      openButton.addEventListener('click', function () {
        REMOVE_ADD_CLASS(PAGE_OFF, 'page-on', 'page-off');
        REMOVE_ADD_CLASS(NAV, 'nav--closed', 'nav--opened');
        ADD_LISTENER_FOR_LINKS();
        closeButton.addEventListener('click', function () {
          REMOVE_ADD_CLASS(PAGE_OFF, 'page-off', 'page-on');
          REMOVE_ADD_CLASS(NAV, 'nav--opened', 'nav--closed');
        })
        NAV_CALL.addEventListener('click', function () {
          REMOVE_ADD_CLASS(FORM_HEADER, 'form-off', 'form-on');
          REMOVE_ADD_CLASS(NAV, 'nav--on', 'nav--off');
          CLOSE_FORM.addEventListener('click', function () {
            REMOVE_ADD_CLASS(FORM_HEADER, 'form-on', 'form-off');
            REMOVE_ADD_CLASS(NAV, 'nav--off', 'nav--on');
          })
        })
      })
    }
  };

  const WORK_TAB_DESKTOP = function () {
    if (WIDTH_ELEM >= WIDTH_DESKTOP) {
      NAV_CALL.addEventListener('click', function () {
        REMOVE_ADD_CLASS(PAGE_OFF, 'page-on', 'page-off');
        REMOVE_ADD_CLASS(NAV, 'nav--on', 'nav--off');
        REMOVE_ADD_CLASS(FORM_HEADER, 'form-off', 'form-on');
        CLOSE_FORM.addEventListener('click', function () {
          REMOVE_ADD_CLASS(PAGE_OFF, 'page-off', 'page-on')
          REMOVE_ADD_CLASS(NAV, 'nav--off', 'nav--on');
          REMOVE_ADD_CLASS(FORM_HEADER, 'form-on', 'form-off');
        })
      })
    }
  };

WORK_TAB_TABLET();
WORK_TAB_DESKTOP();
})()
