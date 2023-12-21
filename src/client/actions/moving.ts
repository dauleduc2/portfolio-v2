import { moveSpeed, runSpeed } from '../constants'
import { ControlButtonKeys, KeyMap, ModelActions, ModelsActions } from '../interface'
import * as THREE from 'three'
const keyMap: KeyMap = {
    w: false,
    a: false,
    s: false,
    d: false,
    arrowup: false,
    arrowleft: false,
    arrowdown: false,
    arrowright: false,
    shift: false,
}

const getSpeedAtDiagonal = (speed: number) => {
    // calculate by pythagoras theorem (a^2 + b^2 = c^2) where a = b
    return speed / 2
}

const runLeft = (model: THREE.Group<THREE.Object3DEventMap>, speed: number) => {
    model.position.x += speed
    model.rotation.y = Math.PI / 2
}

const runRight = (model: THREE.Group<THREE.Object3DEventMap>, speed: number) => {
    model.position.x -= speed
    model.rotation.y = -Math.PI / 2
}

const runUp = (model: THREE.Group<THREE.Object3DEventMap>, speed: number) => {
    model.position.z += speed
    model.rotation.y = 0
}

const runDown = (model: THREE.Group<THREE.Object3DEventMap>, speed: number) => {
    model.position.z -= speed
    model.rotation.y = Math.PI
}

const runDownLeft = (model: THREE.Group<THREE.Object3DEventMap>, speed: number) => {
    runDown(model, getSpeedAtDiagonal(speed))
    runLeft(model, getSpeedAtDiagonal(speed))
    model.rotation.y = Math.PI / 2 + Math.PI / 4
}

const runDownRight = (model: THREE.Group<THREE.Object3DEventMap>, speed: number) => {
    runDown(model, getSpeedAtDiagonal(speed))
    runRight(model, getSpeedAtDiagonal(speed))
    model.rotation.y = -(Math.PI / 2 + Math.PI / 4)
}

const runUpLeft = (model: THREE.Group<THREE.Object3DEventMap>, speed: number) => {
    runUp(model, getSpeedAtDiagonal(speed))
    runLeft(model, getSpeedAtDiagonal(speed))
    model.rotation.y = Math.PI / 2 - Math.PI / 4
}

const runUpRight = (model: THREE.Group<THREE.Object3DEventMap>, speed: number) => {
    runUp(model, getSpeedAtDiagonal(speed))
    runRight(model, getSpeedAtDiagonal(speed))
    model.rotation.y = -(Math.PI / 2 - Math.PI / 4)
}

export const moveModel = (
    model: THREE.Group<THREE.Object3DEventMap>,
    fadeToAction: (name: ModelActions, duration: number) => void
) => {
    const speed = keyMap['shift'] ? runSpeed : moveSpeed

    if (keyMap['shift']) {
        fadeToAction('Running', 0.5)
    } else {
        console.log('walking')
        fadeToAction('Walking', 0.5)
    }

    if (keyMap['arrowdown'] || keyMap['s']) {
        if (keyMap['arrowleft'] || keyMap['a']) {
            runDownLeft(model, speed)
        } else if (keyMap['arrowright'] || keyMap['d']) {
            runDownRight(model, speed)
        } else {
            runDown(model, speed)
        }
        return
    }

    if (keyMap['arrowup'] || keyMap['w']) {
        if (keyMap['arrowleft'] || keyMap['a']) {
            runUpLeft(model, speed)
        } else if (keyMap['arrowright'] || keyMap['d']) {
            runUpRight(model, speed)
        } else {
            runUp(model, speed)
        }

        return
    }

    if (keyMap['arrowleft'] || keyMap['a']) {
        runLeft(model, speed)
        return
    }

    if (keyMap['arrowright'] || keyMap['d']) {
        runRight(model, speed)
        return
    }
}

export const stopModel = (fadeToAction: (name: ModelActions, duration: number) => void) => {
    fadeToAction('Idle', 0.2)
}

export const addMovementListeners = (
    model: THREE.Group<THREE.Object3DEventMap>,
    fadeToAction: (name: ModelActions, duration: number) => void
) => {
    document.onkeydown = (e) => {
        const pressKey = e.key.toLowerCase() as ControlButtonKeys
        keyMap[pressKey] = true
        moveModel(model, fadeToAction)
    }

    document.onkeyup = function (e) {
        const pressKey = e.key.toLowerCase() as ControlButtonKeys
        keyMap[pressKey] = false
        if (
            !keyMap['a'] &&
            !keyMap['d'] &&
            !keyMap['s'] &&
            !keyMap['w'] &&
            !keyMap['arrowup'] &&
            !keyMap['arrowleft'] &&
            !keyMap['arrowdown'] &&
            !keyMap['arrowright']
        ) {
            console.log('stop modal')
            stopModel(fadeToAction)
        }
    }
}
