<template>
<nav class="navbar">
    <div>
        <RouterLink class="title" to="/"><span class="open-close">{{open}}</span><span class="albert">Albert Casas</span><span class="open-close">{{close}}</span></RouterLink>
    </div>
    <div class="links">
        <div class="router">
            <RouterLink class="nav-button" to="/about">About</RouterLink>
            <RouterLink class="nav-button" to="/projects">Projects</RouterLink>
            <RouterLink class="nav-button" to="/contact">Contact</RouterLink>
        </div>
        <div class="icons">
            <a class="icon" href="https://www.linkedin.com/in/albertcasas3d/" target="_blank"><img src="https://i.ibb.co/74TGDbM/linkdn.png" alt="linkdn" border="0"></a>
            <a class="icon" href="https://github.com/AlbertCasas" target="_blank"><img src="https://i.ibb.co/xXTj41w/Recurso-8.png" alt="Recurso-8" border="0"></a>
        </div>
    </div>   
</nav>
</template>

<script setup>
import {ref} from 'vue'

const open = ref("<")
const close = ref(" />")

</script>

<style scoped>

.navbar {
    background-color: #303030;
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 30rem;
    box-shadow: 1px 2px 4px black;
}

.title {
    color: #1DFCDB;
    text-decoration: none;
    font-size: 2rem;
    background-color: #303030;
}

.albert {
    background-color: #303030;
}

.open-close {
    color: white;
    background-color: #303030;
}

.links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    font-size: 1.2rem;
    background-color: #303030;
}

.router {
    display: flex;
    gap: 3rem;
    background-color: #303030;
}

.nav-button {
    color: white;
    text-decoration: none;
    background-color: #303030;
}

.nav-button:hover {
    color: #1DFCDB;
}

.icons {
    display: flex;
    gap: 1.5rem;
    background-color: #303030;
}

.icon {
    background-color: #303030;
}

.icon img {
    background-color: #303030;
}

.router-link-active {
    color: #1DFCDB;
}

</style>