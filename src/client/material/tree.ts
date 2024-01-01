import * as THREE from 'three'

import { TREE_LIST } from '../constants/tree'
import { createTreeModel } from '../models/tree'

export const addTrees = async (scene: THREE.Scene) => {
    const { lowTree } = await createTreeModel()

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
