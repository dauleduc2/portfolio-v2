import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
const objLoader = new OBJLoader()
const fontLoader = new FontLoader()

const createBillboardModel = async () => {
    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load('models/billboard/texture.avif')

    const billboardModel = await objLoader.loadAsync('models/billboard/bilboard.obj')
    const billBoardMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
    })

    billboardModel.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.castShadow = true
            child.receiveShadow = true
            child.material = billBoardMaterial
        }
    })

    billboardModel.scale.set(1, 1, 1)
    // rotate 90 degree

    billboardModel.rotation.y = Math.PI
    billboardModel.rotation.x = Math.PI / 2

    // add text to billboard
    const font = await fontLoader.loadAsync('fonts/helvetiker_regular.typeface.json')

    const createBillBoardWithText = (text: string) => {
        const cloneBillboard = billboardModel.clone()
        const textGeometry = new TextGeometry(text, {
            font: font,
            size: 0.7,
            height: 0.1,
        })

        const textMaterial = new THREE.MeshStandardMaterial({
            color: 'white',
        })

        const textMesh = new THREE.Mesh(textGeometry, textMaterial)

        textMesh.position.set(-1, 0, 4)
        textMesh.rotateX(Math.PI / 2)
        textMesh.rotateY(-Math.PI / 2)

        textMesh.geometry.center()

        cloneBillboard.add(textMesh)

        return cloneBillboard
    }

    return { billboardModel: createBillBoardWithText }
}

export const createBillboard = async (scene: THREE.Scene) => {
    const { billboardModel } = await createBillboardModel()
    const educationBillboard = billboardModel('Education')
    const experienceBillboard = billboardModel('Experience')
    const certificateBillboard = billboardModel('Certificate')
    const introductionBillboard = billboardModel('Introduction')
    educationBillboard.position.set(-14, 0, 6)

    experienceBillboard.position.set(14, 0, -8)
    experienceBillboard.rotation.y = Math.PI
    experienceBillboard.rotation.x = Math.PI / 2

    certificateBillboard.position.set(9, 0, 12)
    certificateBillboard.rotation.y = Math.PI
    certificateBillboard.rotation.x = Math.PI / 2
    certificateBillboard.rotation.z = Math.PI / 2

    introductionBillboard.position.set(-9, 0, -12)
    introductionBillboard.rotation.y = Math.PI
    introductionBillboard.rotation.x = Math.PI / 2
    introductionBillboard.rotation.z = -Math.PI / 2

    scene.add(educationBillboard)
    scene.add(experienceBillboard)
    scene.add(certificateBillboard)
    scene.add(introductionBillboard)
}
