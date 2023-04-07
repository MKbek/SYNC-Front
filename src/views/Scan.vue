<template>
  <div class="flex flex-col items-center justify-center h-full">
    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
      <div v-show="showScanConfirmation" class="scan-confirmation">
        <div class="flex flex-col items-center justify-center">
          <p class="text-2xl font-medium">Scan QR Code</p>
          <p class="text-sm text-gray-500">Please scan the QR code on the student's device</p>
        </div>
      </div>
    </qrcode-stream>
    <div class="scan-data">
      <p class="text-2xl font-medium">Scan Result</p>
      <p class="text-sm text-gray-500">{{ scanResult }}</p>
    </div>
  </div>
</template>
<script>
import { QrcodeStream } from 'vue3-qrcode-reader'
import { useSidebarStore } from "@/stores/sidebar";
import { useUserStore } from '@/stores/user'
export default {
  name: 'Scan',
  components: {
    QrcodeStream
  },
  mounted() {
    const sidebarStore = useSidebarStore();
    sidebarStore.backButton(true);
  },
  data: () => ({
    camera: 'auto',
    scanResult: '',
    showScanConfirmation: false,
  }),
  methods: {
    async onInit(promise) {
      try {
        await promise
      } catch (e) {
        console.error(e)
      } finally {
        this.showScanConfirmation = this.camera === "off"
      }
    },
    timeout(ms) {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms)
      })
    },
    openScan() {
      this.scanOpen = true;
    },
    async onDecode(content) {
      this.scanResult = content
      const userStore = useUserStore();
      userStore.addUser({
        email: this.scanResult,
        date: this.validateDate(),
        status: 0
      })
      await this.timeout(200)
    },
    validateDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      return `${year}:${month}:${day}-${hour}:${minute}:${second}`;
    }
  },
}
</script>
<style>
.qrcode-stream-wrapper {
  width: 100%;
  position: relative;
  z-index: 0;
  height: 30%!important;
  top: 25%;
}
</style>