<template>
<nav class="navbar">
    <div class="albert-title">
        <RouterLink class="title" to="/"><span class="open-close">{{open}}</span><span class="albert">Albert Casas</span><span class="open-close">{{close}}</span></RouterLink>
    </div>
    
    <router-link class="nav-button" to="/about">About</router-link>
    <router-link class="nav-button" to="/projects">Projects</router-link>
    <router-link class="nav-button" to="/contact">Contact</router-link>
    
    <div class="icons">
        <a class="icon" href="https://www.linkedin.com/in/albertcasas3d/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a class="icon" href="https://github.com/AlbertCasas" target="_blank"><i class="fa-brands fa-github"></i></a>
    <HamburgerMenu />
    </div>
</nav>
</template>

<script setup>
import {ref} from 'vue'
import HamburgerMenu from './HamburgerMenu.vue'

const open = ref("<")
const close = ref(" />")



</script>

<style scoped>

.navbar {
    background-color: #000000;
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.albert-title {
    background-color: #000000;
    margin-left: 5%;
    display: flex;
    justify-content: flex-start;
    
}

.title {
    color: #1DFCDB;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    background-color: #000000;
}

.albert {
    background-color: #000000;
}

.open-close {
    color: white;
    background-color: #000000;
}

.nav-button {
    color: white;
    text-decoration: none;
    background-color: #000000;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
}

.nav-button:hover {
    color: #1DFCDB;
}

.icons {
    display: flex;
    gap: 3.5rem;
    background-color: #000000;
    margin-right: 5%;
    justify-content: flex-end;
}

.icon {
    background-color: #000000;
}

.icon i {
    background-color: #000000;
    color: white;
    font-size: 2rem;
}

.icon i:hover {
    color: #1DFCDB;
}

.router-link-active {
    color: #1DFCDB;
}

@media only screen and (max-width: 1300px) {
    .title {
        font-size: 1.4rem;
    }

}
@media only screen and (max-width: 980px) {


    .nav-button {
        font-size: 1rem;
    }


    .icon img {
        width: 1.7rem;
    }

    
}

@media only screen and (max-width: 600px) {

    .icons {
        align-items: center;
        gap: 2rem;
    }

    .nav-button {
        display: none;
    }
}

@media only screen and (max-width: 450px) {
    .title {
        font-size: 1.2rem;
    }

    .icons {
        gap: 1.5rem;
    }
}

@media only screen and (max-width: 400px) {
    .icons {
        gap: 1rem;
    }
}

</style>