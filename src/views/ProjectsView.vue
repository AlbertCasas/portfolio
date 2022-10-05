<template>
<div class="wrapper">
  <NavBar />
  <ProjectsComp />
  <FooterMobile />
</div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterMobile from '../components/FooterMobile.vue'
import ProjectsComp from '../components/ProjectsComp.vue'

</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

</style>