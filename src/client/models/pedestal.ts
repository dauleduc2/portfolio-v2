import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import * as THREE from 'three'
import { PEDESTAL_SCALE } from '../constants/pedestal'

let pedestal: THREE.Group<THREE.Object3DEventMap>

const gltfLoader = new GLTFLoader()

export const createPedestalModel = async () => {
    if (!pedestal) {
        const pedestalGLTF = await gltfLoader.loadAsync('models/pedestal/pedestal.glb')
        pedestal = pedestalGLTF.scene
        pedestal.scale.set(PEDESTAL_SCALE, PEDESTAL_SCALE, PEDESTAL_SCALE)
        pedestal.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    const createPedestal = () => {
        const clonePedestal = pedestal.clone()

        return clonePedestal
    }

    return { pedestal: createPedestal }
}
