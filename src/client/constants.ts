import { EmoteType, StateType } from './interface'

export const OVERALL_SIZE = 50
export const moveSpeed = 0.15
export const runSpeed = 0.3
export const statesTypes: StateType[] = [
    'Idle',
    'Walking',
    'Running',
    'Dance',
    'Death',
    'Sitting',
    'Standing',
]

export const emoteTypes: EmoteType[] = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp']
