import * as THREE from 'three'

import { TREE_LIST } from '../constants/tree'
import { createBackgroundDecorationItems } from '../models/tree'

export const addTrees = async (scene: THREE.Scene) => {
    const {
        lowTree,
        appleTree,
        pineTreeGroup,
        treeAndRock,
        bonsaiTree,
        noLeafSpringTree,
        springTree,
        autumnTree,
        bushSnow,
        christmasTree,
        fallTree,
        pineSnowTree,
        snowMan,
        snowManWithHat,
        snowTree,
        treeIsland,
    } = await createBackgroundDecorationItems()

    TREE_LIST.forEach((tree) => {
        const { type, position, rotation } = tree
        let treeMesh
        switch (type) {
            case 'lowTree':
                treeMesh = lowTree.clone()
                break
            case 'appleTree':
                treeMesh = appleTree.clone()
                break
            case 'pineTreeGroup':
                treeMesh = pineTreeGroup.clone()
                break
            case 'treeAndRock':
                treeMesh = treeAndRock.clone()
                break
            case 'bonsai':
                treeMesh = bonsaiTree.clone()
                break
            case 'noLeafSpringTree':
                treeMesh = noLeafSpringTree.clone()
                break
            case 'spring':
                treeMesh = springTree.clone()
                break
            case 'autumnTree':
                treeMesh = autumnTree.clone()
                break
            case 'bushSnow':
                treeMesh = bushSnow.clone()
                break
            case 'christmasTree':
                treeMesh = christmasTree.clone()
                break
            case 'fallTree':
                treeMesh = fallTree.clone()
                break
            case 'pineSnowTree':
                treeMesh = pineSnowTree.clone()
                break
            case 'snowMan':
                treeMesh = snowMan.clone()
                break
            case 'snowManWithHat':
                treeMesh = snowManWithHat.clone()
                break
            case 'snowTree':
                treeMesh = snowTree.clone()
                break
            case 'treeIsland':
                treeMesh = treeIsland.clone()
                break

            default:
                break
        }
        if (treeMesh) {
            treeMesh.position.x = position.x
            treeMesh.position.z = position.z

            if (rotation) {
                treeMesh.rotation.x = rotation.x || 0
                treeMesh.rotation.y = rotation.y || 0
                treeMesh.rotation.z = rotation.z || 0
            }
            scene.add(treeMesh)
        }
    })
}
