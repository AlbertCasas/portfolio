<template>
<div class="web-wrapper">
  <NavBar />
  <section id="home">
    <div class="text">
      <h1>Hello! </h1>
      <h1>I'm <span class="big">ALBERT</span>,</h1>
      <h1>Front End Developer.</h1>
      <div class="button">
        <a class="contact-me" href="#contact">CONTACT ME</a>
        <a class="portfolio-button" href="#projects">VIEW PORTFOLIO</a>
      </div>
    </div>
  </section>
  <AboutComp />
  <ProjectsComp />
  <ContactComp />
  <FooterMobile />
</div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterMobile from '../components/FooterMobile.vue'
import AboutComp from '../components/AboutComp.vue'
import ProjectsComp from '../components/ProjectsComp.vue'
import ContactComp from '../components/ContactComp.vue'



</script>

<style scoped>
  * {
    background-color: #1c1c1c;
  }

  #home {
    background-color:  #1c1c1c;
    background-image: url("https://i.ibb.co/vPdXg45/pexels-thisisengineering-3861976.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    display: flex;
    align-items: center;
    height: 95vh;
    margin-bottom: 12rem;
  }

  .text {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    width: 90%;
  }


  h1 {
    font-size: 5rem;
    color: white;
    cursor: default;
    max-width: 55rem;
    background: transparent;
  
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
    background-color: transparent;
  }


.button {
  margin-top: 4rem;
  background-color: transparent;
  font-size: 1.5rem;
}

.contact-me {
  background-color: #1DFCDB;
  text-decoration: none;
  text-align: center;
  padding: 1rem 4.5rem;
  border-radius: 7px;
  color: #000000;
  font-weight: 900;
  margin-right: 4rem;
  max-width: 10rem;
}

.portfolio-button {
  background-color: #000000;
  text-decoration: none;
  text-align: center;
  padding: .9rem 2.9rem;
  border-radius: 7px;
  color: white;
  font-weight: 900;
  border: .1rem solid white;
  max-width: 10rem;
}

@media only screen and (max-width: 1000px) {
  #home {
    margin-bottom: 5rem;
  }

}


@media only screen and (max-width: 880px) {
  
  .button {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .contact-me, .portfolio-button {
    width: 10rem;
  }

  .contact-me {
    padding: 1rem 3rem;
  }

  

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

}

@media only screen and (max-width: 600px) {
  #home {
    height: 85vh;
  }

    h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  .button {
    font-size: 1.1rem;
  }
}

</style>