<template>
<section id="projects">
  <h1 class="project-title">MY <span class="big">PROJECTS</span></h1>
    <div class="projects">
      <div class="single-project first">
        <a href="https://note-it-project.vercel.app/auth/login" target="_blank"><img src="https://i.ibb.co/SmPJhVK/note-it-card.png" alt="note it"> </a>
        <h2>NOTE IT!</h2>
        <p>Task management App with authentication to register and login to your account where you can create your tasks and mark them as completed, edit them and delete them.</p>
        <span>Vue.js - Supabase</span>
        <a class="visit" href="https://note-it-project.vercel.app/auth/login" target="_blank">VISIT</a>
      </div>
      <div class="single-project">
        <a href="https://weather-app-zeta-sooty.vercel.app/" target="_blank"><img src="https://i.ibb.co/cCn1TBF/Recurso-28.png" alt="weather app"></a>
        <h2>WEATHER APP</h2>
        <p>An App that allows you to add different locations and gives you in real time information about the weather in any city that you added, imported from OpenWeatherMap.org API.</p>
        <span>Vue.js - Firebase</span>
        <a class="visit" href="https://weather-app-zeta-sooty.vercel.app/" target="_blank">VISIT</a>
      </div>
      <div class="single-project last">
        <a href="https://circle-cloning.vercel.app/" target="_blank"><img src="https://i.ibb.co/ChVjQ5g/citcle-card.png" alt="note it"></a>
        
        <h2>CIRCLE CLONE</h2>
        <p>Cloning of a website and making it responsive for mobiles and desktop. Also I imported the projects section information from a fake API and simulated the contact form.</p>
        <span>HTML - CSS - JavaScript</span>
        <a class="visit" href="https://circle-cloning.vercel.app/" target="_blank">VISIT</a>
      </div>
    </div>
</section>
</template>

<script setup>


</script>

<style scoped>
* {
  background-color: #1c1c1c;
}

#projects {
  background-color: #1c1c1c;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5rem;
}


.project-title {
  color: white;
  font-weight: 900;
  font-size: 2.5rem;
  cursor: default;
  margin: 4rem 0 3rem 5%;
}

.big {
  color: #1DFCDB;
  font-weight: 900;
  font-size: 2.5rem;
  cursor: default;
  margin-bottom: 3rem;
  background-color: #1c1c1c;
}

.projects {
  margin: 3rem 0 0 0;
  max-width: 100vw;
  overflow-x: scroll;
  display: flex;
  gap: 10rem;
}


.single-project {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #000000;
  border-radius: 20px 20px 20px 20px;
  margin: 0 0 2rem 0;
}

.first {
  margin-left: 5%;
}

.last {
  margin-right: 5%;
}

.single-project img {
  width: 400px;;
  border-radius: 20px 20px 0 0;
}

.single-project  p, span {
  background-color: #000000;
  color: white;
  cursor: default;
}

.visit {
  align-self: flex-end;
  justify-self: flex-end;
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  background: #1DFCDB;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 1rem 2.5rem;
  border-radius: 7px;
  margin-bottom: 1rem;
  cursor: pointer;
}

.single-project h2 {
  font-size: 2rem;
  margin-left: 1rem;
  background-color: #000000;
  color: #1DFCDB;
  cursor: default;
}

.projects::-webkit-scrollbar {
  height: 9px;
}


.projects::-webkit-scrollbar-thumb {
  height: 5px;
  background-color: #000000;
}




::-webkit-scrollbar {
  width: 4px;
  border: 1px solid #d5d5d5;
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background: #1c1c1c;
}

::-webkit-scrollbar-thumb {
  border-radius: 7px;
  background: #000000;
}

.single-project p, span {
  font-size: 1.4rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.single-project p {
  min-height: 9rem;
}


@media only screen and (max-width: 1300px) {
  #projects {
    margin-bottom: 5rem;
  }

  .projects {
    gap: 5rem;
  }

  .single-project {
    width: 350px;
  }

  .single-project img {
    width: 350px;
  }

  .single-project p, span {
    font-size: 1.3rem;
  }

  .visit {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 880px){
  .projects {
    gap: 2.5rem;
  }

  .projects::-webkit-scrollbar {
    display: none;
  }

  .single-project {
    width: 300px;
  }

  .single-project img {
    width: 300px;
  }

  .single-project h2 {
    font-size: 1.5rem;
  }

  .single-project p, span {
    font-size: 1.1rem;
  }

  .visit {
    font-size: 1rem;
    padding: .9rem 1.2rem;
  }
}

@media only screen and (max-width: 600px) {
  #projects {
    margin-bottom: 3rem;
  }

  .single-project {
    width: 250px;
  }

  .single-project img {
    width: 250px;
  }

  .single-project p, span {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 400px) {
  .project-title {
    font-size: 2.2rem;
  }

  .big {
    font-size: 2.2rem;
  }
}

</style>