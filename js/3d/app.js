let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let renderer = new THREE.WebGLRenderer();

renderer.setSize(
  window.innerWidth,
  window.innerHeight
);
document.body.appendChild(
  renderer.domElement
);

// which we then can insert into our scene
scene.add( earth );
earth.add( moon );

earth.position.set(0, 0, 0);
moon.position.set(-2, 0, 0);
moon.rotation.set(0, 0, Math.PI / 2);

camera.position.z = 6;
camera.position.y = 0;

console.log(earth.position.x, earth.position.y);
console.log(moon.position.x, moon.position.y);

// you must render the scene to see anything!
// infinite loop:
function animate() {
  requestAnimationFrame( animate );
  
  /*
  earth.rotation.y += 0.001;
  earth.rotation.z += 0.001;

  moon.rotation.y -= 0.003;
  moon.rotation.z -= 0.003;
  */

  //moon.rotation.y -= 0.005;

  earth.rotation.z += 0.0035;

  renderer.render( scene, camera );
}

// animation loop
animate();
