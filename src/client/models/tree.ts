import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as THREE from 'three'
import { SING_TREE_SCALE } from '../constants/tree'

const fbxLoader = new FBXLoader()
let lowTree: THREE.Group<THREE.Object3DEventMap>

export const createTreeModel = async () => {
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

    return { lowTree }
}
