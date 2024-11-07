import * as THREE from 'https://unpkg.com/three@0.150.1/build/three.module.js';

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
camera.position.setZ(30);

renderer.render(scene, camera);

//lage torus figer
const geometry = new THREE.TorusGeometry( 10, 3, 100, 16 );;
const material = new THREE.MeshStandardMaterial({ color: 0x6347FF});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

//legger til lys
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(30, 30, 30);

//legger til ambient light
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
