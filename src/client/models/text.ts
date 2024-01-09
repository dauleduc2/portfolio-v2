import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry.js'

import * as THREE from 'three'
const fontLoader = new FontLoader()

type TextModelOptions = Partial<TextGeometryParameters> & {
    color?: string
    type?: 'bold' | 'regular'
}

let boldFont: Font
let regularFont: Font

const getFontByType = (type: 'bold' | 'regular') => {
    switch (type) {
        case 'bold':
            return boldFont
        case 'regular':
            return regularFont
        default:
            return regularFont
    }
}

export const createTextModel = async () => {
    if (!boldFont) {
        boldFont = await fontLoader.loadAsync('fonts/montserrat_bold.json')
    }

    if (!regularFont) {
        regularFont = await fontLoader.loadAsync('fonts/montserrat_regular.json')
    }

    const createText = (
        text: string,
        { color = 'white', type = 'regular', ...textOptions }: TextModelOptions = {}
    ) => {
        const font = getFontByType(type)

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

        return textMesh
    }

    const createTitleText = (
        text: string,
        { color = 'white', type = 'bold', ...textOptions }: TextModelOptions = {}
    ) => {
        const font = getFontByType(type)

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

        return textMesh
    }

    return { createText, createTitleText }
}
