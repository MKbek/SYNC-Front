<template>
  <div>
    <div class="overflow-auto relative w-full bg-white highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y-2 divide-[#DDD]">
      <div v-for="user in userStore.students" :key="user.id" class="flex items-center gap-4 p-4 cursor-pointer">
        <div class="flex flex-col">
          <strong class="text-sm font-medium text-zinc-900">{{ user.email }}</strong>
          <span class="text-sm font-medium text-zinc-400">ID: {{ user.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useUserStore} from "@/stores/user";
import {useSidebarStore} from "@/stores/sidebar";
import {ref} from "vue";

const userStore = useUserStore();
const sidebarStore = useSidebarStore();

userStore.token = localStorage.getItem('token');

sidebarStore.backButton(false);
</script>

<style scoped>

</style>