import type { DefineComponent } from "vue"
import { createApp, ref } from "vue"
import Modal from "./components/ModalView.vue"

type ModalProps = {
    title: string
    form: DefineComponent
    onOk?: () => void
    data?: Record<string, any>
}

export default function useModal(props: ModalProps) {
    const visible = ref<boolean>(true)
    const container = document.createElement("div")
    const app = createApp(Modal, {
        ...props,
        onClose() {
            visible.value = false
            app.unmount()
            document.body.removeChild(container)
        },
        visible: visible.value
    })
    document.body.appendChild(container)
    app.mount(container)
}
