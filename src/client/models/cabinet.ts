import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { TV_CABINET_SCALE } from '../constants/cabinet'

const loader = new GLTFLoader()

export const createCabinet = async () => {
    const cabinetGLTF = await loader.loadAsync('/models/cabinet/cabinet_television.glb')
    const cabinet = cabinetGLTF.scene

    cabinet.traverse(function (object: any) {
        if (object.isMesh) object.castShadow = true
    })

    cabinet.scale.set(TV_CABINET_SCALE, TV_CABINET_SCALE, TV_CABINET_SCALE)
    cabinet.position.y = 0.5
    const createCabinetWithText = () => {
        const cloneCabinet = cabinet.clone()

        return cloneCabinet
    }

    return { cabinet: createCabinetWithText }
}
