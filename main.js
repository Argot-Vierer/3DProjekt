import './style.css'
import * as THREE from 'three'

// Setup
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x0a0a1e)
scene.fog = new THREE.Fog(0x0a0a1e, 10, 100)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.z = 30

// Append canvas to the app div
document.querySelector('#app').appendChild(renderer.domElement)

// Create animated blobs
const blobs = []
const blobCount = 8

for (let i = 0; i < blobCount; i++) {
  const geometry = new THREE.SphereGeometry(
    Math.random() * 3 + 2, 
    32, 
    32
  )
  
  const material = new THREE.MeshPhongMaterial({
    color: new THREE.Color().setHSL(Math.random(), 1.0, 0.7),
    shininess: 100,
    transparent: true,
    opacity: 0.8,
    emissive: new THREE.Color().setHSL(Math.random(), 0.8, 0.3)
  })
  
  const blob = new THREE.Mesh(geometry, material)
  
  // Random position
  blob.position.x = (Math.random() - 0.5) * 50
  blob.position.y = (Math.random() - 0.5) * 50
  blob.position.z = (Math.random() - 0.5) * 50
  
  // Random velocity for movement
  blob.velocity = new THREE.Vector3(
    (Math.random() - 0.5) * 0.05,
    (Math.random() - 0.5) * 0.05,
    (Math.random() - 0.5) * 0.05
  )
  
  // Random scale animation
  blob.scaleSpeed = Math.random() * 0.02 + 0.01
  blob.scalePhase = Math.random() * Math.PI * 2
  
  scene.add(blob)
  blobs.push(blob)
}

// Lighting
const pointLight1 = new THREE.PointLight(0x00ff00, 2, 100)
pointLight1.position.set(20, 20, 20)

const pointLight2 = new THREE.PointLight(0x00ffff, 2, 100)
pointLight2.position.set(-20, -20, 20)

const pointLight3 = new THREE.PointLight(0xff00ff, 2, 100)
pointLight3.position.set(0, 20, -20)

const ambientLight = new THREE.AmbientLight(0x606060, 1)

scene.add(pointLight1, pointLight2, pointLight3, ambientLight)

// Animation loop
let time = 0
function animate() {
  requestAnimationFrame(animate)
  time += 0.01
  
  // Animate each blob
  blobs.forEach((blob, index) => {
    // Move blob
    blob.position.x += blob.velocity.x
    blob.position.y += blob.velocity.y
    blob.position.z += blob.velocity.z
    
    // Bounce off boundaries
    if (Math.abs(blob.position.x) > 25) blob.velocity.x *= -1
    if (Math.abs(blob.position.y) > 25) blob.velocity.y *= -1
    if (Math.abs(blob.position.z) > 25) blob.velocity.z *= -1
    
    // Scale animation (breathing effect)
    const scale = 1 + Math.sin(time + blob.scalePhase) * 0.3
    blob.scale.set(scale, scale, scale)
    
    // Rotate slightly
    blob.rotation.x += 0.005
    blob.rotation.y += 0.005
    
    // Color shift
    const hue = (time * 0.1 + index * 0.1) % 1
    blob.material.color.setHSL(hue, 1.0, 0.7)
    blob.material.emissive.setHSL(hue, 0.8, 0.3)
  })
  
  // Rotate lights
  pointLight1.position.x = Math.cos(time * 0.5) * 30
  pointLight1.position.z = Math.sin(time * 0.5) * 30
  
  pointLight2.position.x = Math.cos(time * 0.7 + Math.PI) * 30
  pointLight2.position.z = Math.sin(time * 0.7 + Math.PI) * 30

  renderer.render(scene, camera)
}

animate()

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
