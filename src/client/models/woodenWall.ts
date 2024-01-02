import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { WOODEN_WALL_SCALE } from '../constants/woodenWall'

const loader = new GLTFLoader()

export const createWoodenWallModel = async () => {
    const woodenSignGLTF = await loader.loadAsync('/models/wall/wooden_wall.glb')
    const woodenSign = woodenSignGLTF.scene

    woodenSign.traverse(function (object: any) {
        if (object.isMesh) object.castShadow = true
    })

    woodenSign.scale.set(WOODEN_WALL_SCALE + 2, WOODEN_WALL_SCALE, WOODEN_WALL_SCALE)
    woodenSign.position.y = -0.35
    const createWoodenSignWithText = () => {
        const cloneWoodenSign = woodenSign.clone()

        return cloneWoodenSign
    }

    return { woodenWall: createWoodenSignWithText }
}
