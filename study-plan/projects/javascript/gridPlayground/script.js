const body = document.querySelector('body');
const header = document.querySelector('header');
const navUl = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');
const form = document.querySelector('form');
const fieldsets = document.querySelectorAll('fieldset');
const gridContainer = document.querySelector('section.grid-container');
const gridContainerWidthInput = document.querySelector('#grid-container-width');
const gridContainerHeightInput = document.querySelector('#grid-container-height');
const updateGridSizeBtn = document.querySelector('input#update-grid-btn');
const btnContainer = document.querySelector('.btn-container');
const addBtn = document.querySelector('#add-box-btn');
const clearBoxesBtn = document.querySelector('#clear-boxes-btn');

const colors = {
  lightBlue: '#68cef9',
  blue: '#0b84ed',
  white: '#fff',
  gray: '#222',
};

let colorIdx = 0;
let boxClassCounter = 1;

// Body style
body.style.margin = 0;
body.style.padding = 0;
body.style.fontSize = '16px';
body.style.backgroundColor = colors.gray;

// Nav Style
header.style.textAlign = 'center';
header.style.color = colors.white;
navUl.style.listStyle = 'none';
navLinks.forEach(a => {
  styleLink(a);
  
  a.onmouseover = () => {
    styleLinkHover(a);
  }
  
  a.onmouseout = () => {
    styleLink(a);
  }
});

// Grid Container style
gridContainer.style.width = '600px';
gridContainer.style.height = '350px';
gridContainer.style.margin = '50px auto';
gridContainer.style.border = `2px solid ${colors.blue}`;

// form styling
gridContainerWidthInput.style.width = '100px';
gridContainerHeightInput.style.width = '100px';
fieldsets.forEach(fieldset => {
  fieldset.style.border = 'none';
});

// Btn spacing
btnContainer.style.display = 'flex';
btnContainer.style.flexDirection = 'column';
btnContainer.style.alignItems = 'center';
addBtn.style.marginBottom = '10px';

// Match button styling
[addBtn, updateGridSizeBtn, clearBoxesBtn].forEach(btn => {
  styleButton(btn);
  
  btn.onmouseover = () => {
    styleButtonHover(btn);
  }
  
  btn.onmouseout = () => {
    styleButton(btn);
  }
});

// Events
addBtn.addEventListener('click', appendBox);
clearBoxesBtn.addEventListener('click', clearBoxes);
form.addEventListener('submit', updateGridContainerWidthAndHeight);

// Functions
function styleLink(a) {
  a.style.textDecoration = 'none';
  a.style.color = colors.blue;
  a.style.fontSize = '1.2rem';
  a.style.textTransform = 'capitalize';
}

function styleLinkHover(a) {
  a.style.color = colors.lightBlue;
}

function styleButton(btn) {
  btn.style.width = '270px';
  btn.style.border = 'none';
  btn.style.padding = '10px';
  btn.style.cursor = 'pointer';
  btn.style.borderRadius = '5px';
  btn.style.color = colors.white;
  btn.style.backgroundColor = colors.blue;
}

function styleButtonHover(btn) {
  btn.style.color = 'black';
  btn.style.backgroundColor = colors.lightBlue;
}

function appendBox() {
  const colors = [
    '#ed4240', 
    '#40d6ed', 
    '#42ce65', 
    '#d36d19', 
    '#6b23c4', 
    '#0a3b60', 
    '#993716',
  ];
  
  if (colorIdx >= colors.length) {
      colorIdx = 0;
  }
  
  // create div
  let box = gridContainer.appendChild(
    document.createElement('div')
  );
  
  box.style.backgroundColor = colors[colorIdx]
  box.classList.add('box');
  
  boxClassCounter = getBoxIndexClass();
  box.classList.add(`box-${boxClassCounter}`);
  
  colorIdx++;
}

function updateGridContainerWidthAndHeight(event) {
  event.preventDefault();
  let width = gridContainerWidthInput.value;
  let height = gridContainerHeightInput.value;
  
  if (width === '') {
    width = 600;
  }
  
  if (height === '') {
    height = 350;
  }
  
  gridContainer.style.width = `${width}px`;
  gridContainer.style.height = `${height}px`;
  
}

function getBoxIndexClass() {
  /* 
     check how many boxes are inside .grid-container so that
     boxClassCounter gets the right value to set the right 
     class box-n.
  */
  let boxesNo = document.querySelectorAll('.grid-container .box').length;
  return boxesNo;
}

function clearBoxes() {
  
  // Reset colors idx
  colorIdx = 0;
  
  // Reset .box-n class counter
  boxClassCounter = 1;
  
  // Actually remove all boxes inside .grid-container
  while (gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
}