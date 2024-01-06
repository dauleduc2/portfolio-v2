import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { STONE_FLOOR_SCALE } from '../constants/floor'

const loader = new GLTFLoader()

let stoneFloor: THREE.Group<THREE.Object3DEventMap>

export const createFloor = async () => {
    if (!stoneFloor) {
        const stoneFloorGLTF = await loader.loadAsync('/models/floor/stone_floor.glb')
        stoneFloor = stoneFloorGLTF.scene

        stoneFloor.traverse(function (object: any) {
            if (object.isMesh) object.castShadow = true
        })

        stoneFloor.scale.set(STONE_FLOOR_SCALE, STONE_FLOOR_SCALE, STONE_FLOOR_SCALE)
    }

    const createStoneFloor = () => {
        const cloneCabinet = stoneFloor.clone()

        return cloneCabinet
    }

    return { stoneFloor: createStoneFloor }
}
