import {defineStore} from "pinia";
import {ref} from "vue";
import axios from 'axios';

export const useUserStore = defineStore('user', {
    state: () => ({
        token: "",
        students: [],
    }),
    actions: {
        addUser(student) {
            this.students.push(student)
        },
        async login(obj) {
            const res = await axios.post('https://api.synclab.uz/login', obj)
            this.token = res.data.token
            localStorage.setItem('token', this.token)
        },
        logOut() {
            localStorage.removeItem('token')
            this.$router.push('/login')
        },
        async sendUsers() {
            await axios.post('https://api.synclab.uz/attendance/write', {
                students: this.students
            }, {
                headers: {
                    "Authorization": "Bearer " + (this.token || localStorage.getItem('token'))
                }
            })
        },
        async getXLSX() {
            await axios.get('https://api.synclab.uz/attendance/export')
        },
        async getCSV() {
            await axios.get('https://api.synclab.uz/attendance/export/csv')
        }
    }
})