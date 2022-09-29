<template>
<div class="footer">
    <div class="first-row">
        <div class="footer-text">
            <p>If you are interested in<br> working with me</p>
        </div>
        <div class="router-links">
            <RouterLink class="nav-button" to="/about">About</RouterLink>
            <RouterLink class="nav-button" to="/projects">Projects</RouterLink>
        </div>
    </div>
    <div class="second-row">
        <div class="footer-button">
            <RouterLink class="contact-me" to="/contact">CONTACT ME</RouterLink>
        </div>
        <div class="social">
            <a href="https://www.linkedin.com/in/albertcasas3d/" target="_blank"><img src="https://i.ibb.co/4RnJ29W/Recurso-2.png" alt="Recurso-2" border="0"></a>
            <a href="https://github.com/AlbertCasas" target="_blank"><img src="https://i.ibb.co/NSWFjF3/Recurso-1-2.png" alt="Recurso-1-2" border="0"></a>
        </div>
    </div>

  </div>
</template>

<script setup>
import {computed} from 'vue'

const mobile = computed(() => {
    return this.$vuetify.breakpoint.sm
})

</script>

<style scoped>
.footer {
    width: 100%;
    height: 12rem;
    background-color: #303030;
    -moz-box-shadow: 0 -5px 6px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0 -5px 6px rgba(0,0,0,0.5);
    box-shadow: 1px -2px -1px rgba(0,0,0,0.5);
    position: relative;
    display: none;
}

.first-row {
    display: flex;
    background-color: #303030;
    margin: 1.5rem 2rem;
    justify-content: space-between;
}

.footer-text {
    width: 13rem;
    background-color: #303030;
    color: white;
    font-size: 1.2rem;   
}

.footer-text p {
    background-color: #303030;
}

.router-links {
    background-color: #303030;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.nav-button {
    text-decoration: none;
    color: white;
    background-color: #303030;
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.second-row {
    display: flex;
    justify-content: space-between;
    background-color: #303030;
    margin: 0 2rem;
    align-items: center;
}

.button {
    background-color: #303030;
    
}

.contact-me {
    background-color: #1DFCDB;
    text-decoration: none;
    padding: 1rem 3rem;
    border-radius: 7px;
    color: #393939;
    font-weight: 900;
}

.social {
    background-color: #303030;
    display: flex;
    gap: 1rem;
}

a {
    background-color: #303030;
}

img {
    width: 2rem;
    background-color: #303030;
}

@media only screen and (max-width: 414px) {
    
    .footer {
    display: block;
    position: absolute;
    bottom: 0;
    } 
}
</style>