export type TreeType = 'lowTree' | 'doubleTree'

export interface TreeItem {
    type: TreeType
    position: THREE.Vector3
    rotation: THREE.Euler
}
