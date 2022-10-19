<template>
  <div class="about-view">
    <NavBar />
    <AboutComp />
    <div class="space"></div>
    <FooterMobile />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import AboutComp from '../components/AboutComp.vue'
import FooterMobile from '../components/FooterMobile.vue'


</script>


<style scoped>
.about-view {
  display: flex;
  flex-direction: column;
}

.space {
  height: 10rem;
}

@media only screen and (max-width: 1300px) {
  .space {
    display: none;
  }
}


</style>
