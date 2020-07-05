window.onload = () => {
  if (localStorage.length !== 0) {
    renderUl();
  }
}


form.addEventListener('submit', function(event) {
  event.preventDefault();
  pushNewTodo(input.value);
});

