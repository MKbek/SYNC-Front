<template>
  <AppPreloader />
  <AppSidebarMenu v-if="sidebarStore.sidebar" />
  <app-group-sheet v-if="sidebarStore.groupSheet"/>
  <div class="container mx-auto p-2 pt-24 sm:p-5 sm:pt-24">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <AppBottomSheet />
</template>

<script setup>
import {onMounted} from "vue";
import AppSidebarMenu from "@/components/AppSidebarMenu.vue";
import AppPreloader from "@/components/AppPreloader.vue";
import {useSidebarStore} from "@/stores/sidebar";
import AppBottomSheet from "@/components/AppBottomSheet.vue";
import AppGroupSheet from "@/components/AppGroupSheet.vue";

const sidebarStore = useSidebarStore()

onMounted(() => {
  document.title = 'SYNC Attendance'
  if (localStorage.getItem('token')) {
    sidebarStore.sidebarActive(true)
  }
});
</script>