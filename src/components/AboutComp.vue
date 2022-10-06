<template>
<div class="about-wrapper">
    <div class="text-skills">
      <div class="text-button">
        <h1 class="about-title">ABOUT</h1>
        <p class="about-text">
            I’m a <span class="about-big">FRONT-END DEVELOPER</span> based in Barcelona.
            <br />
            I love JavaScript and I really enjoy making intuitive and 
            dynamic websites. <br /><br />
            Quick learner and problem solving oriented person. 
            I started my developer career learning on my own, then 
            I decided to make a Front-End Developer Bootcamp at 
            Ironhack where I really learnt a lot and found the 
            passion for this job. <br /><br />
            Interested in keep learning everyday and working on 
            ambitious projects to keep growing as a developer.
        </p>
        <RouterLink to="/contact" class="btn">CONTACT ME</RouterLink>
      </div>
    
    <div class="all-skills">
      
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
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>MongoDB</li>
        </ul>
        
        
    </div>
    </div>
</div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import { ref, computed } from "vue";
import { useRouter, useRoute } from 'vue-router'

const openTag = ref("<ul>");
const closeTag = ref("</ul>");

</script>

<style scoped>
.about-wrapper {
  background-color: #393939;
  width: 100%;
  height: 85vh;
  background-image: url("https://i.ibb.co/DMMdrBj/Recurso-27.png");
  background-position: bottom 0 right 0;
  background-size: 19rem;
  background-repeat: no-repeat;
}


.text-skills {
    padding-top: 11rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 3rem;
    background-color: transparent;
}

.about-title {
  color: #1dfcdb;
  font-weight: 900;
  font-size: 2.5rem;
  display: none;
}

.text-button {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-left: 7rem;
}

.about-text {
  color: white;
  font-size: 1.5rem;
  cursor: default;
  
  width: 39rem;
}

.about-big {
  color: #1dfcdb;
  font-weight: bold;
}

.all-skills {
    display: flex;
    gap: 4rem;
    margin-right: 15rem;
    background-color: transparent;
}

.skills {
  color: white;
  font-size: 1.5rem;
  list-style: none;
  background-color: transparent;
}

.skills li {
  background-color: transparent;
}

.skills:hover {
  cursor: default;
}

li {
  margin-bottom: 2rem;
}

li::before {
  content: "\2022";
  color: #1dfcdb;
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em;
}

.about-tags {
  font-size: 1.2rem;
  color: #747474;
  cursor: default;
  background-color: transparent;
}

.btn {
  text-decoration: none;
  font-size: 1.5rem;
  color: #393939;
  font-weight: 900;
  background-color: #1dfcdb;
  padding: 1rem 8rem;
  border-radius: 7px;
  max-width: 10rem;
}

@media only screen and (max-width: 1500px) {
  .about-wrapper {
    background-image: none;
  }

  .text-skills {
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    gap: 5rem;
    padding-top: 7rem;
    margin-right: 14rem;
  }

  .text-button {
    margin-left: 0;
  }

  .about-title {
    display: block;
  }
}

@media only screen and (max-width: 880px){

  .text-skills {
    padding-top: 4rem;
    margin-right: 0;
    align-items: flex-start;
    margin-left: 4rem;
  }
  
  .about-text {
    width: 25rem;
  }

  .all-skills {
    margin-left: 2rem;
  }
}

@media only screen and (max-width: 500px) {
  .about-wrapper {
    height: 120vh;
  }

  .text-skills {
    padding-top: 2rem;
    margin-left: 2rem;
  }

  .text-button {
    gap: 1rem;
  }

  .about-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .about-text {
    width: 20rem;
    font-size: 1.2rem;
  }

  .all-skills {
    margin: 0;
    margin-left: 2.5rem;
  }

  .all-skills li {
    font-size: 1.2rem;
    align-self: center;
  }

  .btn {
    display: none;
  }
}
</style>
