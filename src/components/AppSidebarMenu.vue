<template>
  <div class="overflow-auto fixed top-0 left-0 right-0 z-20 p-2 text-white backdrop-blur-md bg-gray-800/20 after:fixed after:top-0 after:left-0 after:right-0 after:z-[-1] after:h-full after:bg-gradient-to-b after:from-blue-600/50 after:to-[#DDD]">
    <div class="container mx-auto px-4 py-2">
      <div class="flex justify-between">
        <transition name="fade-left" mode="out-in">
          <router-link v-if="sidebarStore.back" to="/" class="bg-primary p-1.5 rounded-full cursor-pointer text-white">
            <ChevronLeftIcon class="w-7 h-7" />
          </router-link>
          <div v-else-if="!sidebarStore.back" :class="[menuOpen ? 'opacity-0' : null, 'bg-primary p-1.5 rounded-full cursor-pointer text-white']" @click.prevent="menuOpen = !menuOpen">
            <Bars3Icon class="w-7 h-7" />
          </div>
        </transition>
        <transition name="fade-right" mode="out-in">
          <div v-if="!sidebarStore.back" class="bg-primary p-1.5 rounded-full cursor-pointer text-white" @click.prevent="openBottomSheet">
            <EllipsisVerticalIcon class="w-7 h-7" />
          </div>
        </transition>
      </div>
    </div>
  </div>

  <transition>
    <div v-if="menuOpen" class="w-full h-full bg-[#DDD]/50 backdrop-blur-md fixed top-0 left-0 bottom-0 z-20" @click.prevent="menuOpen = !menuOpen"></div>
  </transition>
  <div :class="[menuOpen ? 'left-0 shadow-zinc-700' : '-left-80', 'bg-burger backdrop-blur-lg flex flex-col gap-2 fixed top-0 bottom-0 w-80 z-50 shadow-2xl rounded-r-2xl']">
    <div class="">
      <div class="float-right mt-4 mr-4">
        <div class="bg-primary p-1.5 rounded-full cursor-pointer text-white" @click.prevent="menuOpen = !menuOpen">
          <XMarkIcon class="w-7 h-7" />
        </div>
      </div>
    </div>
    <div class="flex justify-center p-3">
      <div class="bg-white w-full rounded-xl cursor-pointer text-black flex flex-col divide-y divide-zinc-200">
        <Disclosure v-slot="{ open }">
          <DisclosureButton
              class="flex w-full justify-between items-center rounded-lg px-4 py-3 text-left text-lg font-medium"
          >
            <span>Business Math</span>
            <ChevronUpIcon
                :class="open ? 'rotate-180 transform' : ''"
                class="h-5 w-5 text-primary bg-primary-opacity-3 rounded-full"
            />
          </DisclosureButton>
          <Transition>
            <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
              If you're unhappy with your purchase for any reason, email us within
              90 days and we'll refund you in full, no questions asked.
            </DisclosurePanel>
          </Transition>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }">
          <DisclosureButton
              class="flex w-full justify-between items-center rounded-lg px-4 py-3 text-left text-lg font-medium"
          >
            <span>Medicine</span>
            <ChevronUpIcon
                :class="open ? 'rotate-180 transform' : ''"
                class="h-5 w-5 text-primary bg-primary-opacity-3 rounded-full"
            />
          </DisclosureButton>
          <Transition>
            <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
              No.
            </DisclosurePanel>
          </Transition>
        </Disclosure>
      </div>
    </div>
    <div class="fixed right-4 bottom-4">
      <div class="bg-primary p-1.5 rounded-full cursor-pointer text-white" >
        <PlusIcon class="w-7 h-7" @click="openBottomTools"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, XMarkIcon, EllipsisVerticalIcon, ChevronLeftIcon, PlusIcon } from "@heroicons/vue/24/outline";
import {ref} from "vue";
import {useSidebarStore} from "@/stores/sidebar";

const sidebarStore = useSidebarStore();

const menuOpen = ref(false);

const openBottomSheet = () => {
  sidebarStore.appBottomSheet(true);
}

const openBottomTools = () => {
  sidebarStore.addGroup(true);
}
</script>

<style scoped>
* {
  @apply transition-all delay-200;
}
</style>
