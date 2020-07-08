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

// textures
let earthTexture = new THREE.TextureLoader().load('./img/earth.jpg');
let moonTexture = new THREE.TextureLoader().load('./img/moon.jpg');

let geometry = new THREE.SphereGeometry( 1, 32, 32 );
let material = new THREE.MeshBasicMaterial({ map: earthTexture });

// a mesh is an object that takes a geometry 
// and applies material to it, 
let earth = new THREE.Mesh(
  geometry, material
);

let moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshBasicMaterial({ map: moonTexture })
);

// which we then can insert into our scene
scene.add( earth );
scene.add(moon);

moon.position.x = -2;
moon.position.y = 0;

camera.position.z = 6;
camera.position.y = 0;

console.log(earth.position.x, earth.position.y);
console.log(moon.position.x, moon.position.y);

// you must render the scene to see anything!
// infinite loop:
function animate() {
  requestAnimationFrame( animate );

  earth.rotation.y += 0.001;
  earth.rotation.z += 0.001;

  moon.rotation.y -= 0.003;
  moon.rotation.z -= 0.003;

  renderer.render( scene, camera );
}

// animation loop
animate();
