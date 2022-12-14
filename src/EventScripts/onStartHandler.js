const onStartHandler = (event, element) => {
  let offsetX, offsetY
  const rect = event.target.getBoundingClientRect()
  
  if(event.touches) {
    offsetX = event.touches[0].clientX - window.pageXOffset - rect.left
    offsetY = event.touches[0].clientY - window.pageYOffset - rect.top
  } else {
    offsetX = event.offsetX
    offsetY = event.offsetY
  }

  const cords = {
    x: offsetX,
    y: offsetY
  }

  element.classList.add('grabbing')

  return {
    cords
  }
}

export default onStartHandler
