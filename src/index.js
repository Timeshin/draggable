import onMoveHandler from './EventScripts/onMoveHandler'
import onStartHandler from './EventScripts/onStartHandler'

import './styles/main.css'

const container = document.querySelector('.container')
const draggable = container.querySelector('.draggable')

let isMouseHolding = false
let draggableStartDraggingCords = {
  x: 0,
  y: 0
}

draggable.addEventListener('mousedown', (event) => {
  const { cords } = onStartHandler(event, draggable)

  isMouseHolding = true
  draggableStartDraggingCords = cords
})
draggable.addEventListener('touchstart', (event) => {
  event.preventDefault()

  const { cords } = onStartHandler(event, draggable)

  isMouseHolding = true
  draggableStartDraggingCords = cords
})

document.addEventListener('mouseup', () => {
  draggable.classList.remove('grabbing')
  isMouseHolding = false
})
draggable.addEventListener('touchend', (event) => {
  event.preventDefault()

  draggable.classList.remove('grabbing')
  isMouseHolding = false
})

document.addEventListener('mousemove', (event) => {
  if(!isMouseHolding) return
  
  onMoveHandler(event, draggable, container, draggableStartDraggingCords)
})
draggable.addEventListener('touchmove', (event) => {
  event.preventDefault()

  if(!isMouseHolding) return

  onMoveHandler(event, draggable, container, draggableStartDraggingCords)
})
