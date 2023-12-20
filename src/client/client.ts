import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'
import { emoteTypes, statesTypes } from './constants'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { EmoteType, ModelActions, ModelApi, ModelsActions } from './interface'
import { handleResize, createCamera, createRenderer, createStats } from './config'
import { addCameraGUI } from './GUI/camera'
import { addPlane } from './material/plane'
import { addGridHelper } from './material/gridHelper'
import { addEmotesGUI, addStatesGUI } from './GUI/models'
const scene = new THREE.Scene()
const camera = createCamera()
const renderer = createRenderer()
const stats = createStats()
let mixer: THREE.AnimationMixer,
    actions: ModelsActions,
    activeAction: THREE.AnimationAction,
    previousAction: THREE.AnimationAction,
    face

new OrbitControls(camera, renderer.domElement)
const render = () => {
    renderer.render(scene, camera)
}

// on resize handler
handleResize(camera, renderer, render)

// light
const light = new THREE.DirectionalLight(0xffffff, 10)
scene.add(light)
light.position.set(0, 4, 0)

const lightHelper = new THREE.DirectionalLightHelper(light)
scene.add(lightHelper)

// plane
const plane = addPlane(scene)

// grid helper
const gridHelper = addGridHelper(scene)

// loader config
const loader = new GLTFLoader()
let model: THREE.Group<THREE.Object3DEventMap>
loader.load(
    './models/RobotExpressive.glb',
    function (gltf) {
        model = gltf.scene
        scene.add(model)

        createGUI(model, gltf.animations)
    },
    undefined,
    function (e) {
        console.error(e)
    }
)

// gui config
const gui = new GUI()

addCameraGUI(gui, camera)

const clock = new THREE.Clock()
const api: ModelApi = { state: 'Walking' }
function createGUI(model: THREE.Group<THREE.Object3DEventMap>, animations: THREE.AnimationClip[]) {
    mixer = new THREE.AnimationMixer(model)

    actions = {}

    for (let i = 0; i < animations.length; i++) {
        const clip = animations[i]
        const action = mixer.clipAction(clip)
        const clipName = clip.name as any
        actions[clipName] = action

        if (emoteTypes.indexOf(clipName) >= 0 || statesTypes.indexOf(clipName) >= 4) {
            action.clampWhenFinished = true
            action.loop = THREE.LoopOnce
        }
    }

    // states

    const { clipCtrl, statesFolder } = addStatesGUI(gui, api, () => {
        fadeToAction(api.state, 0.5)
    })

    // emotes
    const { emoteFolder } = addEmotesGUI(gui, api, createEmoteCallback)
    function createEmoteCallback(name: EmoteType) {
        api[name] = function () {
            fadeToAction(name, 0.2)

            mixer.addEventListener('finished', restoreState)
        }
    }

    function restoreState() {
        mixer.removeEventListener('finished', restoreState)

        fadeToAction(api.state, 0.2)
    }

    // expressions
    face = model.getObjectByName('Head_4') as any

    const expressions = Object.keys(face.morphTargetDictionary)
    const expressionFolder = gui.addFolder('Expressions')

    for (let i = 0; i < expressions.length; i++) {
        expressionFolder.add(face.morphTargetInfluences, i, 0, 1, 0.01).name(expressions[i])
    }

    activeAction = actions['Walking']
    activeAction.play()

    expressionFolder.open()
}

function fadeToAction(name: ModelActions, duration: number) {
    previousAction = activeAction
    activeAction = actions[name]

    if (previousAction !== activeAction) {
        previousAction.fadeOut(duration)
    }

    activeAction.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(duration).play()
}

function animate() {
    requestAnimationFrame(animate)
    const dt = clock.getDelta()

    if (mixer) mixer.update(dt)

    render()
    stats.update()
}

animate()
setTimeout(() => {
    fadeToAction('Death', 0.5)
}, 5000)
