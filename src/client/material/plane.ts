import * as THREE from 'three'
import { OVERALL_SIZE } from '../constants'

export const addPlane = (
    scene: THREE.Scene
): THREE.Mesh<THREE.PlaneGeometry, THREE.MeshStandardMaterial, THREE.Object3DEventMap> => {
    const planeGeometry = new THREE.PlaneGeometry(OVERALL_SIZE, OVERALL_SIZE)
    const planeMaterial = new THREE.MeshStandardMaterial({ color: '#FF7F27' })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    scene.add(plane)
    plane.rotation.x = -Math.PI / 2

    return plane
}
