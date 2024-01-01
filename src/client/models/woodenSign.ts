import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { WOODEN_SIGN_SCALE } from '../constants/woodenSign'
import { createTextModel } from './text'

const loader = new GLTFLoader()

export const createWoodenSignModel = async () => {
    const { createText } = await createTextModel()
    const woodenSignGLTF = await loader.loadAsync('/models/woodenSign/wooden_sign.glb')
    const woodenSign = woodenSignGLTF.scene

    woodenSign.traverse(function (object: any) {
        if (object.isMesh) object.castShadow = true
    })

    woodenSign.scale.set(WOODEN_SIGN_SCALE, WOODEN_SIGN_SCALE, WOODEN_SIGN_SCALE)

    const createWoodenSignWithText = (text: string) => {
        const cloneWoodenSign = woodenSign.clone()

        const currentText = createText(text)

        currentText.position.set(-0.15, 1.42, 0.04)

        currentText.geometry.center()

        cloneWoodenSign.add(currentText)

        return cloneWoodenSign
    }

    return { woodenSign: createWoodenSignWithText }
}
