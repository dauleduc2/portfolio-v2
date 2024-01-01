import * as THREE from 'three'
import { createClassroomModel } from '../models/classroom'
import { createBillboardModel } from '../models/billboard'
import { ONE_DEGREE_IN_RADIANS } from '../constants/math'
export const createIntroductionSection = async (scene: THREE.Scene) => {
    const BASE_X = -10
    const BASE_Z = -100

    const { classroom } = await createClassroomModel()
    const FPTClassroom = classroom({
        gpa: '3.36/4',
        name: 'FPT University',
        location: 'District 9, HCM',
        major: 'Software Engineer',
    })

    FPTClassroom.position.x = BASE_X - 20
    FPTClassroom.position.z = BASE_Z

    const { billboardSimple } = await createBillboardModel()

    const educationBillboard = billboardSimple('Education')
    educationBillboard.position.z = 5
    educationBillboard.rotateY(ONE_DEGREE_IN_RADIANS * 40)
    FPTClassroom.add(educationBillboard)
    scene.add(FPTClassroom)
}
