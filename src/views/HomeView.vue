<template>
<div class="home-wrapper">
  <NavBar />
  <div class="text">
    <h1>Hello! <br>
    I'm <span class="big">ALBERT</span>, <br>
    Front End Developer.</h1>
    <br>
    <h1>Welcome to my <span class="big">SITE</span>.</h1>
    
  </div>
  <span class="tags open-tag">{{openTag}}</span>
  <span class="tags close-tag">{{closeTag}}</span>
  <img class="decoration" src="https://i.ibb.co/DrL0JP4/Recurso-10.png" alt="Recurso-10" border="0">
</div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import {ref} from 'vue'


const openTag = ref("<h1>")
const closeTag = ref("</h1>")

</script>

<style scoped>
  .home-wrapper {
    height: 100vh;
    background-color:  #393939;
    width: 100%;
    position: relative;
  }


  .text {
    position: absolute;
    top: 15.5rem;
    left: 15.5rem;
    font-size: 2.5rem;
    color: white;
    cursor: default;
  }

  .tags {
    font-size: 1.2rem;
    color: #747474;
    cursor: default;
  }

  .open-tag {
    position: absolute;
    top: 18.5rem;
    left: 12rem;
  }

  .close-tag {
    position: absolute;
    top: 39.5rem;
    left: 68rem;
  }

  .big {
    color: #1DFCDB;
    font-weight: 900;
    text-transform: uppercase;

  }


.decoration {
    max-width: 19rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }

</style>