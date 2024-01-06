import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { createTextModel } from './text'
import * as THREE from 'three'
import { BIG_BILLBOARD_SCALE, SIMPLE_BILLBOARD_SCALE } from '../constants/billboard'
import { ONE_DEGREE_IN_RADIANS } from '../constants/math'
const loader = new GLTFLoader()

let billboardSimple: THREE.Group<THREE.Object3DEventMap>
let billboard: THREE.Group<THREE.Object3DEventMap>

export const createBillboardModel = async () => {
    const { createText } = await createTextModel()

    if (!billboardSimple) {
        const billboardSimpleGLTF = await loader.loadAsync('/models/billboard/billboard_simple.glb')
        billboardSimple = billboardSimpleGLTF.scene

        billboardSimple.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        billboardSimple.scale.set(
            SIMPLE_BILLBOARD_SCALE,
            SIMPLE_BILLBOARD_SCALE,
            SIMPLE_BILLBOARD_SCALE
        )
    }

    if (!billboard) {
        const billboardGLTF = await loader.loadAsync('/models/billboard/blank_billboard.glb')
        billboard = billboardGLTF.scene

        billboard.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        billboard.scale.set(BIG_BILLBOARD_SCALE, BIG_BILLBOARD_SCALE, BIG_BILLBOARD_SCALE)
    }

    const createBillboardSimple = (text: string) => {
        const cloneBillboard = billboardSimple.clone()
        const currentText = createText(text, { size: 0.04, color: 'black' })
        currentText.rotateY(ONE_DEGREE_IN_RADIANS * 150)
        currentText.position.z = 0.025
        currentText.position.x = 0.1
        currentText.position.y = 0.1
        currentText.geometry.center()
        cloneBillboard.add(currentText)

        return cloneBillboard
    }

    const createBillboard = () => {
        const cloneBillboard = billboard.clone()

        return cloneBillboard
    }

    const createBigBillboardToShowExperienceTitle = (
        company: string,
        startDate: string,
        endDate: string
    ) => {
        const cloneBillboard = billboard.clone()

        const currentText = createText(company, { size: 0.05, color: 'red', type: 'bold' })
        const dateRangeText = createText(`(${startDate} - ${endDate})`, {
            size: 0.05,
            color: 'red',
        })
        currentText.position.y = 0.23
        currentText.position.z = 0
        currentText.position.x = 0.05
        currentText.geometry.center()

        dateRangeText.position.y = -0.1
        dateRangeText.geometry.center()
        currentText.rotateY(ONE_DEGREE_IN_RADIANS * -90)

        currentText.add(dateRangeText)
        cloneBillboard.add(currentText)

        return cloneBillboard
    }

    return {
        billboardSimple: createBillboardSimple,
        bigBillboard: createBillboard,
        experienceTitleBillboard: createBigBillboardToShowExperienceTitle,
    }
}
