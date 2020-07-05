const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

/*
  Drag Events:
    drag
    dragstart
    dragend
    dragenter
    dragover
    dragleave
    drop
    ...
*/

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
});

function dragstart() {
  // console.log('> CARD: start drag');
  dropzones.forEach(zone => zone.classList.add('hightlight'));
  
  this.classList.add('is-dragging');
}

function drag() {
  // console.log('> CARD: drag');
}

function dragend() {
  // console.log('> CARD: dragend');
  dropzones.forEach(zone => zone.classList.remove('hightlight'));
  this.classList.remove('is-dragging');
}

dropzones.forEach(zone => {
  zone.addEventListener('dragover', dragover);
  zone.addEventListener('dragleave', dragleave);
});

function dragover() {
  this.classList.add('over');

  const cardBeingDragged = document.querySelector('.is-dragging');
  this.appendChild(cardBeingDragged);
}

function dragleave() {
  this.classList.remove('over');
}