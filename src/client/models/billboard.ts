import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { createTextModel } from './text'
import * as THREE from 'three'
import { SIMPLE_BILLBOARD_SCALE } from '../constants/billboard'
import { ONE_DEGREE_IN_RADIANS } from '../constants/math'
const loader = new GLTFLoader()

export const createBillboardModel = async () => {
    const { createText } = await createTextModel()
    const billboardSimpleGLTF = await loader.loadAsync('/models/billboard/billboard_simple.glb')
    const billboardGLTF = await loader.loadAsync('/models/billboard/billboard_big.glb')
    const billboardSimple = billboardSimpleGLTF.scene
    const billboard = billboardGLTF.scene

    new Array(billboardSimple, billboard).forEach((billboard) => {
        billboard.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    })

    billboardSimple.scale.set(
        SIMPLE_BILLBOARD_SCALE,
        SIMPLE_BILLBOARD_SCALE,
        SIMPLE_BILLBOARD_SCALE
    )
    billboardSimple.position.y = 0.5

    const createBillboardSimple = (text: string) => {
        const cloneBillboard = billboardSimple.clone()
        const currentText = createText(text, { size: 0.04, color: 'black' })
        currentText.rotateY(ONE_DEGREE_IN_RADIANS * 150)
        currentText.position.z = 0.04
        currentText.position.x = 0.1
        currentText.position.y = 0.1
        cloneBillboard.add(currentText)

        return cloneBillboard
    }

    const createBillboard = (text: string) => {
        const cloneBillboard = billboard.clone()

        const currentText = createText(text)

        cloneBillboard.add(currentText)

        return cloneBillboard
    }

    return { billboardSimple: createBillboardSimple }
}
