import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import * as THREE from 'three'
import { STAG_STATUE_SCALE, FOX_STATUE_SCALE, HORSE_STATUE_SCALE } from '../constants/statue'

let horseStatue: THREE.Group<THREE.Object3DEventMap>
let foxStatue: THREE.Group<THREE.Object3DEventMap>
let stagStatue: THREE.Group<THREE.Object3DEventMap>
const gltfLoader = new GLTFLoader()

export const createStatue = async () => {
    if (!horseStatue) {
        const horseStatueGLTF = await gltfLoader.loadAsync('models/statue/horse.glb')
        horseStatue = horseStatueGLTF.scene

        horseStatue.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        horseStatue.scale.set(HORSE_STATUE_SCALE, HORSE_STATUE_SCALE, HORSE_STATUE_SCALE)
    }

    if (!foxStatue) {
        const foxStatueGLTF = await gltfLoader.loadAsync('models/statue/fox.glb')
        foxStatue = foxStatueGLTF.scene

        foxStatue.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        foxStatue.scale.set(FOX_STATUE_SCALE, FOX_STATUE_SCALE, FOX_STATUE_SCALE)
    }

    if (!stagStatue) {
        const stagStatueGLTF = await gltfLoader.loadAsync('models/statue/stag.glb')
        stagStatue = stagStatueGLTF.scene

        stagStatue.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        stagStatue.scale.set(STAG_STATUE_SCALE, STAG_STATUE_SCALE, STAG_STATUE_SCALE)
    }

    return {
        horseStatue,
        foxStatue,
        stagStatue,
    }
}
