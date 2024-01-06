import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'

export const createCamera = (): THREE.PerspectiveCamera => {
    // init camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.x = 0
    camera.position.y = 30
    camera.position.z = 60

    return camera
}

export const createRenderer = (): THREE.WebGLRenderer => {
    const renderer = new THREE.WebGLRenderer()
    renderer.shadowMap.enabled = true

    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    return renderer
}

export const handleResize = (
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    render: () => void
): void => {
    // on resize handler
    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    }
}

export const createStats = (): Stats => {
    const stats = new Stats()
    document.body.appendChild(stats.dom)
    return stats
}

export const createAxesHelper = (): THREE.AxesHelper => {
    const axesHelper = new THREE.AxesHelper(10)

    return axesHelper
}

export const createLight = () => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)

    const dirLight = new THREE.DirectionalLight(0xffffff, 3.5)
    dirLight.position.set(60, 50, -10)
    dirLight.castShadow = true
    dirLight.shadow.camera.top = 50
    dirLight.shadow.camera.bottom = -50
    dirLight.shadow.camera.left = -50
    dirLight.shadow.camera.right = 50
    dirLight.shadow.camera.near = 0.1
    dirLight.shadow.camera.far = 500
    dirLight.shadow.mapSize.width = 4096
    dirLight.shadow.mapSize.height = 4096
    dirLight.castShadow = true

    return { ambientLight, dirLight }
}
