'use strict';
(function () {
  let multiItemSlider = function (selector) {
    let mainElement = document.querySelector(selector)
    let sliderWrapper = mainElement.querySelector('#slider__list')
    let sliderItems = mainElement.querySelectorAll('.slider__item')
    let sliderControls = mainElement.querySelectorAll('.slider__button')
    // let sliderControlLeft = _mainElement.querySelector('.comment__link-left');
    // let sliderControlRight = _mainElement.querySelector('.comment__link-right');
    let wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width)
    let itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width)
    let marginLeft = parseFloat(getComputedStyle(sliderItems[0]).marginLeft)
    let marginRight = parseFloat(getComputedStyle(sliderItems[0]).marginRight)
    let positionLeftItem = 0
    let transform = 0
    let step = itemWidth / wrapperWidth * 100 + ((marginLeft + marginRight) / wrapperWidth * 100)
    let items = []

    sliderItems.forEach(function (item, index) {
      items.push({ item: item, position: index, transform: 0 })
    })

    let position = {
      getMin: 0,
      getMax: items.length - 1
    }

    let transformItem = function (direction) {
      if (direction === 'right') {
        if (positionLeftItem >= position.getMax) {
          return
        }
        positionLeftItem++
        transform -= step
      }
      if (direction === 'left') {
        if (positionLeftItem <= position.getMin) {
          return
        }
        positionLeftItem--
        transform += step
      }
      sliderWrapper.style.transform = 'translateX(' + transform + '%)'
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

  multiItemSlider('.comment')
  multiItemSlider('.services')
})()
