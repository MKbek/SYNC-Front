<template>
  <div v-if="sidebarStore.bottomSheet" class="w-full h-full fixed top-0 left-0 bottom-0 z-20 bg-zinc-700/20" @click.prevent="sidebarStore.appBottomSheet(false)"></div>
  <div class="flex justify-center container">
    <div :class="[sidebarStore.bottomSheet ? 'bottom-0 shadow-zinc-700' : '-bottom-96', 'bg-card backdrop-blur-lg fixed w-full h-96 z-50 shadow-2xl rounded-t-3xl shadow-zinc-100/50']">
      <div class="flex items-center flex-col p-3">
        <div class="bg-zinc-300 w-20 h-1 rounded-full cursor-pointer text-black"></div>
        <p class="text-lg font-medium mt-4">Students: {{ userStore.students.length }}</p>
        <div class="flex justify-around w-full mt-6">
          <router-link to="/scan">
            <ViewfinderCircleIcon class="w-24 cursor-pointer"/>
          </router-link>
          <JsonExcel :data="userStore.students" filename="attandance.xlsx">
            <CloudArrowUpIcon class="w-24 cursor-pointer"/>
          </JsonExcel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ViewfinderCircleIcon, CloudArrowUpIcon } from '@heroicons/vue/24/outline'
import {useSidebarStore} from "@/stores/sidebar";
import {ref} from "vue";
import {useUserStore} from "@/stores/user";
// import axios from "axios";
import JsonExcel from "vue-json-excel3";

const userStore = useUserStore();
const sidebarStore = useSidebarStore();
const submit = async () => {
  // await userStore.sendUsers();
  // await getXLSX();
  // await getCSV();
}
// const getCSV = async () => {
//   const res = await axios.get('https://api.synclab.uz/attendance/export/csv')
//   const url = window.URL.createObjectURL(new Blob([res.data]));
//   const link = document.createElement('a');
//   link.href = url;
//   link.setAttribute('download', 'attandance.csv');
//   document.body.appendChild(link);
//   link.click();
// }
// const getXLSX = async () => {
//   const res = await axios.get('https://api.synclab.uz/attendance/export')
//   const url = window.URL.createObjectURL(new Blob([res.data]));
//   const link = document.createElement('a');
//   link.href = url;
//   link.setAttribute('download', 'attandance.xlsx');
//   document.body.appendChild(link);
//   link.click();
// }
</script>

<style scoped>
* {
  @apply transition-all delay-200;
}
</style>
