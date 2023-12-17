import * as THREE from 'three'
import { OVERALL_SIZE } from '../constants'
export const addGridHelper = (scene: THREE.Scene): THREE.GridHelper => {
    const gridHelper = new THREE.GridHelper(OVERALL_SIZE, OVERALL_SIZE, 0x000000, 0x000000)
    scene.add(gridHelper)

    return gridHelper
}
