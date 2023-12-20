import * as THREE from 'three'
import { OVERALL_SIZE } from '../constants'

export const createPlane = (): THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
> => {
    const planeGeometry = new THREE.PlaneGeometry(OVERALL_SIZE, OVERALL_SIZE)
    const planeMaterial = new THREE.MeshBasicMaterial({ color: '#4995FD' })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -Math.PI / 2

    return plane
}
