import * as THREE from 'three'
import { ModelsActions } from '../interface'
import { emoteTypes, statesTypes } from '../constants'
export const initModel = (
    model: THREE.Group<THREE.Object3DEventMap>,
    animations: THREE.AnimationClip[]
) => {
    const mixer = new THREE.AnimationMixer(model)
    const actions: ModelsActions = {}
    for (let i = 0; i < animations.length; i++) {
        const clip = animations[i]
        const action = mixer.clipAction(clip)
        const clipName = clip.name as any
        actions[clipName] = action

        if (emoteTypes.indexOf(clipName) >= 0 || statesTypes.indexOf(clipName) >= 4) {
            action.clampWhenFinished = true
            action.loop = THREE.LoopOnce
        }
    }

    return { rMixer: mixer, rActions: actions }
}
