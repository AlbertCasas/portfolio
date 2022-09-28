<template>
<div class="wrapper">
    <NavBar />
    <p class="message">Send me a <span>message</span> or contact me on <a class="linkedin-link" href="https://www.linkedin.com/in/albertcasas3d/" target="_blank"><span>Linkedin</span></a>.</p>
    <div class="contact-form">
        <form class="form">
            <div class="name-email">
			    <input class="input" required name="name" placeholder="Name" type="text" autocomplete="off" v-model="name">
			    <input class="input input-email" required name="email" placeholder="Email" type="email" autocomplete="off" v-model="email">
            </div>
            <input class="input" required name="subject" placeholder="Subject" type="text" autocomplete="off" v-model="subject">
			<textarea class="input input-message" name="message" rows="4" placeholder="Message" v-model="message"></textarea>
		    <button @click.prevent="sendMessage" class="button" type="submit">SEND</button>
		</form>
    </div>
    <p v-if="errorMsg" class="err-msg">{{ errorMsg }}</p>
    <img class="decoration" src="https://i.ibb.co/DrL0JP4/Recurso-10.png" alt="Recurso-10" border="0">
    <img class="title-section" src="https://i.ibb.co/TtrFrpT/CONTACT-2x.png" alt="CONTACT-2x" border="0">
    <span class="tags open-tag">{{openTag}}</span>
    <span class="tags close-tag">{{closeTag}}</span>
    <a href="https://github.com/AlbertCasas" target="_blank"><img class="icon github" src="https://i.ibb.co/NSWFjF3/Recurso-1-2.png" alt="Recurso-1-2" border="0"></a>
    <a href="https://www.linkedin.com/in/albertcasas3d/" target="_blank"><img class="icon linkedin" src="https://i.ibb.co/4RnJ29W/Recurso-2.png" alt="Recurso-2" border="0"></a>
</div>    
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import {ref} from 'vue'
import projectFirestore from "../firebase/firebaseconfig"


const openTag = ref("<form>")
const closeTag = ref("</form>")
const name = ref("")
const email = ref("")
const subject = ref("")
const message = ref("")
const errorMsg = ref("")

const sendMessage = () => {
    if(name.value === "" || email.value === "" || subject.value === "" || message.value === ""){
        errorMsg.value ="Please, complete the empty fields"
        setTimeout(() => {
            errorMsg.value = null
        }, 5000)
    }else{
        const newMessage = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }
        projectFirestore.collection('userMessages').add(newMessage)
        errorMsg.value = "Message sent succesfully"
        setTimeout(() => {
            errorMsg.value = null
        }, 5000)
        name.value = "",
        email.value = "",
        subject.value = "",
        message.value = ""
    }
}

</script>

<style scoped>
.wrapper {
    height: 100vh;
    background-color:  #393939;
    width: 100%;
    position: relative;
}

.message {
    color: white;
    position: absolute;
    left: 15.5rem;
    top: 15rem;
    font-size: 1.5rem;
    cursor: default;
}

.linkedin-link {
    text-decoration: none;
}

.message span {
    color: #1DFCDB;
}

.contact-form {
    width: 60rem;
    height: 32rem;
    border: 4px solid #1DFCDB;
    border-radius: 7px;
    position: absolute;
    left: 15.5rem;
    top: 18rem;
}

.form {
    display: flex;
    flex-direction: column
    
}

.name-email {
    display: flex;
}

.name-email .input {
    width: 25rem;
}

.input {
    margin: 2rem 2rem 0 2rem;
    padding: .8rem;
    background-color: #747474;
    border-radius: 7px;
    color: #393939;
    font-size: 1.2rem;
}

.input::placeholder {
    color: #393939;
}

.input:focus {
    outline: none;
}

.input-email {
    margin-left: 0;
}

.input-message {
    height: 10rem;
}

.button {
    width: 25rem;
    padding: .8rem;
    margin: 2rem 2rem 0 2rem;
    font-size: 1.2rem;
    font-weight: 900;
    color: #393939;
    background-color: #1DFCDB;
    border: none;
    border-radius: 7px;
    align-self: flex-end;
}

.button:hover {
    cursor: pointer;
}

.err-msg {
    color: #1DFCDB;
    font-size: 1.2rem;
    margin-left: 2.8rem;
    position: absolute;
    left: 15.5rem;
    top: 45rem;
}

.decoration {
    max-width: 19rem;
    position: absolute;
    bottom: 0;
    right: 0;
}

.title-section {
    position: absolute;
    right: 0;
    top: 15rem;
    background: transparent;
    width: 5rem;
}

.tags {
    font-size: 1.2rem;
    color: #747474;
    cursor: default;
}

.open-tag {
    position: absolute;
    top: 21rem;
    left: 11rem;
}

.close-tag {
    position: absolute;
    top: 45.5rem;
    left: 77rem;
}

.icon {
    position: absolute;
    width: 4rem;
}

.github {
    top: 27rem;
    right: 30rem;
}

.linkedin {
    top: 35rem;
    right: 30rem;
}
</style>