import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {
    handleResize,
    createCamera,
    createRenderer,
    createStats,
    createAxesHelper,
    createLight,
} from './config'
import { createPlane } from './material/plane'
import { CharacterControls } from './model/characterControl'
import { KeyDisplay } from './utils/key'
import { addTrees } from './material/tree'
const scene = new THREE.Scene()
const camera = createCamera()
const renderer = createRenderer()
const stats = createStats()
// const axesHelper = createAxesHelper()
// scene.add(axesHelper)

new OrbitControls(camera, renderer.domElement)
const render = () => {
    renderer.render(scene, camera)
}

// on resize handler
handleResize(camera, renderer, render)

// light
const { ambientLight, dirLight } = createLight()
scene.add(ambientLight)
scene.add(dirLight)

const lightHelper = new THREE.DirectionalLightHelper(dirLight)
scene.add(lightHelper)

// plane
const plane = createPlane()
scene.add(plane)
plane.receiveShadow = true
// grid helper
// const gridHelper = createGridHelper()
// scene.add(gridHelper)

// tree
addTrees(scene)

// CONTROLS
const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.minDistance = 5
orbitControls.maxDistance = 15
orbitControls.enablePan = false
orbitControls.maxPolarAngle = Math.PI / 2 - 0.05
orbitControls.update()

// loader config
const loader = new GLTFLoader()
let characterControls: CharacterControls
loader.load(
    './models/RobotExpressive.glb',
    function (gltf) {
        const model = gltf.scene
        model.traverse(function (object: any) {
            if (object.isMesh) object.castShadow = true
        })
        scene.add(model)

        const gltfAnimations: THREE.AnimationClip[] = gltf.animations
        const mixer = new THREE.AnimationMixer(model)
        const animationsMap: Map<string, THREE.AnimationAction> = new Map()
        gltfAnimations.forEach((a: THREE.AnimationClip) => {
            animationsMap.set(a.name, mixer.clipAction(a))
        })

        characterControls = new CharacterControls(
            model,
            mixer,
            animationsMap,
            orbitControls,
            camera,
            'Idle'
        )
        model.receiveShadow = true
        model.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI)
    },
    undefined,
    function (e) {
        console.error(e)
    }
)

// CONTROL KEYS
const keysPressed: any = {}
const keyDisplayQueue = new KeyDisplay()
document.addEventListener(
    'keydown',
    (event) => {
        keyDisplayQueue.down(event.key)

        if (event.shiftKey && characterControls) {
            characterControls.setIsRunning(true)
        } else {
            keysPressed[event.key.toLowerCase()] = true
        }
    },
    false
)
document.addEventListener(
    'keyup',
    (event) => {
        keyDisplayQueue.up(event.key)

        if (!event.shiftKey && characterControls) {
            characterControls.setIsRunning(false)
        }
        keysPressed[event.key.toLowerCase()] = false
    },
    false
)

const clock = new THREE.Clock()

function animate() {
    let mixerUpdateDelta = clock.getDelta()
    if (characterControls) {
        characterControls.update(mixerUpdateDelta, keysPressed)
    }
    orbitControls.update()

    render()
    stats.update()
    requestAnimationFrame(animate)
}

animate()
