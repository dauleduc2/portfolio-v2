import { createBoardModel } from '../models/board'
import { createStatue } from '../models/statue'
import * as THREE from 'three'
export const createSkillsSection = async (scene: THREE.Scene) => {
    const BASE_X = -140
    const BASE_Z = 0
    const { stagStatue, foxStatue, horseStatue } = await createStatue()
    const { whiteboard } = await createBoardModel()

    const certificateGroup = new THREE.Group()
    const scholarshipStatue = foxStatue.clone()
    const AWSCertificateStatue = horseStatue.clone()
    const publicSpeakingCertificateStatue = stagStatue.clone()

    certificateGroup.position.x = BASE_X
    certificateGroup.position.z = BASE_Z
    certificateGroup.rotateY(THREE.MathUtils.degToRad(-90))

    scholarshipStatue.rotateY(THREE.MathUtils.degToRad(180))

    AWSCertificateStatue.position.x = 40
    AWSCertificateStatue.position.z = 27
    AWSCertificateStatue.rotateY(THREE.MathUtils.degToRad(180))

    publicSpeakingCertificateStatue.position.x = -40
    publicSpeakingCertificateStatue.rotateY(THREE.MathUtils.degToRad(-90))

    certificateGroup.add(scholarshipStatue)
    certificateGroup.add(AWSCertificateStatue)
    certificateGroup.add(publicSpeakingCertificateStatue)
    scene.add(certificateGroup)
}
