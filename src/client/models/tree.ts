import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import * as THREE from 'three'
import {
    APPLE_TREE_SCALE,
    AUTUMN_TREE_SCALE,
    BONSAI_TREE_SCALE,
    BUSH_SNOW_SCALE,
    CHRISTMAS_TREE_SCALE,
    FALL_TREE_SCALE,
    NO_LEAF_TREE_SCALE,
    PINE_SNOW_TREE_SCALE,
    PINE_TREE_GROUP_SCALE,
    SING_TREE_SCALE,
    SNOWMAN_SCALE,
    SNOWMAN_WITH_HAT_SCALE,
    SNOW_TREE_SCALE,
    SPRING_TREE_SCALE,
    TREE_AND_ROCK_SCALE,
    TREE_ISLAND_SCALE,
} from '../constants/tree'

const gltfLoader = new GLTFLoader()
const fbxLoader = new FBXLoader()

let lowTree: THREE.Group<THREE.Object3DEventMap>
let appleTree: THREE.Group<THREE.Object3DEventMap>
let pineTreeGroup: THREE.Group<THREE.Object3DEventMap>
let treeAndRock: THREE.Group<THREE.Object3DEventMap>
let bonsaiTree: THREE.Group<THREE.Object3DEventMap>
let springTree: THREE.Group<THREE.Object3DEventMap>
let noLeafSpringTree: THREE.Group<THREE.Object3DEventMap>
let autumnTree: THREE.Group<THREE.Object3DEventMap>
let bushSnow: THREE.Group<THREE.Object3DEventMap>
let christmasTree: THREE.Group<THREE.Object3DEventMap>
let fallTree: THREE.Group<THREE.Object3DEventMap>
let pineSnowTree: THREE.Group<THREE.Object3DEventMap>
let snowMan: THREE.Group<THREE.Object3DEventMap>
let snowTree: THREE.Group<THREE.Object3DEventMap>
let snowManWithHat: THREE.Group<THREE.Object3DEventMap>
let treeIsland: THREE.Group<THREE.Object3DEventMap>

export const createBackgroundDecorationItems = async () => {
    if (!lowTree) {
        const lowTree = await fbxLoader.loadAsync('models/tree/single_tree.FBX')

        lowTree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        lowTree.scale.set(SING_TREE_SCALE, SING_TREE_SCALE, SING_TREE_SCALE)
    }

    if (!appleTree) {
        const appleTreeGLTF = await gltfLoader.loadAsync('models/tree/apple_tree.glb')
        appleTree = appleTreeGLTF.scene

        appleTree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        appleTree.scale.set(APPLE_TREE_SCALE, APPLE_TREE_SCALE, APPLE_TREE_SCALE)
        appleTree.position.y = 10
    }

    if (!pineTreeGroup) {
        const pineTreeGLTF = await gltfLoader.loadAsync('models/tree/pine_tree_group.glb')
        pineTreeGroup = pineTreeGLTF.scene

        pineTreeGroup.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        pineTreeGroup.scale.set(PINE_TREE_GROUP_SCALE, PINE_TREE_GROUP_SCALE, PINE_TREE_GROUP_SCALE)
    }

    if (!treeAndRock) {
        const treeAndRockGLTF = await gltfLoader.loadAsync('models/tree/tree_and_rock.glb')
        treeAndRock = treeAndRockGLTF.scene

        treeAndRock.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        treeAndRock.scale.set(TREE_AND_ROCK_SCALE, TREE_AND_ROCK_SCALE, TREE_AND_ROCK_SCALE)
    }

    if (!bonsaiTree) {
        const bonsaiTreeGLTF = await gltfLoader.loadAsync('models/tree/bonsai.glb')
        bonsaiTree = bonsaiTreeGLTF.scene

        bonsaiTree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        bonsaiTree.position.y = 9
        bonsaiTree.scale.set(BONSAI_TREE_SCALE, BONSAI_TREE_SCALE, BONSAI_TREE_SCALE)
    }

    if (!springTree) {
        const springTreeGLTF = await gltfLoader.loadAsync('models/tree/spring_tree.glb')
        springTree = springTreeGLTF.scene

        springTree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        springTree.scale.set(SPRING_TREE_SCALE, SPRING_TREE_SCALE, SPRING_TREE_SCALE)
    }

    if (!noLeafSpringTree) {
        const noLeafSpringTreeGLTF = await gltfLoader.loadAsync(
            'models/tree/no_leaf_spring_tree.glb'
        )
        noLeafSpringTree = noLeafSpringTreeGLTF.scene
        noLeafSpringTree.position.y = 15
        noLeafSpringTree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        noLeafSpringTree.scale.set(NO_LEAF_TREE_SCALE, NO_LEAF_TREE_SCALE, NO_LEAF_TREE_SCALE)
    }

    if (!autumnTree) {
        const autumnTreeGLTF = await gltfLoader.loadAsync('models/tree/autumn_tree.glb')
        autumnTree = autumnTreeGLTF.scene
        autumnTree.scale.set(AUTUMN_TREE_SCALE, AUTUMN_TREE_SCALE, AUTUMN_TREE_SCALE)
        autumnTree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!bushSnow) {
        const bushSnowGLTF = await gltfLoader.loadAsync('models/tree/bush_snow.glb')
        bushSnow = bushSnowGLTF.scene
        bushSnow.scale.set(BUSH_SNOW_SCALE, BUSH_SNOW_SCALE, BUSH_SNOW_SCALE)
        bushSnow.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!christmasTree) {
        const christmasTreeGLTF = await gltfLoader.loadAsync('models/tree/christmas_tree.glb')
        christmasTree = christmasTreeGLTF.scene
        christmasTree.scale.set(CHRISTMAS_TREE_SCALE, CHRISTMAS_TREE_SCALE, CHRISTMAS_TREE_SCALE)
        christmasTree.position.y = 7
        christmasTree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!fallTree) {
        const fallTreeGLTF = await gltfLoader.loadAsync('models/tree/fall_tree.glb')
        fallTree = fallTreeGLTF.scene
        fallTree.position.y = 20
        fallTree.scale.set(FALL_TREE_SCALE, FALL_TREE_SCALE, FALL_TREE_SCALE)
        fallTree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!pineSnowTree) {
        const pineSnowTreeGLTF = await gltfLoader.loadAsync('models/tree/pine_snow_tree.glb')
        pineSnowTree = pineSnowTreeGLTF.scene
        pineSnowTree.scale.set(PINE_SNOW_TREE_SCALE, PINE_SNOW_TREE_SCALE, PINE_SNOW_TREE_SCALE)
        pineSnowTree.position.y = 15
        pineSnowTree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!snowMan) {
        const snowManGLTF = await gltfLoader.loadAsync('models/tree/snow_man.glb')
        snowMan = snowManGLTF.scene
        snowMan.scale.set(SNOWMAN_SCALE, SNOWMAN_SCALE, SNOWMAN_SCALE)
        snowMan.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!snowTree) {
        const snowTreeGLTF = await gltfLoader.loadAsync('models/tree/snow_tree.glb')
        snowTree = snowTreeGLTF.scene
        snowTree.scale.set(SNOW_TREE_SCALE, SNOW_TREE_SCALE, SNOW_TREE_SCALE)
        snowTree.position.y = 15
        snowTree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!snowManWithHat) {
        const snowManWithHatGLTF = await gltfLoader.loadAsync('models/tree/snowman_with_hat.glb')
        snowManWithHat = snowManWithHatGLTF.scene
        snowManWithHat.scale.set(
            SNOWMAN_WITH_HAT_SCALE,
            SNOWMAN_WITH_HAT_SCALE,
            SNOWMAN_WITH_HAT_SCALE
        )
        snowManWithHat.position.y = 5
        snowManWithHat.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!treeIsland) {
        const treeIslandGLTF = await gltfLoader.loadAsync('models/tree/tree_island.glb')
        treeIsland = treeIslandGLTF.scene
        treeIsland.scale.set(TREE_ISLAND_SCALE, TREE_ISLAND_SCALE, TREE_ISLAND_SCALE)
        treeIsland.position.y = 2.7
        treeIsland.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    return {
        lowTree,
        appleTree,
        pineTreeGroup,
        treeAndRock,
        bonsaiTree,
        springTree,
        noLeafSpringTree,
        autumnTree,
        bushSnow,
        christmasTree,
        fallTree,
        pineSnowTree,
        snowMan,
        snowTree,
        snowManWithHat,
        treeIsland,
    }
}
