'use strict';

{
  const POSITION = {
    left: 'slider__left',
    right: 'slider__right',
    leftOff: 'slider__left-off',
    rightOff: 'slider__right-off',
    centerOn: 'slider__center--on',
  }

  let multiItemSlider = function (selector) {
    let mainElement = document.querySelector(selector)
    let sliderItems = mainElement.querySelectorAll('.slider__item')
    let sliderControls = mainElement.querySelectorAll('.slider__button')
    let items = []

    sliderItems.forEach((i) => items.push(i));

    let transformItem = function (direction) {
      if (direction === 'right') {
        for (let slide of items) {
          switch (true) {
            case slide.classList.contains(POSITION.leftOff):
              slide.classList.remove(POSITION.leftOff)
              slide.classList.add(POSITION.left)
              break
            case slide.classList.contains(POSITION.left):
              slide.classList.remove(POSITION.left)
              slide.classList.add(POSITION.centerOn)
              break
            case slide.classList.contains(POSITION.centerOn):
              slide.classList.remove(POSITION.centerOn)
              slide.classList.add(POSITION.right)
              break
            case slide.classList.contains(POSITION.right):
              slide.classList.remove(POSITION.right)
              slide.classList.add(POSITION.rightOff)
              break
            case slide.classList.contains(POSITION.rightOff):
              slide.classList.remove(POSITION.rightOff)
              slide.classList.add(POSITION.leftOff)
              break
          }
        }
      }
      if (direction === 'left') {
        for (let slide of items) {
          switch (true) {
            case slide.classList.contains(POSITION.leftOff):
              slide.classList.remove(POSITION.leftOff)
              slide.classList.add(POSITION.rightOff)
              break
            case slide.classList.contains(POSITION.left):
              slide.classList.remove(POSITION.left)
              slide.classList.add(POSITION.leftOff)
              break
            case slide.classList.contains(POSITION.centerOn):
              slide.classList.remove(POSITION.centerOn)
              slide.classList.add(POSITION.left)
              break
            case slide.classList.contains(POSITION.right):
              slide.classList.remove(POSITION.right)
              slide.classList.add(POSITION.centerOn)
              break
            case slide.classList.contains(POSITION.rightOff):
              slide.classList.remove(POSITION.rightOff)
              slide.classList.add(POSITION.right)
              break
          }
        }
      }
    }
    let controlClick = function (e) {
      let direction = this.classList.contains('slider__link-right') ? 'right' : 'left'
      transformItem(direction)
    }

    let setUpListeners = function () {
      sliderControls.forEach(function (item) {
        item.addEventListener('click', controlClick)
      })
    }

    setUpListeners()
  }
  multiItemSlider('.main')
}
