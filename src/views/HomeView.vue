<template>
<div class="home-wrapper">
  <NavBar />
  <div class="text">
    <span class="tags open-tag">{{openTag}}</span>
    <h1>Hello! <br>
    I'm <span class="big">ALBERT</span>, <br>
    Front End Developer.</h1>
    <br>
    <h1>Welcome to my <span class="big">SITE</span>.</h1>
    <span class="tags close-tag">{{closeTag}}</span>
  </div>
  <div class="button">
    <RouterLink class="contact-me" to="/contact">CONTACT ME</RouterLink>
  </div>
  <FooterMobile v-show="$vuetify.breakpoint.xs" />
</div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import {ref} from 'vue'
import FooterMobile from '../components/FooterMobile.vue'


const openTag = ref("<h1>")
const closeTag = ref("</h1>")

</script>

<style scoped>
  .home-wrapper {
    height: 100vh;
    background-color:  #393939;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    background-image: url("https://i.ibb.co/DrL0JP4/Recurso-10.png");
    background-position: bottom 0 right 0;
    background-size: 19rem;
    background-repeat: no-repeat;
  }


  .text {
    margin-top: 10rem;
    margin-left: 16rem;
    font-size: 2.5rem;
    color: white;
    cursor: default;
    max-width: 55rem;
  }

  .tags {
    font-size: 1.2rem;
    color: #747474;
    cursor: default;
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

.button {
  margin-left: 6rem;
  margin-top: 4rem;
  display: none;
}

.contact-me {
  background-color: #1DFCDB;
  text-decoration: none;
  padding: 1rem 3rem;
  border-radius: 7px;
  color: #393939;
  font-weight: 900;
}

.footer {
  display: none;
}

@media only screen and (max-width: 1500px) {

  .home-wrapper {
    background-size: 14rem;
  }

  .text {
    margin-top: 8rem;
    margin-left: 13rem;
    font-size: 2rem;
    max-width: 43rem;
  }
}

@media only screen and (max-width: 1250px) {

  .home-wrapper {
    background-image: none;
  }
}

@media only screen and (max-width: 1000px) {
  .text {
    margin-left: 8rem;
  }
}

@media only screen and (max-width: 880px) {
  .text {
    font-size: 1.5rem;
    margin-left: 6rem;
    margin-top: 7rem;
  }

  .button {
    display: block;
  }
}

@media only screen and (max-width: 414px) {
  .text {
    margin-top: 5rem;
    margin-left: 2rem;
    font-size: 1.3rem;
  }

  .button {
    display: none;
  }
}

.footer {
  display: block;
  position: absolute;
  bottom: 0;
}

</style>