import './styles/main.css'

const container = document.querySelector('.container')
const draggable = container.querySelector('.draggable')

let isMouseHolding = false
let draggableStartDraggingCords = {
  x: 0,
  y: 0
}

draggable.addEventListener('mousedown', ({ offsetX, offsetY }) => {
  isMouseHolding = true
  draggableStartDraggingCords = {
    x: offsetX,
    y: offsetY
  }

  draggable.classList.add('grabbing')
})

document.addEventListener('mouseup', () => {
  draggable.classList.remove('grabbing')
  isMouseHolding = false
})

document.addEventListener('mousemove', (event) => {
  if(!isMouseHolding) return
  
  const { clientX, clientY } = event
  const xCord = clientX - container.offsetLeft - draggableStartDraggingCords.x
  const yCord = clientY - container.offsetTop - draggableStartDraggingCords.y
  const containerHeight = container.clientHeight - draggable.clientHeight
  const containerWidth = container.clientWidth - draggable.clientWidth

  if(xCord <= 0 && yCord <= 0) {
    draggable.style.left = 0
    draggable.style.top = 0
    return
  }

  if(xCord >= containerWidth && yCord >= containerHeight) {
    draggable.style.left = `${containerWidth}px`
    draggable.style.top = `${containerHeight}px`
    return
  }

  if(xCord >= containerWidth && yCord <= 0) {
    draggable.style.left = `${containerWidth}px`
    draggable.style.top = 0
    return
  }

  if(yCord >= containerHeight && xCord <= 0) {
    draggable.style.left = 0
    draggable.style.top = `${containerHeight}px`
    return
  }

  if(xCord >= containerWidth && yCord <= containerHeight) {
    draggable.style.left = `${containerWidth}px`
    draggable.style.top = `${yCord}px`
    return
  }


  if(yCord >= containerHeight && xCord <= containerWidth) {
    draggable.style.left = `${xCord}px`
    draggable.style.top = `${containerHeight}px`
    return
  }

  if(xCord <= 0 && yCord >= 0) {
    draggable.style.left = `${0}px`
    draggable.style.top = `${yCord}px`
    return
  }

  if(yCord <= 0 && xCord >= 0) {
    draggable.style.top = `${0}px`
    draggable.style.left = `${xCord}px`
    return
  }

  draggable.style.left = `${xCord}px`
  draggable.style.top = `${yCord}px`
})
