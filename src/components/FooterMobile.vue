<template>
<div class="footer">
    <div class="albert-title">
        <RouterLink class="title" to="/"><span class="open-close">{{open}}</span><span class="albert">Albert Casas</span><span class="open-close">{{close}}</span></RouterLink>
    </div>
    <router-link class="nav-button" to="/about">About</router-link>
    <router-link class="nav-button" to="/projects">Projects</router-link>
    <router-link class="nav-button" to="/contact">Contact</router-link>
    <div class="icons">
        <a class="icon" href="https://www.linkedin.com/in/albertcasas3d/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a class="icon" href="https://github.com/AlbertCasas" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
</div>
</template>

<script setup>
import {computed, ref} from 'vue'

const mobile = computed(() => {
    return this.$vuetify.breakpoint.sm
})

const open = ref("<")
const close = ref(" />")

</script>

<style scoped>

.footer {
    background-color: #1DFCDB;
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;

}

.albert-title {
    background-color: #1DFCDB;
    margin-left: 5%;
    display: flex;
    justify-content: flex-start;
}

.title {
    color: red;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    background-color: #1DFCDB;
}

.albert {
    color: #000000;
    background-color: #1DFCDB;
}

.open-close {
    color: #000000;
    background-color: #1DFCDB;
}


.nav-button {
    color: #000000;
    text-decoration: none;
    background-color: #1DFCDB;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
}

.nav-button:hover {
    color: white;
}

.icons {
    display: flex;
    gap: 1.5rem;
    background-color: #1DFCDB;
    margin-right: 5%;
    justify-content: flex-end;
}

.icon {
    background-color: #1DFCDB;
}

.icon i {
    background-color: #1DFCDB;
    color: black;
    font-size: 2rem;
}

.icon i:hover {
    color: white;
}

.router-link-active {
    color: white;
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

    }

    .nav-button {
        display: none;
    }
}
</style>