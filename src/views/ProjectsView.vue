<template>
<div class="wrapper">
  <NavBar />
  <div class="projects-wrapper">
    <div class="project-note">
      <img src="https://i.ibb.co/rGg6mNb/Recurso-22.png" alt="Recurso-22" border="0">
      <div class="overlay">
        <div class="info">
          <h1>Note It!</h1>
          <p>A To Do App where you can register and login to your account and create your tasks, mark them as completed, edit your taks and delete them.</p>
          <div class="bottom">
            <span>Vue.js  -  Supabase</span>
            <a href="https://note-it-project.vercel.app/auth/login" target="_blank"><button>VISIT</button></a>
          </div>
        </div>
      </div>
    </div>
    <div class="project-weather">
      <img src="https://i.ibb.co/CVxDXFP/Recurso-23-1.png" alt="Recurso-23-1" border="0">
      <div class="overlay">
        <div class="info">
          <h1>WeatherApp</h1>
          <p>A Weather App where you can add cities around the world to check detailed weather forecast of every city you want.</p>
          <div class="bottom">
            <span>Vue.js  -  Firebase</span>
            <a href="https://weather-app-zeta-sooty.vercel.app/" target="_blank"><button>VISIT</button></a>
          </div>
        </div>
      </div>
    </div>
    <div class="project-circle">
      <img src="https://i.ibb.co/vxTb8C2/Recurso-24.png" alt="Recurso-24" border="0">
      <div class="overlay">
        <div class="info">
          <h1>Circle Clone</h1>
          <p>This is a clone of Circle agency webpage responsive for mobiles and desktop. The projects section information comes from a fake API.</p>
          <div class="bottom">
            <span>HTML - CSS - JavaScript</span>
            <a href="https://circle-cloning.vercel.app/" target="_blank"><button>VISIT</button></a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <img class="decoration" src="https://i.ibb.co/DrL0JP4/Recurso-10.png" alt="Recurso-10" border="0">
  <img class="title-section" src="https://i.ibb.co/kJWThth/PROJECTS-2x.png" alt="PROJECTS-2x" border="0">
  
  
</div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'

</script>

<style scoped>
.wrapper {
    height: 100vh;
    background-color:  #393939;
    width: 100%;
    position: relative;
    overflow: auto;
  }

  .wrapper::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.projects-wrapper::-webkit-scrollbar {
  display: none;
}

.projects-wrapper {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.projects-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 5rem 16rem 0;
  gap: 7rem;
  position: relative;
}

.project-note {
  width: 35rem;
  height: 20rem;
  border-radius: 7px; 
  position: relative;
}

.project-note img {
  border-radius: 7px;
  width: 35rem;
  height: 20rem;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 7px;
}

.project-note:hover .overlay {
  opacity: 0.9;
  cursor: default;
}

.info {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 7px;
  padding: 3rem;
  height: 20rem;
  color: white;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
}

.info h1 {
  color: #1DFCDB;
  font-size: 2.5rem;
  font-weight: 900;
  background-color: transparent;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom button {
  padding: 1rem 4rem;
  text-align: center;
  background-color: #1DFCDB;
  border: none;
  border-radius: 7px;
  color: #393939;
  font-size: 1.2rem;
  font-weight: 900;
}

.bottom button:hover {
  cursor: pointer;
}

.project-weather {
  width: 35rem;
  height: 20rem;
  border-radius: 7px; 
  position: relative;
}

.project-weather img {
  border-radius: 7px;
  width: 35rem;
  height: 20rem;
}

.project-weather:hover .overlay {
  opacity: 0.9;
  cursor: default;
}

.project-circle {
  width: 35rem;
  height: 20rem;
  border-radius: 7px;
  position: relative;
}

.project-circle img {
  border-radius: 7px;
  width: 35rem;
  height: 20rem;
}

.project-circle:hover .overlay {
  opacity: 0.9;
  cursor: default;
}

.decoration {
    max-width: 19rem;
    position: fixed;
    bottom: 0;
    right: 0;
}

.title-section {
    position: fixed;
    right: 0;
    top: 15rem;
    background: transparent;
    width: 5rem;
}

</style>