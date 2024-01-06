import * as THREE from 'three'
import { createWoodenSignModel } from '../models/woodenSign'

export const addWoodenSign = async (scene: THREE.Scene) => {
    const { woodenSign } = await createWoodenSignModel()
    const skillsWoodenSign = woodenSign('Skills')
    const experienceWoodenSign = woodenSign('Experience')
    const certificateWoodenSign = woodenSign('Certificate')
    const introductionWoodenSign = woodenSign('Introduction')

    skillsWoodenSign.position.set(-8, 0, -8)

    experienceWoodenSign.position.set(8, 0, 8)
    experienceWoodenSign.rotation.y = Math.PI

    certificateWoodenSign.position.set(-8, 0, 8)
    certificateWoodenSign.rotation.y = Math.PI / 2

    introductionWoodenSign.position.set(8, 0, -8)
    introductionWoodenSign.rotation.y = -Math.PI / 2

    scene.add(skillsWoodenSign)
    scene.add(experienceWoodenSign)
    scene.add(certificateWoodenSign)
    scene.add(introductionWoodenSign)
}
