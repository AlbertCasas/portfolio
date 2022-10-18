<template>
    <div class="hamburger" :class="{
        'active': active
    }" @click.prevent="toggleBurger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
    <div class="menu" :class="{
        'active': active}">
        <RouterLink class="burger-button first" to="/about">About</RouterLink>
        <RouterLink class="burger-button" to="/projects">Projects</RouterLink>
        <RouterLink class="burger-button" to="/contact">Contact</RouterLink>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const emit = defineEmits([
    "toggleBurger"
])

const active = ref(false)

const toggleBurger = () => {
    active.value = !active.value
    emit("toggleBurger")
}

</script>

<style scoped>
.hamburger {
    background-color: #000000;
    cursor: pointer;
    display: none;
    position: relative;
}

.bar {
    display: block;
    width: 23px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: white;
}

.menu {
    display: none;
    background-color: #000000;
    width: 10rem;
    height: 9rem;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 4.9rem;
    right: 0;
    z-index: 99;
    box-shadow: 1px 2px 4px black;
    text-align: center;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.burger-button {
    background-color: #000000;
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
}

.first {
    margin-top: 1rem;
}

@media only screen and (max-width: 600px) {

    .hamburger {
        display: block;
        padding: 1rem;
    }

    .hamburger.active {
        background-color: #000000;
    }

    .menu.active {
        display: flex;
    }

    .hamburger.active .bar:nth-child(2){
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1){
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3){
        transform: translateY(-8px) rotate(-45deg);
    }
}


</style>