    // console.dir(document.getElementById('main').children);
  
    let div = document.getElementById('test');
    
    let p = document.createElement('p');
    p.style.color = '#333';
    p.style.padding = '20px';
    p.style.textTransform = 'capitalize';
  
    // console.dir(p.style);
    function addSquare() {
      let square = document.createElement('div');
  
      square.style.height = '40px';
      square.style.width = '40px';
      square.style.position = 'relative';
      square.style.backgroundColor = 'purple';
  
      div.append(square);
  
      if (div.children.length > 0) {
        div.style.backgroundColor = 'green';
      }
    }
  
    function clearSquares() {
      console.dir(div);
      div.innerHTML = '';
    }