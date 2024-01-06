import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { STONE_WALL_SCALE, WOODEN_WALL_SCALE } from '../constants/woodenWall'
import * as THREE from 'three'
const loader = new GLTFLoader()

let woodenSign: THREE.Group<THREE.Object3DEventMap>
let brickWall: THREE.Group<THREE.Object3DEventMap>
let stoneWall: THREE.Group<THREE.Object3DEventMap>

export const createWallModel = async () => {
    if (!woodenSign) {
        const woodenSignGLTF = await loader.loadAsync('/models/wall/wooden_wall.glb')
        woodenSign = woodenSignGLTF.scene
        woodenSign.scale.set(WOODEN_WALL_SCALE + 2, WOODEN_WALL_SCALE, WOODEN_WALL_SCALE)
        woodenSign.position.y = -0.35

        woodenSign.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!brickWall) {
        const brickWallGLTF = await loader.loadAsync('/models/wall/brick_wall.glb')
        brickWall = brickWallGLTF.scene

        brickWall.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!stoneWall) {
        const stoneWallGLTF = await loader.loadAsync('/models/wall/stone_wall.glb')
        stoneWall = stoneWallGLTF.scene
        stoneWall.scale.set(STONE_WALL_SCALE + 7, STONE_WALL_SCALE + 1, STONE_WALL_SCALE)

        stoneWall.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    const createWoodenSign = () => {
        const cloneWoodenSign = woodenSign.clone()

        return cloneWoodenSign
    }

    const createBrickWall = () => {
        const cloneBrickWall = brickWall.clone()

        return cloneBrickWall
    }

    const createStoneWall = () => {
        const cloneStoneWall = stoneWall.clone()

        return cloneStoneWall
    }

    return { woodenWall: createWoodenSign, brickWall: createBrickWall, stoneWall: createStoneWall }
}
