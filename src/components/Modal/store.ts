import { makeAutoObservable } from "mobx"

class ModalStore {
    private open = false

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    getOpen() {
        return this.open
    }

    handleOpen() {
        this.open = true
    }

    handleClose() {
        this.open = false
    }
}

export const modalStore = new ModalStore()