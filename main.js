import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js';

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

//lager rutenett, kan ikke se så bra på svart bakgrunn
const lightHelper = new THREE.PointLightHelper(pointLight, 5);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

//torusen snurrer
function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;


    renderer.render(scene, camera);
}

animate();
