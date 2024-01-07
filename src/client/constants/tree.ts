import { TreeItem } from '../interfaces/tree'
import { STONE_FLOOR_SIZE } from './floor'
import { ONE_DEGREE_IN_RADIANS } from './math'

export const SING_TREE_SCALE = 0.1
export const APPLE_TREE_SCALE = 10
export const PINE_TREE_GROUP_SCALE = 22
export const TREE_AND_ROCK_SCALE = 1
export const BONSAI_TREE_SCALE = 13
export const SPRING_TREE_SCALE = 0.2
export const NO_LEAF_TREE_SCALE = 8
export const AUTUMN_TREE_SCALE = 10
export const BUSH_SNOW_SCALE = 5
export const CHRISTMAS_TREE_SCALE = 20
export const FALL_TREE_SCALE = 10
export const PINE_SNOW_TREE_SCALE = 35
export const SNOWMAN_SCALE = 1
export const SNOW_TREE_SCALE = 40
export const SNOWMAN_WITH_HAT_SCALE = 10
export const TREE_ISLAND_SCALE = 30

export const TREE_LIST: TreeItem[] = [
    // top left
    {
        position: {
            x: STONE_FLOOR_SIZE * 3,
            z: -STONE_FLOOR_SIZE * 1,
        },
        type: 'bonsai',
    },
    {
        position: {
            x: STONE_FLOOR_SIZE * 1,
            z: -STONE_FLOOR_SIZE * 3,
        },
        type: 'bonsai',
        rotation: {
            y: ONE_DEGREE_IN_RADIANS * 90,
        },
    },
    {
        position: {
            x: STONE_FLOOR_SIZE * 1,
            z: -STONE_FLOOR_SIZE * 4,
        },
        type: 'noLeafSpringTree',
    },
    {
        position: {
            x: STONE_FLOOR_SIZE * 1,
            z: -STONE_FLOOR_SIZE * 5,
        },
        type: 'noLeafSpringTree',
    },
    {
        position: {
            x: STONE_FLOOR_SIZE * 3,
            z: -STONE_FLOOR_SIZE * 7,
        },
        type: 'appleTree',
    },
    {
        position: {
            x: STONE_FLOOR_SIZE * 3,
            z: -STONE_FLOOR_SIZE * 5,
        },
        type: 'spring',
        rotation: {
            y: ONE_DEGREE_IN_RADIANS * 180,
        },
    },
    {
        position: {
            x: STONE_FLOOR_SIZE * 3,
            z: -STONE_FLOOR_SIZE * 3,
        },
        type: 'spring',
    },
    {
        position: {
            x: STONE_FLOOR_SIZE * 1.5,
            z: -STONE_FLOOR_SIZE * 1.5,
        },
        type: 'spring',
    },
    // top right
    {
        position: {
            x: STONE_FLOOR_SIZE * 2,
            z: STONE_FLOOR_SIZE * 2,
        },
        type: 'pineTreeGroup',
    },
    {
        position: {
            x: STONE_FLOOR_SIZE * 2,
            z: STONE_FLOOR_SIZE * (2 + 2.5 * 1),
        },
        type: 'pineTreeGroup',
    },
    {
        position: {
            x: STONE_FLOOR_SIZE * 2,
            z: STONE_FLOOR_SIZE * (2 + 2.5 * 2),
        },
        type: 'pineTreeGroup',
    },
    // bottom right
    {
        position: {
            x: -STONE_FLOOR_SIZE * 3.5,
            z: STONE_FLOOR_SIZE * 4.5,
        },
        type: 'treeAndRock',
        rotation: {
            y: ONE_DEGREE_IN_RADIANS * -90,
        },
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 3.5 * 2,
            z: STONE_FLOOR_SIZE * 4.5 + 3,
        },
        type: 'treeAndRock',
        rotation: {
            y: ONE_DEGREE_IN_RADIANS * 45,
        },
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 1,
            z: STONE_FLOOR_SIZE * 1,
        },
        type: 'autumnTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 3,
            z: STONE_FLOOR_SIZE * 1,
        },
        type: 'autumnTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 5,
            z: STONE_FLOOR_SIZE * 1,
        },
        type: 'autumnTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 1,
            z: STONE_FLOOR_SIZE * 3,
        },
        type: 'fallTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 1,
            z: STONE_FLOOR_SIZE * 5,
        },
        type: 'fallTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 5,
            z: STONE_FLOOR_SIZE * 5,
        },
        type: 'fallTree',
    },
    // bottom left
    {
        position: {
            x: -STONE_FLOOR_SIZE * 1,
            z: -STONE_FLOOR_SIZE * 2,
        },
        type: 'snowManWithHat',
        rotation: {
            y: ONE_DEGREE_IN_RADIANS * -180,
        },
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 1,
            z: -STONE_FLOOR_SIZE * 1,
        },
        type: 'snowMan',
        rotation: {
            y: ONE_DEGREE_IN_RADIANS * 90,
        },
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 1,
            z: -STONE_FLOOR_SIZE * 3,
        },
        type: 'bushSnow',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 1,
            z: -STONE_FLOOR_SIZE * 4,
        },
        type: 'bushSnow',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 2,
            z: -STONE_FLOOR_SIZE * 4,
        },
        type: 'snowTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 3,
            z: -STONE_FLOOR_SIZE * 5,
        },
        type: 'pineSnowTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 3,
            z: -STONE_FLOOR_SIZE * 3,
        },
        type: 'pineSnowTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 5,
            z: -STONE_FLOOR_SIZE * 3,
        },
        type: 'snowTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 2,
            z: -STONE_FLOOR_SIZE * 1,
        },
        type: 'pineSnowTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 3.5,
            z: -STONE_FLOOR_SIZE * 2,
        },
        type: 'pineSnowTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 5,
            z: -STONE_FLOOR_SIZE * 1,
        },
        type: 'snowTree',
    },
    {
        position: {
            x: -STONE_FLOOR_SIZE * 5,
            z: -STONE_FLOOR_SIZE * 6,
        },
        type: 'christmasTree',
    },
]
