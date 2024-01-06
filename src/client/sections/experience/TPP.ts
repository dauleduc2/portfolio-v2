import * as THREE from 'three'
import { createBillboardModel } from '../../models/billboard'
import { ONE_DEGREE_IN_RADIANS } from '../../constants/math'
import { createWoodenSignModel } from '../../models/woodenSign'
import { createWallModel } from '../../models/woodenWall'
import { createBoardModel } from '../../models/board'
import { EXPERIENCE } from '../../constants/experience'

export const createTPPExperience = async () => {
    const { experienceTitleBillboard } = await createBillboardModel()
    const { woodenSignCenter } = await createWoodenSignModel()
    const { stoneWall } = await createWallModel()
    const { whiteboardWithProject } = await createBoardModel()

    const TPPGroup = new THREE.Group()
    const bigBillboardModel = experienceTitleBillboard(
        EXPERIENCE.tpp.title,
        EXPERIENCE.tpp.startDate,
        EXPERIENCE.tpp.endDate
    )
    const woodenSignCenterModel = woodenSignCenter("   TPP's\nProjects")

    let previousWall: THREE.Group<THREE.Object3DEventMap>
    EXPERIENCE.tpp.projects.forEach((project, index) => {
        const projectModel = whiteboardWithProject(project)
        const wallModel = stoneWall()

        projectModel.position.y = 1
        projectModel.position.x = 0
        projectModel.position.z = 0.05

        wallModel.add(projectModel)

        if (index === 0) {
            wallModel.position.x = -30
            wallModel.position.z = 0
            wallModel.rotateY(ONE_DEGREE_IN_RADIANS * 90)
            TPPGroup.add(wallModel)
        } else {
            wallModel.position.x = 1.6
            wallModel.scale.set(1, 1, 1)
            previousWall.add(wallModel)
        }
        previousWall = wallModel
    })

    woodenSignCenterModel.position.z = 12
    woodenSignCenterModel.position.x = -22
    woodenSignCenterModel.rotateY(ONE_DEGREE_IN_RADIANS * 180)

    TPPGroup.add(bigBillboardModel)
    TPPGroup.add(woodenSignCenterModel)

    return TPPGroup
}
