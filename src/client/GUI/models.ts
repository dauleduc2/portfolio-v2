import { EmoteType, ModelApi } from '../interface'
import { emoteTypes, statesTypes } from '../constants'
import { GUI } from 'dat.gui'

export const addStatesGUI = (gui: GUI, api: ModelApi, onChange: () => void) => {
    const statesFolder = gui.addFolder('States')
    const clipCtrl = statesFolder.add(api, 'state').options(statesTypes)
    clipCtrl.onChange(function () {
        onChange()
    })
    statesFolder.open()

    return { statesFolder, clipCtrl }
}

export const addEmotesGUI = (
    gui: GUI,
    api: ModelApi,
    onCreateCallback: (name: EmoteType) => void
) => {
    const emoteFolder = gui.addFolder('Emotes')

    for (let i = 0; i < emoteTypes.length; i++) {
        onCreateCallback(emoteTypes[i])
        emoteFolder.add(api, emoteTypes[i])
    }

    emoteFolder.open()

    return { emoteFolder }
}
