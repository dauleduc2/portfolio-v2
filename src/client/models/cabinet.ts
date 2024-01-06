import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { TV_CABINET_SCALE } from '../constants/cabinet'

const loader = new GLTFLoader()

let cabinet: THREE.Group<THREE.Object3DEventMap>

export const createCabinet = async () => {
    if (!cabinet) {
        const cabinetGLTF = await loader.loadAsync('/models/cabinet/cabinet_television.glb')
        cabinet = cabinetGLTF.scene

        cabinet.traverse(function (object: any) {
            if (object.isMesh) object.castShadow = true
        })

        cabinet.scale.set(TV_CABINET_SCALE, TV_CABINET_SCALE, TV_CABINET_SCALE)
        cabinet.position.y = 0.5
    }

    const createCabinetWithText = () => {
        const cloneCabinet = cabinet.clone()

        return cloneCabinet
    }

    return { cabinet: createCabinetWithText }
}
