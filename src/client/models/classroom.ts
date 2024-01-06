import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { CLASSROOM_SCALE, SPACE_BETWEEN_TEXT } from '../constants/school'
import { Education } from '../interfaces/education'
import { createTextModel } from './text'
import { ONE_DEGREE_IN_RADIANS } from '../constants/math'
const loader = new GLTFLoader()

let classroom: THREE.Group<THREE.Object3DEventMap>

export const createClassroomModel = async () => {
    const { createText } = await createTextModel()

    if (!classroom) {
        const classroomGLTF = await loader.loadAsync('/models/school/classroom.glb')
        classroom = classroomGLTF.scene

        classroom.traverse(function (object: any) {
            if (object.isMesh) object.castShadow = true
        })

        classroom.scale.set(CLASSROOM_SCALE, CLASSROOM_SCALE, CLASSROOM_SCALE)
        classroom.position.y = 2
        classroom.rotateZ(ONE_DEGREE_IN_RADIANS * 2)
        classroom.rotateY(-ONE_DEGREE_IN_RADIANS * 11)
    }

    const createClassroomWithText = (education: Education) => {
        const cloneClassroom = classroom.clone()

        const schoolNameText = createText(education.name, { size: 0.1 })
        schoolNameText.geometry.center()
        schoolNameText.rotateY(ONE_DEGREE_IN_RADIANS * 11)
        schoolNameText.rotateZ(ONE_DEGREE_IN_RADIANS * -2)
        schoolNameText.position.x = -0.5
        schoolNameText.position.y = 0.98
        schoolNameText.position.z = -2.03

        const schoolMajor = createText(`Major: ${education.major}`, { size: 0.05 })
        schoolMajor.rotateZ(ONE_DEGREE_IN_RADIANS * -1)
        schoolMajor.position.y = -(SPACE_BETWEEN_TEXT + 0.05)
        schoolMajor.position.x = -0.6
        schoolNameText.add(schoolMajor)

        const schoolGPA = createText(`GPA: ${education.gpa}`, { size: 0.05 })
        schoolGPA.position.y = -SPACE_BETWEEN_TEXT
        schoolMajor.add(schoolGPA)

        const schoolLocation = createText(`Location: ${education.location}`, { size: 0.05 })
        schoolLocation.position.y = -(SPACE_BETWEEN_TEXT + SPACE_BETWEEN_TEXT)
        schoolLocation.position.x = 0
        schoolMajor.add(schoolLocation)

        cloneClassroom.add(schoolNameText)
        return cloneClassroom
    }

    return { classroom: createClassroomWithText }
}
