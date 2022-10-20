<template>
<section id="about">
    <div class="text">
        <h1 class="about-title">GET TO <span>KNOW ME</span></h1>
        <p class="about-text">
            I’m a <span class="about-big">FRONT-END DEVELOPER</span> based in Barcelona.
            <br />
            I love JavaScript and I really enjoy making intuitive and 
            dynamic websites. <br /><br />
            Quick learner and problem solving oriented person. 
            I started my developer career learning on my own and decided to make a Front-End Developer Bootcamp at 
            Ironhack where I learnt a lot and found the 
            passion for this job. <br /><br />
            Interested in learn everyday and work on 
            ambitious projects to keep growing as a developer.
        </p>
        <router-link class="contact-me" to="/contact">CONTACT ME</router-link>
    </div>
    <div class="all-skills">
        <h1 class="skills-title">SKILLS</h1>
        <div class="skills-flex">
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
</section>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import { ref, computed } from "vue";
import { useRouter, useRoute } from 'vue-router'

const openTag = ref("<ul>");
const closeTag = ref("</ul>");

</script>

<style scoped>
* {
  background-color: #1c1c1c;
}

#about {
  background-color: #1c1c1c;
  width: 100%;
  display: flex;
  gap: 12%;
  margin-bottom: 5rem;
}

.text {
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about-title {
  margin-top: 4rem;
  color: white;
  font-weight: 900;
  font-size: 2.5rem;
  cursor: default;
}

.contact-me {
  background-color: #1DFCDB;
  text-decoration: none;
  text-align: center;
  padding: 1rem 4.5rem;
  border-radius: 7px;
  color: #000000;
  font-weight: 900;
  max-width: 10rem;
  font-size: 1.5rem;
}

span {
  color: #1dfcdb;
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
  max-width: 43rem;
}

.about-big {
  color: #1dfcdb;
  font-weight: bold;
}

.skills-title {
  color: #1dfcdb;
  font-weight: 900;
  font-size: 2.5rem;
  cursor: default;
  margin-top: 4rem;
}

.all-skills {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background-color: transparent;
}

.skills-flex {
  display: flex;
  gap: 8rem;
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
  
}

@media only screen and (max-width: 1300px) {
  #about {
    flex-direction: column;
    gap: 7rem;
    margin-bottom: 0;
  }

  .text {
    margin-right: 5%;
  }

  .skills {
    font-size: 1.3rem;
  }

  .all-skills {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5rem;
  }


}

@media only screen and (max-width: 600px) {
  #about {
    gap: 4rem;
  }

  .about-text {
    font-size: 1.3rem;
  }

  .contact-me {
    font-size: 1.3rem;
  }
  
  .skills-flex {
    gap: 3rem;
  }
}

@media only screen and (max-width: 400px) {
  .skills-flex {
    gap: 2.2rem;
  }

  .contact-me {
    padding: 1rem 3rem;
  }

  .about-title {
    font-size: 2.2rem;
  }

  .big {
    font-size: 2.2rem;
  }

  .skills-title {
    font-size: 2.2rem;
  }
}

@media only screen and (max-width: 340px) {
  .skills {
    font-size: 1.2rem;
  }
}
</style>