<template>
  <ssp-preloader id="app-preloader">
    <ssp-preloader id="ssp-main">
      <orbit-spinner
        :animation-duration="1000"
        :size="55"
        color="#007FFF"
      />
    </ssp-preloader>
  </ssp-preloader>
</template>

<script setup>
import { OrbitSpinner } from "epic-spinners";
import {onMounted} from "vue";
onMounted(() => {
  window.onload = () => {
    document.getElementById('app-preloader').style.display = 'none';
  }
})
</script>

<style scoped>
#app-preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>