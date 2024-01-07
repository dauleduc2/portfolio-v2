import * as THREE from 'three'
import { OVERALL_SIZE } from '../constants/config'

const loader = new THREE.TextureLoader()
const addBackgroundImage = async (url: string, isSky = false) => {
    const material = new THREE.MeshLambertMaterial({
        map: loader.load(url),
    })

    const geometry = new THREE.PlaneGeometry(OVERALL_SIZE, isSky ? OVERALL_SIZE : OVERALL_SIZE / 2)
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.y = isSky ? OVERALL_SIZE / 2 : OVERALL_SIZE / 4
    return mesh
}

export const addBackground = async (scene: THREE.Scene) => {
    const forwardBackground = await addBackgroundImage('/background/background.jpg')
    const backwardBackground = await addBackgroundImage('/background/background.png')
    const leftBackground = await addBackgroundImage('/background/background.png')
    const rightBackground = await addBackgroundImage('/background/background.png')
    const sky = await addBackgroundImage('/background/sky.jpg', true)

    forwardBackground.position.z = -OVERALL_SIZE / 2
    backwardBackground.position.z = OVERALL_SIZE / 2
    backwardBackground.rotation.y = Math.PI
    leftBackground.position.x = -OVERALL_SIZE / 2
    leftBackground.rotation.y = Math.PI / 2
    rightBackground.position.x = OVERALL_SIZE / 2
    rightBackground.rotation.y = -Math.PI / 2

    sky.rotateX(Math.PI / 2)

    scene.add(forwardBackground)
    scene.add(sky)
    scene.add(backwardBackground)
    scene.add(leftBackground)
    scene.add(rightBackground)
}
