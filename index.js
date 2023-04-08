const draggableElement = document.getElementById('myDiv');

let startX, startY, initialX, initialY;

const onMouseDown = (e) => {

  initialX = e.clientX - startX;
  initialY = e.clientY - startY;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
};

const onMouseMove = (e) => {

  const newX = e.clientX - initialX;
  const newY = e.clientY - initialY;

  draggableElement.style.left = `${newX}px`;
  draggableElement.style.top = `${newY}px`;
};

const onMouseUp = () => {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
};

draggableElement.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  startY = e.clientY;
  draggableElement.style.cursor = 'grabbing';
  document.addEventListener('mouseup', () => {
    draggableElement.style.cursor = 'grab';
  });
  onMouseDown(e);
});