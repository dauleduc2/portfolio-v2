import * as THREE from 'three'
import { createWallModel } from '../models/woodenWall'

export const addWoodenWall = async (scene: THREE.Scene) => {
    const { woodenWall } = await createWallModel()

    const woodenWallModel = woodenWall()

    scene.add(woodenWallModel)
}
