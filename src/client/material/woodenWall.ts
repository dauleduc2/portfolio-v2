import * as THREE from 'three'
import { createWoodenWallModel } from '../models/woodenWall'

export const addWoodenWall = async (scene: THREE.Scene) => {
    const { woodenWall } = await createWoodenWallModel()

    const woodenWallModel = woodenWall()

    scene.add(woodenWallModel)
}
