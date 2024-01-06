export const getMeshWidth = (mesh: THREE.Mesh) => {
    return mesh.geometry.boundingBox!.max.x - mesh.geometry.boundingBox!.min.x
}
