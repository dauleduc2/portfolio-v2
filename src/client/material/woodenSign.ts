import * as THREE from 'three'
import { createWoodenSignModel } from '../models/woodenSign'

export const addWoodenSign = async (scene: THREE.Scene) => {
    const { woodenSign } = await createWoodenSignModel()
    const skillsWoodenSign = woodenSign('Skills')
    const experienceWoodenSign = woodenSign('Experience')
    const certificateWoodenSign = woodenSign('Certificate')
    const introductionWoodenSign = woodenSign('Introduction')

    skillsWoodenSign.position.set(-14, 0, -11)

    experienceWoodenSign.position.set(15, 0, 7)
    experienceWoodenSign.rotation.y = Math.PI

    certificateWoodenSign.position.set(-10, 0, 12)
    certificateWoodenSign.rotation.y = Math.PI / 2

    introductionWoodenSign.position.set(11, 0, -14)
    introductionWoodenSign.rotation.y = -Math.PI / 2

    scene.add(skillsWoodenSign)
    scene.add(experienceWoodenSign)
    scene.add(certificateWoodenSign)
    scene.add(introductionWoodenSign)
}
