import { createBoardModel } from '../models/board'
import { createStatue } from '../models/statue'
import { createTextModel } from '../models/text'
import * as THREE from 'three'
export const createCertificateSection = async (scene: THREE.Scene) => {
    const BASE_X = -0
    const BASE_Z = 150
    const { stagStatue, foxStatue, horseStatue } = await createStatue()
    const { whiteboard } = await createBoardModel()

    const certificateGroup = new THREE.Group()
    const scholarshipStatue = foxStatue.clone()
    const AWSCertificateStatue = horseStatue.clone()
    const publicSpeakingCertificateStatue = stagStatue.clone()
    const scholarshipBoard = whiteboard(
        '100% scholarship for 4 years\n           at FPT University'
    )

    const AWSCertificateBoard = whiteboard('         AWS Cloud\nPractitioner Certificate')
    const publicSpeakingCertificateBoard = whiteboard(
        'First prize of public speaking\n     (organized by EFC Club)'
    )

    certificateGroup.position.x = BASE_X
    certificateGroup.position.z = BASE_Z

    scholarshipStatue.rotateY(THREE.MathUtils.degToRad(180))

    AWSCertificateStatue.position.x = 40
    AWSCertificateStatue.position.z = 27
    AWSCertificateStatue.rotateY(THREE.MathUtils.degToRad(180))

    publicSpeakingCertificateStatue.position.x = -40
    publicSpeakingCertificateStatue.rotateY(THREE.MathUtils.degToRad(-90))

    scholarshipBoard.position.z = 0.6
    scholarshipBoard.position.y = 0.7
    scholarshipBoard.scale.set(2, 2, 1)

    AWSCertificateBoard.position.z = 6.2
    AWSCertificateBoard.position.y = 1
    AWSCertificateBoard.scale.set(2.5, 2.5, 1)

    publicSpeakingCertificateBoard.position.x = -0.6
    publicSpeakingCertificateBoard.position.y = 0.7
    publicSpeakingCertificateBoard.scale.set(2, 2, 1)
    publicSpeakingCertificateBoard.rotateY(THREE.MathUtils.degToRad(-90))

    scholarshipStatue.add(scholarshipBoard)
    AWSCertificateStatue.add(AWSCertificateBoard)
    publicSpeakingCertificateStatue.add(publicSpeakingCertificateBoard)

    certificateGroup.add(scholarshipStatue)
    certificateGroup.add(AWSCertificateStatue)
    certificateGroup.add(publicSpeakingCertificateStatue)
    scene.add(certificateGroup)
}
