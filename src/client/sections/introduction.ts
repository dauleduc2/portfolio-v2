import * as THREE from 'three'
import { createClassroomModel } from '../models/classroom'
import { createBillboardModel } from '../models/billboard'
import { ONE_DEGREE_IN_RADIANS } from '../constants/math'
import { createWallModel } from '../models/woodenWall'
import { createTVModel } from '../models/TV'
import { createCabinet } from '../models/cabinet'
import { createTextModel } from '../models/text'

export const createIntroductionSection = async (scene: THREE.Scene) => {
    const BASE_X = -20
    const BASE_Z = -92
    const { createText } = await createTextModel()
    const { classroom } = await createClassroomModel()
    const { woodenWall } = await createWallModel()
    const { TV, TVs, retroTV, flatTV } = await createTVModel()
    const { cabinet } = await createCabinet()
    const FPTClassroom = classroom({
        gpa: '3.36/4',
        name: 'FPT University',
        location: 'District 9, HCM',
        major: 'Software Engineer',
    })

    const woodenWallModel = woodenWall()

    FPTClassroom.position.x = BASE_X - 20
    FPTClassroom.position.z = BASE_Z

    woodenWallModel.position.x = 2
    woodenWallModel.position.z = -1

    woodenWallModel.rotateY(ONE_DEGREE_IN_RADIANS * 100)

    const { billboardSimple } = await createBillboardModel()

    const educationBillboard = billboardSimple('Education')
    educationBillboard.position.z = 5
    educationBillboard.rotateY(ONE_DEGREE_IN_RADIANS * 40)

    FPTClassroom.add(educationBillboard)
    FPTClassroom.add(woodenWallModel)

    // introduction
    const introductionGroup = new THREE.Group()
    const TVWithCabinet = new THREE.Group()
    const TVModel = TV(['Helloooooo', 'Welcome to', 'my portfolio', 'Hope you enjoy it!'])
    const flatTVModel = flatTV([''])
    const TVsModel = TVs()
    const retroTVModel = retroTV()
    const cabinetModel = cabinet()
    const hiText = createText("Hi, I'm Duc!", { size: 0.045 })
    const introductionText1 = createText('I am a front-end developer.', { size: 0.045 })
    const introductionText2 = createText(
        'Specializing in Frontend, particularly proficient\nin ReactJS/NextJS with TypeScript\n(with strong type coding style).',
        { size: 0.045 }
    )
    const introductionText3 = createText(
        "I'm keen on enhancing my Frontend skills\nand aspiring to lead a team.",
        { size: 0.045 }
    )
    introductionGroup.position.x = BASE_X + 5
    introductionGroup.position.z = BASE_Z - 20

    cabinetModel.rotateY(ONE_DEGREE_IN_RADIANS * 180)

    TVModel.position.y = 5.2
    TVModel.position.x = 6
    TVModel.position.z = -2
    TVWithCabinet.position.x = 10
    TVWithCabinet.position.z = 5
    TVWithCabinet.add(cabinetModel)
    TVWithCabinet.add(TVModel)

    TVsModel.position.y = 4.5
    TVsModel.position.z = 10
    TVsModel.rotateY(ONE_DEGREE_IN_RADIANS * -130)

    retroTVModel.position.z = 25
    retroTVModel.position.y = 1.5
    retroTVModel.rotateY(ONE_DEGREE_IN_RADIANS * -90)

    flatTVModel.position.z = 25
    flatTVModel.position.x = 30
    flatTVModel.rotateY(ONE_DEGREE_IN_RADIANS * 180)

    hiText.rotateY(ONE_DEGREE_IN_RADIANS * 90)
    hiText.position.y = 0.95
    hiText.position.x = 0.05
    hiText.position.z = 0.8

    introductionText1.position.y = -0.15

    introductionText2.position.y = -0.12

    introductionText3.position.y = -0.33

    hiText.add(introductionText1)
    introductionText1.add(introductionText2)
    introductionText2.add(introductionText3)
    flatTVModel.add(hiText)

    introductionGroup.add(TVWithCabinet)
    introductionGroup.add(TVsModel)
    introductionGroup.add(retroTVModel)
    introductionGroup.add(flatTVModel)
    scene.add(introductionGroup)
    scene.add(FPTClassroom)
}
