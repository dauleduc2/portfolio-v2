import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { WOODEN_SIGN_SCALE } from '../constants/woodenSign'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import * as THREE from 'three'
const loader = new GLTFLoader()
const fontLoader = new FontLoader()

const createWoodenSignModel = async () => {
    const woodenSignGLTF = await loader.loadAsync('/models/woodenSign/wooden_sign.glb')
    const woodenSign = woodenSignGLTF.scene

    woodenSign.traverse(function (object: any) {
        if (object.isMesh) object.castShadow = true
    })

    woodenSign.scale.set(WOODEN_SIGN_SCALE, WOODEN_SIGN_SCALE, WOODEN_SIGN_SCALE)

    // add text to billboard
    const font = await fontLoader.loadAsync('fonts/helvetiker_regular.typeface.json')

    const createWoodenSignWithText = (text: string) => {
        const cloneWoodenSign = woodenSign.clone()
        const textGeometry = new TextGeometry(text, {
            font: font,
            size: 0.1,
            height: 0.01,
        })

        const textMaterial = new THREE.MeshStandardMaterial({
            color: 'white',
        })

        const textMesh = new THREE.Mesh(textGeometry, textMaterial)

        textMesh.position.set(-0.15, 1.42, 0.04)

        textMesh.geometry.center()

        cloneWoodenSign.add(textMesh)

        return cloneWoodenSign
    }

    return { woodenSign: createWoodenSignWithText }
}

export const createWoodenSign = async (scene: THREE.Scene) => {
    const { woodenSign } = await createWoodenSignModel()
    const educationWoodenSign = woodenSign('Education')
    const experienceWoodenSign = woodenSign('Experience')
    const certificateWoodenSign = woodenSign('Certificate')
    const introductionWoodenSign = woodenSign('Introduction')

    educationWoodenSign.position.set(-14, 0, -11)

    experienceWoodenSign.position.set(15, 0, 7)
    experienceWoodenSign.rotation.y = Math.PI

    certificateWoodenSign.position.set(-10, 0, 12)
    certificateWoodenSign.rotation.y = Math.PI / 2

    introductionWoodenSign.position.set(11, 0, -14)
    introductionWoodenSign.rotation.y = -Math.PI / 2

    scene.add(educationWoodenSign)
    scene.add(experienceWoodenSign)
    scene.add(certificateWoodenSign)
    scene.add(introductionWoodenSign)
}
