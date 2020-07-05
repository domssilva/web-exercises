const form = document.querySelector('form');
const input = document.querySelector('input');
const resetStorage = document.querySelector('#reset');
const logStorage = document.querySelector('#show');
const ul = document.querySelector('.list');

let resetLocalStorage,
    getStorage,
    pushNewTodo,
    renderLi,
    strikeTodo,
    currentStorage,
    renderUl,
    updateLocalStorage,
    checkedTodo,
    delTodo;

pushNewTodo = function(todo) {
  if (localStorage.length === 0) {
    // if 'todo' doesnt exist in
    // our localStorage; create localStorage.todo
    localStorage['todo'] = '[]';
  }
  // parse it to json
  currentStorage = JSON.parse(localStorage.todo);
  
  // don't allow duplicates
  if (currentStorage.indexOf(todo) === -1 && todo !== "") {
    // push user input to this array
    currentStorage.push(todo);
    // render new list item
    renderLi(todo);
  }
  
  updateLocalStorage(currentStorage);
}

resetLocalStorage = function() {
  console.log('local storage cleared');
  ul.innerText = '';
  localStorage.clear();
  location.reload();
};

updateLocalStorage = function(array) {
  localStorage.todo = JSON.stringify(array);
  // re-render todo
  renderUl();
}

renderUl = function() {
  currentStorage = JSON.parse(localStorage.todo);
  ul.innerText = '';

  currentStorage.map(todo => renderLi(todo));
}

getStorage = function() {
  return localStorage.todo === undefined ? 'todo list is empty' : JSON.parse(localStorage.todo);
}

renderLi = function(todo) {
  let li = document.createElement('li');
  
  li.addEventListener('click', () => strikeTodo(li));
  li.innerHTML = `<span>${todo}</span><div onclick="delTodo()" class="delete del-${todo}"></div>`;
  ul.append(li);
}

delTodo = function(todo, key='todo') {
  let btn = event.srcElement;
  let todoIdx = 0;
  currentStorage = JSON.parse(localStorage[key]);

  // iterate over localstorage and remove todo
  for (let i = 0; i < currentStorage.length; i++) {
    if (currentStorage[i] === todo) {
      todoIdx = i;
    }
  }

  currentStorage = currentStorage.filter(todo => todo !== currentStorage[todoIdx]);

  // update localStorage with new filtered array
  updateLocalStorage(currentStorage);
}


strikeTodo = function(li) {
  // add or remove strike
  
  li.classList[0] === undefined ?
  li.classList.add('done') :
  li.classList.remove('done');
}

resetStorage.addEventListener('click', resetLocalStorage);
