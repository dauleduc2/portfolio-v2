import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as THREE from 'three'
import { SING_TREE_SCALE } from '../constants/tree'

const fbxLoader = new FBXLoader()

export const createTreeModel = async () => {
    const lowTree = await fbxLoader.loadAsync('models/tree/single_tree.FBX')

    new Array(lowTree).forEach((tree) => {
        tree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    })

    lowTree.scale.set(SING_TREE_SCALE, SING_TREE_SCALE, SING_TREE_SCALE)

    return { lowTree }
}
