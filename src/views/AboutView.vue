<template>
  <div class="wrapper">
    <NavBar />
    <p class="text">
      I’m a <span class="big">FRONT-END DEVELOPER</span> based in Barcelona. <br> 
      I love JavaScript and I really enjoy making intuitive and <br> 
      dynamic websites. <br><br>
      Quick learner and problem solving oriented person. <br> 
      I started my developer career learning on my own, then <br> 
      I decided to  make a Front-End Developer Bootcamp at <br> 
      Ironhack where I really learnt a lot and  found the <br>
      passion for this job. <br><br>
      Interested in keep learning everyday and working on <br> 
      ambitious projects to keep growing as a developer.
    </p>
    <ul class="skills first">
      <li>HTML</li>
      <li>Sass</li>
      <li>Tailwind CSS</li>
      <li>Vue.js</li>
      <li>SQL</li>
      <li>Git</li>
    </ul>
    <ul class="skills second">
      <li>CSS</li>
      <li>Bootstrap</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>MongoDB</li>
    </ul>
    <img class="decoration" src="https://i.ibb.co/DrL0JP4/Recurso-10.png" alt="Recurso-10" border="0">
    <img class="title-section" src="https://i.ibb.co/4WxrGX0/ABOUY.png" alt="ABOUT" border="0">
    <span class="tags open-tag">{{openTag}}</span>
    <span class="tags close-tag">{{closeTag}}</span>
    <RouterLink to="/contact" class="btn">CONTACT ME</RouterLink>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import {ref} from 'vue'

const openTag = ref("<ul>")
const closeTag = ref("</ul>")
</script>


<style>
.wrapper {
    height: 100vh;
    background-color:  #393939;
    width: 100%;
    position: relative;
  }

  .text{
    color: white;
    font-size: 1.5rem;
    position: absolute;
    top: 20rem;
    left: 15.5rem;
    cursor: default;
  }

  .big {
    color: #1DFCDB;
    font-weight: bold;
  }

  .skills {
    color: white;
    position: absolute;
    font-size: 1.5rem;
    list-style: none;
  }

  .skills:hover {
    cursor: default;
  }

  li {
    margin-bottom: 2rem;
  }

  li::before {
    content: "\2022";
    color: #1DFCDB;
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em;
  }

  .first {
    top: 20rem;
    left: 67rem;
  }

  .second {
    top: 20rem;
    left: 85rem;
  }

  .decoration {
    max-width: 19rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .title-section {
    position: absolute;
    right: 0;
    top: 15rem;
    background: transparent;
    width: 5rem;
  }

  .tags {
    font-size: 1.2rem;
    color: #747474;
    cursor: default;
  }

  .open-tag {
    position: absolute;
    top: 20.2rem;
    left: 62rem;
  }

  .close-tag {
    position: absolute;
    top: 39rem;
    left: 83.8rem;
  }

  .btn {
    position: absolute;
    left: 15.5rem;
    top: 43rem;
    text-decoration: none;
    font-size: 1.5rem;
    color: #393939;
    font-weight: 900;
    background-color: #1DFCDB;
    padding: 1rem 8rem;
    border-radius: 7px;
  }
</style>
