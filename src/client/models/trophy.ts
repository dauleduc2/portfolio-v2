import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import * as THREE from 'three'
import { createPedestalModel } from './pedestal'

let starTrophy: THREE.Group<THREE.Object3DEventMap>
let trophy1: THREE.Group<THREE.Object3DEventMap>
let trophy2: THREE.Group<THREE.Object3DEventMap>

const gltfLoader = new GLTFLoader()

export const createTrophyModel = async () => {
    const { pedestal } = await createPedestalModel()
    const pedestalModel = pedestal()
    if (!starTrophy) {
        const starTrophyGLTF = await gltfLoader.loadAsync('models/trophy/star_trophy.glb')
        starTrophy = starTrophyGLTF.scene

        starTrophy.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!trophy1) {
        const trophy1GLTF = await gltfLoader.loadAsync('models/trophy/trophy1.glb')
        trophy1 = trophy1GLTF.scene

        trophy1.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    if (!trophy2) {
        const trophy2GLTF = await gltfLoader.loadAsync('models/trophy/trophy2.glb')
        trophy2 = trophy2GLTF.scene

        trophy2.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    const createStarTrophy = () => {
        const trophyGroup = new THREE.Group()
        const cloneStarTrophy = starTrophy.clone()
        const clonePedestal = pedestalModel.clone()

        clonePedestal.scale.set(5, 5, 5)
        cloneStarTrophy.scale.set(30, 30, 30)

        cloneStarTrophy.position.y = 17
        cloneStarTrophy.rotateY(THREE.MathUtils.degToRad(90))

        trophyGroup.add(cloneStarTrophy)
        trophyGroup.add(clonePedestal)
        return trophyGroup
    }

    const createTrophy1 = () => {
        const trophyGroup = new THREE.Group()
        const cloneTrophy1 = trophy1.clone()
        const clonePedestal = pedestalModel.clone()

        clonePedestal.scale.set(5, 5, 5)
        cloneTrophy1.scale.set(30, 30, 30)

        cloneTrophy1.position.y = 17
        cloneTrophy1.rotateY(THREE.MathUtils.degToRad(90))

        trophyGroup.add(cloneTrophy1)
        trophyGroup.add(clonePedestal)

        return trophyGroup
    }

    const createTrophy2 = () => {
        const trophyGroup = new THREE.Group()
        const cloneTrophy2 = trophy2.clone()
        const clonePedestal = pedestalModel.clone()

        clonePedestal.scale.set(5, 5, 5)
        cloneTrophy2.scale.set(20, 20, 20)

        cloneTrophy2.position.y = 17
        cloneTrophy2.rotateY(THREE.MathUtils.degToRad(120))

        trophyGroup.add(cloneTrophy2)
        trophyGroup.add(clonePedestal)

        return trophyGroup
    }

    return { starTrophy: createStarTrophy, trophy1: createTrophy1, trophy2: createTrophy2 }
}
