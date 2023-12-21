import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { EmoteType, ModelActions, ModelApi, ModelsActions } from './interface'
import { handleResize, createCamera, createRenderer, createStats, createAxesHelper } from './config'
import { addCameraGUI } from './GUI/camera'
import { createPlane } from './material/plane'
import { createGridHelper } from './material/gridHelper'
import { addEmotesGUI, addStatesGUI } from './GUI/models'
import { addMovementListeners } from './actions/moving'
import { initModel } from './material/model'
const scene = new THREE.Scene()
const camera = createCamera()
const renderer = createRenderer()
const stats = createStats()
const axesHelper = createAxesHelper()
scene.add(axesHelper)
let mixer: THREE.AnimationMixer,
    actions: ModelsActions = {},
    activeAction: THREE.AnimationAction,
    previousAction: THREE.AnimationAction | undefined,
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
const plane = createPlane()
scene.add(plane)
// grid helper
const gridHelper = createGridHelper()
// scene.add(gridHelper)
// loader config
const loader = new GLTFLoader()
let model: THREE.Group<THREE.Object3DEventMap>
loader.load(
    './models/RobotExpressive.glb',
    function (gltf) {
        model = gltf.scene

        const { rActions, rMixer } = initModel(model, gltf.animations)
        actions = rActions
        mixer = rMixer

        scene.add(model)
        addMovementListeners(model, fadeToAction)
        createGUI(model)

        activeAction = actions['Sitting']
        activeAction.play()
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
const api: ModelApi = { state: 'Idle' }
function createGUI(model: THREE.Group<THREE.Object3DEventMap>) {
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

    expressionFolder.open()
}

function fadeToAction(name: ModelActions, duration: number) {
    previousAction = activeAction
    activeAction = actions[name]

    if (previousAction !== activeAction) {
        previousAction.fadeOut(duration)
    }

    if (previousAction === activeAction) return

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
