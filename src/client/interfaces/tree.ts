export type TreeType =
    | 'lowTree'
    | 'appleTree'
    | 'pineTreeGroup'
    | 'treeAndRock'
    | 'bonsai'
    | 'spring'
    | 'noLeafSpringTree'
    | 'autumnTree'
    | 'bushSnow'
    | 'christmasTree'
    | 'fallTree'
    | 'pineSnowTree'
    | 'snowMan'
    | 'snowTree'
    | 'snowManWithHat'
    | 'treeIsland'

export interface TreeItem {
    type: TreeType
    position: {
        x: number
        z: number
    }
    rotation?: {
        x?: number
        y?: number
        z?: number
    }
}
