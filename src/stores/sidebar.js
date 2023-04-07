import {defineStore} from "pinia";

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        sidebar: false,
        back: false,
        bottomSheet: false,
        groupSheet: false
    }),
    actions: {
        sidebarActive(status) {
            this.sidebar = status
        },
        backButton(status) {
            this.back = status
        },
        appBottomSheet(status) {
            this.bottomSheet = status
        },
        addGroup(status) {
            this.groupSheet = status
        }
    }
})