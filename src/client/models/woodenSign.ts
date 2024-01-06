import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { WOODEN_SIGN_CENTER_SCALE, WOODEN_SIGN_SCALE } from '../constants/woodenSign'
import { createTextModel } from './text'
import * as THREE from 'three'
const loader = new GLTFLoader()

let woodenSign: THREE.Group<THREE.Object3DEventMap>
let woodenSignCenter: THREE.Group<THREE.Object3DEventMap>

export const createWoodenSignModel = async () => {
    const { createText } = await createTextModel()

    if (!woodenSign) {
        const woodenSignGLTF = await loader.loadAsync('/models/woodenSign/wooden_sign.glb')
        woodenSign = woodenSignGLTF.scene

        woodenSign.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        woodenSign.scale.set(WOODEN_SIGN_SCALE, WOODEN_SIGN_SCALE, WOODEN_SIGN_SCALE)
    }

    if (!woodenSignCenter) {
        const woodenSignCenterGLTF = await loader.loadAsync(
            '/models/woodenSign/wooden_sign_center.glb'
        )
        woodenSignCenter = woodenSignCenterGLTF.scene

        woodenSignCenter.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        woodenSignCenter.scale.set(
            WOODEN_SIGN_CENTER_SCALE,
            WOODEN_SIGN_CENTER_SCALE,
            WOODEN_SIGN_CENTER_SCALE
        )
    }

    const createWoodenSignWithText = (text: string) => {
        const cloneWoodenSign = woodenSign.clone()

        const currentText = createText(text, { type: 'bold', size: 0.07 })

        currentText.position.set(-0.15, 1.42, 0.04)

        currentText.geometry.center()

        cloneWoodenSign.add(currentText)

        return cloneWoodenSign
    }

    const woodenSignCenterWithText = (text: string) => {
        const cloneWoodenSignCenter = woodenSignCenter.clone()

        const currentText = createText(text, { type: 'bold' })

        currentText.position.set(0, 1.26, 0.04)

        currentText.geometry.center()

        cloneWoodenSignCenter.add(currentText)

        const anotherSideText = currentText.clone()
        anotherSideText.rotateY(THREE.MathUtils.degToRad(180))
        anotherSideText.position.z = -0.04

        cloneWoodenSignCenter.add(anotherSideText)
        return cloneWoodenSignCenter
    }

    return { woodenSign: createWoodenSignWithText, woodenSignCenter: woodenSignCenterWithText }
}
