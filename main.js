import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


//Oppretter en scene
const scene = new THREE.Scene();



//kamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);



//lager canvas og renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

//kamera greier
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
camera.lookAt( 0, 0, 0 );
//controls.update();

renderer.render(scene, camera);
const controls = new OrbitControls(camera,renderer.domElement);


//lage torus figer
const geometry = new THREE.TorusGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshStandardMaterial({ color: 0x6347FF});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

//legger til lys
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(30, 30, 30);

//legger til ambient light
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const size = 100;
const divisions = 50;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );


//controls.update();

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();

    torus.rotation.x += 0.01; // Adjust these values for desired rotation speed
    torus.rotation.y += 0.005;
    torus.rotation.z -= 0.01;
}

animate();
