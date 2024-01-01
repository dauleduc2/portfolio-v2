import * as THREE from 'three'
import { TreeItem } from '../interfaces/tree'

export const SING_TREE_SCALE = 0.1
export const LOW_TREE_Y = -2.5

const TREE_FOR_EACH_LINE = 7
const SPACE_BETWEEN_TREES = 15
const BASE_LOCATION = 0
const SPACE_BETWEEN_TREE_LINE = 20
const SPACE_FROM_BASE = 10
const EACH_TREE_SIZE = 5
interface RenderTreeProps {
    x: number
    z: number
    numberOfTree: number
    rotation: THREE.Euler
}

const generateForwardTreeList = ({ numberOfTree, rotation, x, z }: RenderTreeProps) => {
    const treeList: TreeItem[] = []
    for (let i = 0; i < numberOfTree; i++) {
        treeList.push({
            type: 'lowTree',
            position: new THREE.Vector3(
                x,
                LOW_TREE_Y,
                z + numberOfTree + (i * SPACE_BETWEEN_TREE_LINE) / 2
            ),
            rotation: rotation,
        })
    }
    return treeList
}

const generateLeftwardTreeList = ({ numberOfTree, rotation, x, z }: RenderTreeProps) => {
    const treeList: TreeItem[] = []
    for (let i = 0; i < numberOfTree; i++) {
        treeList.push({
            type: 'lowTree',
            position: new THREE.Vector3(x + (i * SPACE_BETWEEN_TREE_LINE) / 2, LOW_TREE_Y, z),
            rotation: rotation,
        })
    }
    return treeList
}

const generateRightwardTreeList = ({ numberOfTree, rotation, x, z }: RenderTreeProps) => {
    const treeList: TreeItem[] = []
    for (let i = 0; i < numberOfTree; i++) {
        treeList.push({
            type: 'lowTree',
            position: new THREE.Vector3(x - (i * SPACE_BETWEEN_TREE_LINE) / 2, LOW_TREE_Y, z),
            rotation: rotation,
        })
    }
    return treeList
}

const generateBackwardTreeList = ({ numberOfTree, rotation, x, z }: RenderTreeProps) => {
    const treeList: TreeItem[] = []
    for (let i = 0; i < numberOfTree; i++) {
        treeList.push({
            type: 'lowTree',
            position: new THREE.Vector3(
                x,
                LOW_TREE_Y,
                z - numberOfTree - (i * SPACE_BETWEEN_TREE_LINE) / 2
            ),
            rotation: rotation,
        })
    }
    return treeList
}

const FORWARD_LEFT_TREE_LIST: TreeItem[] = generateForwardTreeList({
    numberOfTree: TREE_FOR_EACH_LINE,
    rotation: new THREE.Euler(0, Math.PI / 2, 0),
    x: BASE_LOCATION + SPACE_BETWEEN_TREES,
    z: BASE_LOCATION + SPACE_FROM_BASE,
})

const FORWARD_RIGHT_TREE_LIST: TreeItem[] = generateForwardTreeList({
    numberOfTree: TREE_FOR_EACH_LINE,
    rotation: new THREE.Euler(0, Math.PI / 2, 0),
    x: BASE_LOCATION - SPACE_BETWEEN_TREES,
    z: BASE_LOCATION + SPACE_FROM_BASE,
})

const LEFTWARD_RIGHT_TREE_LIST: TreeItem[] = generateLeftwardTreeList({
    numberOfTree: TREE_FOR_EACH_LINE,
    rotation: new THREE.Euler(0, 0, 0),
    x: BASE_LOCATION + SPACE_FROM_BASE + EACH_TREE_SIZE,
    z: BASE_LOCATION + SPACE_BETWEEN_TREES - EACH_TREE_SIZE,
})

const LEFTWARD_LEFT_TREE_LIST: TreeItem[] = generateLeftwardTreeList({
    numberOfTree: TREE_FOR_EACH_LINE,
    rotation: new THREE.Euler(0, 0, 0),
    x: BASE_LOCATION + SPACE_FROM_BASE + EACH_TREE_SIZE,
    z: BASE_LOCATION - SPACE_BETWEEN_TREES,
})

const RIGHTWARD_LEFT_TREE_LIST: TreeItem[] = generateRightwardTreeList({
    numberOfTree: TREE_FOR_EACH_LINE,
    rotation: new THREE.Euler(0, 0, 0),
    x: BASE_LOCATION - SPACE_FROM_BASE - EACH_TREE_SIZE,
    z: BASE_LOCATION + SPACE_BETWEEN_TREES - EACH_TREE_SIZE,
})

const RIGHTWARD_RIGHT_TREE_LIST: TreeItem[] = generateRightwardTreeList({
    numberOfTree: TREE_FOR_EACH_LINE,
    rotation: new THREE.Euler(0, 0, 0),
    x: BASE_LOCATION - SPACE_FROM_BASE - EACH_TREE_SIZE,
    z: BASE_LOCATION - SPACE_BETWEEN_TREES,
})

const BACKWARD_LEFT_TREE_LIST: TreeItem[] = generateBackwardTreeList({
    numberOfTree: TREE_FOR_EACH_LINE,
    rotation: new THREE.Euler(0, Math.PI / 2, 0),
    x: BASE_LOCATION + SPACE_BETWEEN_TREES,
    z: BASE_LOCATION - SPACE_FROM_BASE,
})

const BACKWARD_RIGHT_TREE_LIST: TreeItem[] = generateBackwardTreeList({
    numberOfTree: TREE_FOR_EACH_LINE,
    rotation: new THREE.Euler(0, Math.PI / 2, 0),
    x: BASE_LOCATION - SPACE_BETWEEN_TREES,
    z: BASE_LOCATION - SPACE_FROM_BASE,
})

export const TREE_LIST: TreeItem[] = [
    ...FORWARD_LEFT_TREE_LIST,
    ...FORWARD_RIGHT_TREE_LIST,
    ...LEFTWARD_RIGHT_TREE_LIST,
    ...LEFTWARD_LEFT_TREE_LIST,
    ...RIGHTWARD_RIGHT_TREE_LIST,
    ...RIGHTWARD_LEFT_TREE_LIST,
    ...BACKWARD_LEFT_TREE_LIST,
    ...BACKWARD_RIGHT_TREE_LIST,
]
