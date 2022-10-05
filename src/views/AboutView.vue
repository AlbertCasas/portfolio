<template>
  <div class="about-view">
    <NavBar />
    <AboutComp />
    <FooterMobile class="footer"/>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import AboutComp from '../components/AboutComp.vue'
import FooterMobile from '../components/FooterMobile.vue'


</script>


<style scoped>
.about-view {
  position: relative;
}

.footer {
  position: sticky;
  bottom: 0;
}
</style>
