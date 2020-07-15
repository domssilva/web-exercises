// textures
let earthTexture = new THREE.TextureLoader().load('./img/earth.jpg');
let moonTexture = new THREE.TextureLoader().load('./img/moon.jpg');

// geometry
let earthGeometry = new THREE.SphereGeometry( 1, 32, 32 );
let moonGeometry = new THREE.SphereGeometry( 0.5, 32, 32 );

// material
let earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
let moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });

// a mesh is an object that takes a geometry 
// and applies material to it, 
let earth = new THREE.Mesh(
  earthGeometry, 
  earthMaterial
);

let moon = new THREE.Mesh(
  moonGeometry,
  moonMaterial
);