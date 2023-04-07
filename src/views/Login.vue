<template>
  <div class="h-[85vh] flex flex-col items-center justify-between mx-5">
    <img src="@/assets/logo.svg" alt="" class="mt-5 app-logo w-52 h-52 rounded-full">
    <div class="w-full flex flex-col items-center">
      <h1 class="text-3xl font-bold text-zinc-200 text-primary">Authentication</h1>
      <div class="mt-5 w-full bg-card py-8 px-5 rounded-2xl max-w-md">
        <form class="w-full flex flex-col gap-10" @submit.prevent="loginSubmit">
          <div class="flex flex-col relative">
            <input type="text" id="email" v-model="email" class="block w-full px-3 py-2 bg-card text-black text-xl border-2 border-zinc-400 rounded-xl" placeholder="user@example.com">
            <label for="email" class="block text-zinc-400 font-semibold text-xl absolute -top-4 left-4 bg-card px-2">Email</label>
          </div>
          <div class="flex flex-col relative">
            <input type="password" id="password" v-model="password" class="block w-full px-3 py-2 bg-card text-black text-xl border-2 border-zinc-400 rounded-xl" placeholder="">
            <label for="password" class="block text-zinc-400 font-semibold text-xl absolute -top-4 left-4 bg-card px-2">Password</label>
          </div>
          <div class="flex flex-col relative">
            <input type="submit" class="block w-full p-3 text-white text-xl rounded-xl" value="Log In">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useUserStore} from "@/stores/user";
import {onMounted, ref} from "vue";
import router from "@/router";
import {useSidebarStore} from "@/stores/sidebar";

const email = ref('')
const password = ref('')

const userStore = useUserStore()
const sidebarStore = useSidebarStore()
const loginSubmit = async () => {
  await userStore.login({
    email: email.value,
    password: password.value
  })
  sidebarStore.sidebarActive(true)
  router.push('/')
}

onMounted(() => {
  if (localStorage.getItem('token')) {
    router.push('/')
  }
})
</script>

<style scoped>

</style>