import * as THREE from 'three'
import { createTPPExperience } from './TPP'
import { createPersonalExperience } from './personal'
import { createBackgroundDecorationItems } from '../../models/tree'
import { ONE_DEGREE_IN_RADIANS } from '../../constants/math'
import { createBillboardModel } from '../../models/billboard'
import { createWoodenSignModel } from '../../models/woodenSign'

export const createExperienceSection = async (scene: THREE.Scene) => {
    const BASE_X = 80
    const BASE_Z = 0

    const experienceSectionGroup = new THREE.Group()
    const { woodenSignCenter } = await createWoodenSignModel()
    const { treeIsland } = await createBackgroundDecorationItems()
    const TPPGroup = await createTPPExperience()
    const personalExperienceGroup = await createPersonalExperience()
    const woodenSignCenterModel = woodenSignCenter('Future...')
    const treeIslandModel = treeIsland.clone()

    TPPGroup.position.z = -20
    personalExperienceGroup.position.z = 20

    experienceSectionGroup.position.x = BASE_X
    experienceSectionGroup.position.z = BASE_Z

    treeIslandModel.rotateY(ONE_DEGREE_IN_RADIANS * -90)
    treeIslandModel.position.z = 0
    treeIslandModel.position.x = 62

    woodenSignCenterModel.position.z = 0.4
    woodenSignCenterModel.position.y = -0.1
    woodenSignCenterModel.scale.set(0.2, 0.2, 0.2)

    treeIslandModel.add(woodenSignCenterModel)
    experienceSectionGroup.add(treeIslandModel)
    experienceSectionGroup.add(TPPGroup)
    experienceSectionGroup.add(personalExperienceGroup)

    scene.add(experienceSectionGroup)
}
