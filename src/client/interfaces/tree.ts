export type TreeType =
    | 'lowTree'
    | 'appleTree'
    | 'pineTreeGroup'
    | 'treeAndRock'
    | 'spring'
    | 'noLeafSpringTree'
    | 'autumnTree'
    | 'bushSnow'
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
