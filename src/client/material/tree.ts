import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { TREE_LIST, TREE_SCALE } from '../constants/tree'

const fbxLoader = new FBXLoader()

export const addTrees = async (scene: THREE.Scene) => {
    const lowTree = await fbxLoader.loadAsync('models/tree/Tree low.FBX')
    lowTree.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.castShadow = true
            child.receiveShadow = true
        }
    })
    lowTree.scale.set(TREE_SCALE, TREE_SCALE, TREE_SCALE)
    TREE_LIST.forEach((tree) => {
        const { type, position, rotation } = tree
        let treeMesh
        switch (type) {
            case 'lowTree':
                treeMesh = lowTree.clone()

                break
            default:
                break
        }
        if (treeMesh) {
            treeMesh.position.set(position.x, position.y, position.z)
            treeMesh.rotation.set(rotation.x, rotation.y, rotation.z)
            scene.add(treeMesh)
        }
    })
}
