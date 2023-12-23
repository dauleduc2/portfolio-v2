export const W = 'w'
export const A = 'a'
export const S = 's'
export const D = 'd'
export const SHIFT = 'shift'
export const DIRECTIONS = [W, A, S, D]

export class KeyDisplay {
    map: Map<string, HTMLDivElement> = new Map()

    constructor() {
        const w: HTMLDivElement = document.createElement('div')
        const a: HTMLDivElement = document.createElement('div')
        const s: HTMLDivElement = document.createElement('div')
        const d: HTMLDivElement = document.createElement('div')
        const shift: HTMLDivElement = document.createElement('div')

        this.map.set(W, w)
        this.map.set(A, a)
        this.map.set(S, s)
        this.map.set(D, d)
        this.map.set(SHIFT, shift)

        this.map.forEach((v, k) => {
            v.style.color = 'blue'
            v.style.fontSize = '50px'
            v.style.fontWeight = '800'
            v.style.position = 'absolute'
            v.textContent = k
        })

        this.updatePosition()

        this.map.forEach((v, _) => {
            document.body.append(v)
        })
    }

    public updatePosition() {
        const wElement = this.map.get(W)
        const aElement = this.map.get(A)
        const sElement = this.map.get(S)
        const dElement = this.map.get(D)
        const shiftElement = this.map.get(SHIFT)

        if (wElement) {
            wElement.style.top = `${window.innerHeight - 150}px`
            wElement.style.left = `${300}px`
        }

        if (aElement) {
            aElement.style.top = `${window.innerHeight - 100}px`
            aElement.style.left = `${200}px`
        }

        if (sElement) {
            sElement.style.top = `${window.innerHeight - 100}px`
            sElement.style.left = `${300}px`
        }

        if (dElement) {
            dElement.style.top = `${window.innerHeight - 100}px`
            dElement.style.left = `${400}px`
        }

        if (shiftElement) {
            shiftElement.style.top = `${window.innerHeight - 100}px`
            shiftElement.style.left = `${50}px`
        }
    }

    public down(key: string) {
        const element = this.map.get(key.toLowerCase())
        if (element) {
            element.style.color = 'red'
        }
    }

    public up(key: string) {
        const element = this.map.get(key.toLowerCase())
        if (element) {
            element.style.color = 'blue'
        }
    }
}
