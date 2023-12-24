import * as THREE from 'three'
import { OVERALL_SIZE } from '../constants/config'
export const createGridHelper = (): THREE.GridHelper => {
    const gridHelper = new THREE.GridHelper(OVERALL_SIZE, OVERALL_SIZE, 0x000000, 0x000000)

    return gridHelper
}
