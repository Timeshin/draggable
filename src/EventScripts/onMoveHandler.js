const onMoveHandler = (event, element, container, cords) => {
  let clientX, clientY

  if(event.touches) {
    clientX = event.touches[0].clientX
    clientY = event.touches[0].clientY
  } else {
    clientX = event.clientX
    clientY = event.clientY
  }

  const xCord = clientX - container.offsetLeft - cords.x
  const yCord = clientY - container.offsetTop - cords.y
  const containerHeight = container.clientHeight - element.clientHeight
  const containerWidth = container.clientWidth - element.clientWidth

  if(xCord <= 0 && yCord <= 0) {
    element.style.left = 0
    element.style.top = 0
    return
  }

  if(xCord >= containerWidth && yCord >= containerHeight) {
    element.style.left = `${containerWidth}px`
    element.style.top = `${containerHeight}px`
    return
  }

  if(xCord >= containerWidth && yCord <= 0) {
    element.style.left = `${containerWidth}px`
    element.style.top = 0
    return
  }

  if(yCord >= containerHeight && xCord <= 0) {
    element.style.left = 0
    element.style.top = `${containerHeight}px`
    return
  }

  if(xCord >= containerWidth && yCord <= containerHeight) {
    element.style.left = `${containerWidth}px`
    element.style.top = `${yCord}px`
    return
  }


  if(yCord >= containerHeight && xCord <= containerWidth) {
    element.style.left = `${xCord}px`
    element.style.top = `${containerHeight}px`
    return
  }

  if(xCord <= 0 && yCord >= 0) {
    element.style.left = `${0}px`
    element.style.top = `${yCord}px`
    return
  }

  if(yCord <= 0 && xCord >= 0) {
    element.style.top = `${0}px`
    element.style.left = `${xCord}px`
    return
  }

  element.style.left = `${xCord}px`
  element.style.top = `${yCord}px`
}


export default onMoveHandler
