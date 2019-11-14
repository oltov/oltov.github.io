'use strict'

{
  const POSITION = {
    left: 'slider__left',
    right: 'slider__right',
    leftOff: 'slider__left-off',
    rightOff: 'slider__right-off',
    centerOn: 'slider__center--on',
  }

  const MULTI_ITEM_SLIDER = function (selector) {
    const MAIN_ELEMENT = document.querySelector(selector)
    const SLIDER_ITEMS = MAIN_ELEMENT.querySelectorAll('.slider__item')
    const SLIDER_CONTROL = MAIN_ELEMENT.querySelectorAll('.slider__button')
    const ITEMS = []

    SLIDER_ITEMS.forEach((i) => ITEMS.push(i))

    const transformItem = function (direction) {
      if (direction === 'right') {
        for (const SLIDE of ITEMS) {
          switch (true) {
            case SLIDE.classList.contains(POSITION.leftOff):
              SLIDE.classList.remove(POSITION.leftOff)
              SLIDE.classList.add(POSITION.left)
              break
            case SLIDE.classList.contains(POSITION.left):
              SLIDE.classList.remove(POSITION.left)
              SLIDE.classList.add(POSITION.centerOn)
              break
            case SLIDE.classList.contains(POSITION.centerOn):
              SLIDE.classList.remove(POSITION.centerOn)
              SLIDE.classList.add(POSITION.right)
              break
            case SLIDE.classList.contains(POSITION.right):
              SLIDE.classList.remove(POSITION.right)
              SLIDE.classList.add(POSITION.rightOff)
              break
            case SLIDE.classList.contains(POSITION.rightOff):
              SLIDE.classList.remove(POSITION.rightOff)
              SLIDE.classList.add(POSITION.leftOff)
              break
          }
        }
      }
      if (direction === 'left') {
        for (const SLIDE of ITEMS) {
          switch (true) {
            case SLIDE.classList.contains(POSITION.leftOff):
              SLIDE.classList.remove(POSITION.leftOff)
              SLIDE.classList.add(POSITION.rightOff)
              break
            case SLIDE.classList.contains(POSITION.left):
              SLIDE.classList.remove(POSITION.left)
              SLIDE.classList.add(POSITION.leftOff)
              break
            case SLIDE.classList.contains(POSITION.centerOn):
              SLIDE.classList.remove(POSITION.centerOn)
              SLIDE.classList.add(POSITION.left)
              break
            case SLIDE.classList.contains(POSITION.right):
              SLIDE.classList.remove(POSITION.right)
              SLIDE.classList.add(POSITION.centerOn)
              break
            case SLIDE.classList.contains(POSITION.rightOff):
              SLIDE.classList.remove(POSITION.rightOff)
              SLIDE.classList.add(POSITION.right)
              break
          }
        }
      }
    }
    const CONTROL_VALUE = function (e) {
      const DIRECTION = this.classList.contains('slider__link-right') ? 'right' : 'left'
      transformItem(DIRECTION)
    }

    const SET_UP_LISTENERS = function () {
      SLIDER_CONTROL.forEach(function (item) {
        item.addEventListener('click', CONTROL_VALUE)
      })
    }

    SET_UP_LISTENERS()
  }
  MULTI_ITEM_SLIDER('.main')
}
