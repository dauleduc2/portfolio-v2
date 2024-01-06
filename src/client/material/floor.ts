import * as THREE from 'three'
import { createFloor } from '../models/floor'
import { STONE_FLOOR_LOCATION } from '../constants/floor'

export const addFloors = async (scene: THREE.Scene) => {
    const { stoneFloor } = await createFloor()

    STONE_FLOOR_LOCATION.forEach((location) => {
        const stoneFloorModel = stoneFloor()
        stoneFloorModel.position.x = location.x
        stoneFloorModel.position.z = location.z
        scene.add(stoneFloorModel)
    })
}
