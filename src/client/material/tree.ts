import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

import { TREE_LIST, SING_TREE_SCALE, DOUBLE_TREE_SCALE } from '../constants/tree'

const fbxLoader = new FBXLoader()
const objLoader = new OBJLoader()
const mtlLoader = new MTLLoader()
export const addTrees = async (scene: THREE.Scene) => {
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
