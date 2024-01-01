import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry.js'
import * as THREE from 'three'
const fontLoader = new FontLoader()

type TextModelOptions = Partial<TextGeometryParameters> & {
    color?: string
}

export const createTextModel = async () => {
    const font = await fontLoader.loadAsync('fonts/helvetiker_regular.typeface.json')

    const createText = (
        text: string,
        { color = 'white', ...textOptions }: TextModelOptions = {}
    ) => {
        const textGeometry = new TextGeometry(text, {
            font: font,
            size: 0.1,
            height: 0.01,
            ...textOptions,
        })

        const textMaterial = new THREE.MeshStandardMaterial({
            color,
        })

        const textMesh = new THREE.Mesh(textGeometry, textMaterial)

        textMesh.geometry.center()

        return textMesh
    }

    return { createText }
}
