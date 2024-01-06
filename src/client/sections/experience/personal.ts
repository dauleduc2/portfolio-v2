import { EXPERIENCE } from '../../constants/experience'
import { createBillboardModel } from '../../models/billboard'
import { createBoardModel } from '../../models/board'
import { createWoodenSignModel } from '../../models/woodenSign'
import { createWallModel } from '../../models/woodenWall'

import * as THREE from 'three'

export const createPersonalExperience = async () => {
    const { experienceTitleBillboard } = await createBillboardModel()
    const { woodenSignCenter } = await createWoodenSignModel()
    const { stoneWall } = await createWallModel()
    const { whiteboardWithProject } = await createBoardModel()

    const personalExperienceGroup = new THREE.Group()
    const bigBillboardModel = experienceTitleBillboard(
        EXPERIENCE.freelancer.title,
        EXPERIENCE.freelancer.startDate,
        EXPERIENCE.freelancer.endDate
    )
    const woodenSignModel = woodenSignCenter("Freelancer's\n    Projects")

    let previousWall: THREE.Group<THREE.Object3DEventMap>
    EXPERIENCE.freelancer.projects.forEach((project, index) => {
        const projectModel = whiteboardWithProject(project)
        const wallModel = stoneWall()

        projectModel.position.y = 1
        projectModel.position.x = 0
        projectModel.position.z = 0.05

        wallModel.add(projectModel)

        if (index === 0) {
            wallModel.position.x = -30
            wallModel.position.z = 0
            wallModel.rotateY(THREE.MathUtils.degToRad(90))
            personalExperienceGroup.add(wallModel)
        } else {
            wallModel.position.x = -1.6
            wallModel.scale.set(1, 1, 1)
            previousWall.add(wallModel)
        }
        previousWall = wallModel
    })

    personalExperienceGroup.position.z = -20

    woodenSignModel.position.z = -12
    woodenSignModel.position.x = -22
    woodenSignModel.rotateY(THREE.MathUtils.degToRad(180))

    personalExperienceGroup.add(bigBillboardModel)
    personalExperienceGroup.add(woodenSignModel)

    return personalExperienceGroup
}
