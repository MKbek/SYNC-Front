<template>
  <div v-if="sidebarStore.groupSheet" class="w-full h-full fixed top-0 left-0 bottom-0 z-[51] bg-zinc-700/20" @click.prevent="sidebarStore.addGroup(false)"></div>
  <div class="flex justify-center container">
    <div class="bottom-0 shadow-zinc-700 bg-card backdrop-blur-lg fixed w-full h-56 z-[52] shadow-2xl rounded-t-3xl">
      <div class="flex items-center flex-col p-3">
        <div class="bg-zinc-300 w-20 h-1 rounded-full cursor-pointer text-black"></div>
        <form class="flex flex-col gap-2 w-full">
          <label class="text-black font-bold mt-4">Group Name</label>
          <input type="text" class="bg-zinc-200 mt-2 rounded-xl p-2">
          <button class="bg-primary rounded-xl p-2 mt-4 text-white">Add Group</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { useSidebarStore } from '@/stores/sidebar'
export default {
  name: 'AppGroupSheet',
  setup() {
    const sidebarStore = useSidebarStore();
    return {
      sidebarStore
    }
  }
}
</script>