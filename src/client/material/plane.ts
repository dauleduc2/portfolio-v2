import * as THREE from 'three'
import { OVERALL_SIZE } from '../constants/config'

export const createPlane = (): THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.MeshStandardMaterial,
    THREE.Object3DEventMap
> => {
    const planeGeometry = new THREE.PlaneGeometry(OVERALL_SIZE, OVERALL_SIZE)
    const planeMaterial = new THREE.MeshStandardMaterial({ color: '#78D12F' })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -Math.PI / 2
    plane.receiveShadow = true
    return plane
}
