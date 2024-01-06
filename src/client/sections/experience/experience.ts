import * as THREE from 'three'
import { createTPPExperience } from './TPP'
import { createPersonalExperience } from './personal'

export const createExperienceSection = async (scene: THREE.Scene) => {
    const BASE_X = 80
    const BASE_Z = 0

    const experienceSectionGroup = new THREE.Group()

    const TPPGroup = await createTPPExperience()
    const personalExperienceGroup = await createPersonalExperience()

    TPPGroup.position.z = -20
    personalExperienceGroup.position.z = 20

    experienceSectionGroup.position.x = BASE_X
    experienceSectionGroup.position.z = BASE_Z

    experienceSectionGroup.add(TPPGroup)
    experienceSectionGroup.add(personalExperienceGroup)

    scene.add(experienceSectionGroup)
}
