
<template>
<div>
  <transition
  mode="out-in"
  enter-active-class="animate__animated animate__fadeIn"
  leave-active-class="animate__animated animate__fadeOut"
  >
    <RouterView />
  </transition>
</div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>
