import { createBoardModel } from '../models/board'

import * as THREE from 'three'
import { createTrophyModel } from '../models/trophy'
export const createAwardSection = async (scene: THREE.Scene) => {
    const BASE_X = -0
    const BASE_Z = 150
    const { starTrophy, trophy1, trophy2 } = await createTrophyModel()
    const { whiteboard } = await createBoardModel()

    const certificateGroup = new THREE.Group()
    const scholarshipStatue = starTrophy()
    const AWSCertificateStatue = trophy1()
    const publicSpeakingCertificateStatue = trophy2()
    const scholarshipBoard = whiteboard(
        '100% scholarship for 4 years\n           at FPT University'
    )

    const AWSCertificateBoard = whiteboard('         AWS Cloud\nPractitioner Certificate')
    const publicSpeakingCertificateBoard = whiteboard(
        'First prize of public speaking\n     (organized by EFC Club)'
    )

    certificateGroup.position.x = BASE_X
    certificateGroup.position.z = BASE_Z

    scholarshipStatue.rotateY(THREE.MathUtils.degToRad(-90))

    AWSCertificateStatue.position.x = 40
    AWSCertificateStatue.position.z = 0
    AWSCertificateStatue.rotateY(THREE.MathUtils.degToRad(180))

    publicSpeakingCertificateStatue.position.x = -40
    publicSpeakingCertificateStatue.rotateY(THREE.MathUtils.degToRad(180))

    scholarshipBoard.position.x = -4
    scholarshipBoard.position.y = 5
    scholarshipBoard.scale.set(10, 10, 5)
    scholarshipBoard.rotateY(THREE.MathUtils.degToRad(-90))

    AWSCertificateBoard.position.z = 4
    AWSCertificateBoard.position.y = 5
    AWSCertificateBoard.scale.set(10, 10, 5)

    publicSpeakingCertificateBoard.position.z = 4
    publicSpeakingCertificateBoard.position.y = 5
    publicSpeakingCertificateBoard.scale.set(10, 10, 5)

    scholarshipStatue.add(scholarshipBoard)
    AWSCertificateStatue.add(AWSCertificateBoard)
    publicSpeakingCertificateStatue.add(publicSpeakingCertificateBoard)

    certificateGroup.add(scholarshipStatue)
    certificateGroup.add(AWSCertificateStatue)
    certificateGroup.add(publicSpeakingCertificateStatue)
    scene.add(certificateGroup)
}
