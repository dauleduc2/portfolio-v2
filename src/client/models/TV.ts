import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'
import { FLAT_TV_SCALE, RETRO_TV_SCALE, TV_SCALE, TVs_SCALE } from '../constants/TV'
import { createTextModel } from './text'
import { uuidv4 } from '../utils/uuid'
const loader = new GLTFLoader()

export const createTVModel = async () => {
    const { createText } = await createTextModel()
    const retroTVGLTF = await loader.loadAsync('/models/TV/retro_tv.glb')
    const TVGLTF = await loader.loadAsync('/models/TV/TV.glb')
    const TVsGLTF = await loader.loadAsync('/models/TV/tvs.glb')
    const flatTVGLTF = await loader.loadAsync('/models/TV/flat_screen_TV.glb')
    const retroTV = retroTVGLTF.scene
    const TV = TVGLTF.scene
    const TVs = TVsGLTF.scene
    const flatTV = flatTVGLTF.scene

    new Array(retroTV, TV, TVs, flatTV).forEach((tree) => {
        tree.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    })

    retroTV.scale.set(RETRO_TV_SCALE, RETRO_TV_SCALE, RETRO_TV_SCALE)
    TV.scale.set(TV_SCALE, TV_SCALE, TV_SCALE)
    TVs.scale.set(TVs_SCALE, TVs_SCALE, TVs_SCALE)
    flatTV.scale.set(FLAT_TV_SCALE, FLAT_TV_SCALE, FLAT_TV_SCALE)

    const createRetroTV = () => {
        const cloneCabinet = retroTV.clone()

        return cloneCabinet
    }

    const createTV = (text: string[] = [''], interval: number | undefined = 2000) => {
        const cloneTV = TV.clone()
        let currentIndex = 0
        let currentTextName: string | null
        setInterval(() => {
            if (currentIndex >= text.length) {
                currentIndex = 0
                return
            }

            if (currentTextName) {
                const previousText = cloneTV.getObjectByName(currentTextName)
                if (previousText) cloneTV.remove(previousText)
            }
            const newText = createText(text[currentIndex], { size: 1, color: 'white' })
            const newTextUUID = uuidv4()
            newText.name = newTextUUID
            currentTextName = newTextUUID
            newText.rotateY(0)

            newText.position.z = 0.5
            newText.position.x = 0
            newText.position.y = 6

            currentIndex++
            cloneTV.add(newText)
        }, interval)

        return cloneTV
    }

    const createFlatTV = (text: string[] = [''], interval: number | undefined = 2000) => {
        const cloneFlatTV = flatTV.clone()
        let currentIndex = 0
        let currentTextName: string | null
        setInterval(() => {
            if (currentIndex >= text.length) {
                currentIndex = 0
                return
            }

            if (currentTextName) {
                const previousText = cloneFlatTV.getObjectByName(currentTextName)
                if (previousText) cloneFlatTV.remove(previousText)
            }
            const newText = createText(text[currentIndex], { size: 1, color: 'white' })
            const newTextUUID = uuidv4()
            newText.name = newTextUUID
            currentTextName = newTextUUID
            newText.rotateY(0)

            newText.position.z = 0.5
            newText.position.x = 0
            newText.position.y = 6

            currentIndex++
            cloneFlatTV.add(newText)
        }, interval)

        return cloneFlatTV
    }

    const createTVs = () => {
        const cloneCabinet = TVs.clone()

        return cloneCabinet
    }

    return { retroTV: createRetroTV, TV: createTV, TVs: createTVs, flatTV: createFlatTV }
}
