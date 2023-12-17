export interface ModelsActions {
    [key: string]: THREE.AnimationAction
}

export interface ModelApi {
    state: StateType
    // emote: EmoteType
    [key: string]: any
}

export type StateType = 'Idle' | 'Walking' | 'Running' | 'Dance' | 'Death' | 'Sitting' | 'Standing'
export type EmoteType = 'Jump' | 'Yes' | 'No' | 'Wave' | 'Punch' | 'ThumbsUp'
