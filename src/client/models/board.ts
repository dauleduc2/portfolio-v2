import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { createTextModel } from './text'
import * as THREE from 'three'
import { WHITE_BOARD_SCALE } from '../constants/board'
import { Project } from '../interfaces/experience'
import { breakTextIntoLines } from '../utils/string'
import { subtle } from 'crypto'
const loader = new GLTFLoader()

let whiteboard: THREE.Group<THREE.Object3DEventMap>

export const createBoardModel = async () => {
    const { createText, createTitleText } = await createTextModel()

    if (!whiteboard) {
        const whiteboardGLTF = await loader.loadAsync('/models/board/whiteboard.glb')
        whiteboard = whiteboardGLTF.scene

        whiteboard.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        whiteboard.scale.set(WHITE_BOARD_SCALE, WHITE_BOARD_SCALE + 1, WHITE_BOARD_SCALE)
    }

    const createWhiteboard = () => {
        const cloneWhiteboard = whiteboard.clone()

        return cloneWhiteboard
    }

    const createWhiteboardWithProject = ({
        endDate,
        overview,
        role,
        startDate,
        subTitle,
        technologies,
        title,
        link,
    }: Project) => {
        const cloneWhiteboard = whiteboard.clone()

        // title
        const subTitleString = subTitle ? ` (${subTitle})` : ''
        const titleText = createText(`${title}${subTitleString}`, {
            type: 'bold',
            size: 0.04,
            color: 'black',
        })

        // overview
        const overviewTextTitle = createTitleText('Overview:', {
            type: 'bold',
            size: 0.02,
            color: 'black',
        })

        const overviewText = createText(breakTextIntoLines(overview), {
            size: 0.02,
            color: 'black',
        })

        // Role
        const roleTextTitle = createTitleText('Role:', {
            type: 'bold',
            size: 0.02,
            color: 'black',
        })
        const roleText = createText(role, {
            size: 0.02,
            color: 'black',
        })

        // technologies
        const technologiesTextTitle = createTitleText('Technologies:', {
            type: 'bold',
            size: 0.02,
            color: 'black',
        })
        const technologiesText = createText(breakTextIntoLines(technologies.join(', ')), {
            size: 0.02,
            color: 'black',
        })

        // Title
        titleText.position.y = 0.2
        titleText.position.z = 0
        titleText.position.x = 0.05
        titleText.geometry.center()

        // overview
        overviewTextTitle.position.y = 0.12
        overviewTextTitle.position.x = -0.495

        overviewText.position.y = -0.04

        // role
        roleTextTitle.position.y = -0.05
        roleTextTitle.position.x = -0.495

        roleText.position.y = -0
        roleText.position.x = 0.08

        // technologies
        technologiesTextTitle.position.y = -0.12
        technologiesTextTitle.position.x = -0.495

        technologiesText.position.y = -0.04

        overviewTextTitle.add(overviewText)
        roleTextTitle.add(roleText)
        technologiesTextTitle.add(technologiesText)

        cloneWhiteboard.add(titleText)
        cloneWhiteboard.add(overviewTextTitle)
        cloneWhiteboard.add(roleTextTitle)
        cloneWhiteboard.add(technologiesTextTitle)

        return cloneWhiteboard
    }

    return {
        whiteboard: createWhiteboard,
        whiteboardWithProject: createWhiteboardWithProject,
    }
}
