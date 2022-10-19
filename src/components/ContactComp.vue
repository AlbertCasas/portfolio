<template>
<div id="contact">
    <div class="form-wrapper">
        <div class="form-message">
            <h1 class="contact-title"><span class="big">CONTACT</span> FORM</h1>
            <p class="message">If you are interested in working with me send me a message or contact me on <a class="linkedin-link" href="https://www.linkedin.com/in/albertcasas3d/" target="_blank"><span>Linkedin</span></a>.</p>
            <div class="contact-form">
                <form class="form">
                    <div class="name-email">
                        <input class="input" required name="name" placeholder="Name" type="text" autocomplete="off" v-model="name">
                        <input class="input input-email" required name="email" placeholder="Email" type="email" autocomplete="off" v-model="email">
                    </div>
                    <input class="input" required name="subject" placeholder="Subject" type="text" autocomplete="off" v-model="subject">
                    <textarea class="input input-message" name="message" rows="4" placeholder="Message" v-model="message"></textarea>
                    <div class="button-err-msg">
                        <div class="err-msg-wrapper">
                            <p v-if="errorMsg" class="err-msg">{{ errorMsg }}</p>
                        </div>
                        <button @click.prevent="sendMessage" class="button" type="submit">SEND</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>    
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterMobile from '../components/FooterMobile.vue'
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
* {
    background-color: #1c1c1c;
}

#contact {
    background-color:  #1c1c1c;
    
    min-height: 80vh;
    margin-bottom: 2rem;
    display: flex;
    justify-content: flex-start;
    margin-left: 5%;
}

.form-wrapper {
    display: flex;
    background-color: #1c1c1c;
}

.big {
    color: #1DFCDB;
}

.contact-title {
  color: white;
  font-weight: 900;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  margin-top: 4rem;
}

.form-message {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.message {
    color: white;
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
    min-width: 60rem;
    max-width: 75rem;
    min-height: 29.4rem;
    max-height: 60rem;
    border: 4px solid #1DFCDB;
    border-radius: 7px;
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
    color: #1c1c1c;
    font-size: 1.2rem;
}

.input::placeholder {
    color: #1c1c1c;
}

.input:focus {
    outline: none;
    color: white;
}

.input-email {
    margin-left: 0;
}

.input-message {
    height: 10rem;
}

.button-err-msg {
    display: flex;
    gap: 2rem;
    justify-self: flex-end;
    align-items: center;
}

.err-msg-wrapper {
    width: 28.5rem;
}

.button {
    width: 25rem;
    padding: .8rem;
    margin: 2rem 2rem 2rem 2rem;
    font-size: 1.2rem;
    font-weight: 900;
    color: #1c1c1c;
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
}


@media only screen and (max-width: 1500px) {
    

    .wrapper {
    background-image: none;
    }

    .contact-title {
    display: block;
    }

}

@media only screen and (max-width: 1300px) {
    .contact-form {
        min-width: 45rem;
        max-width: 55rem;
        min-height: 19.4rem;
        max-height: 40rem;
    }

    .message {
        max-width: 55rem;
    }


    .input-message {
        height: 8rem;
    }
}

@media only screen and (max-width: 1000px) {
    .contact-form {
        min-width: 35rem;
        max-width: 45rem;
        min-height: 26.4rem;
    }

    .message {
        max-width: 45rem;
    }

    
    .name-email .input {
        width: 18rem;
    }

    .input-message {
        height: 5rem;
    }
}

@media only screen and (max-width: 880px) {
    

    .contact-form {
        min-width: 40rem;
    }

    .input {
        margin: 1.5rem 1.5rem 0 1.5rem;
    }


    .err-msg-wrapper {
    width: 25rem;
}
    
}

@media only screen and (max-width: 850px) {

    .message {
        max-width: 30rem
    }

    .contact-form {
        min-width: 30rem;
        max-width: 30rem;
    }

    .name-email {
        flex-direction: column;
    }

    .name-email .input {
        width: 25rem;
    }


    .button {
        width: 15rem;
        padding: .5rem;
    }
}

@media only screen and (max-width: 600px){

    

    .message {
        max-width: 25rem;
        font-size: 1.2rem;
    }

    

    .contact-form {
        min-width: 25rem;
        max-width: 25rem;
    }

    .input {
        margin: .8rem .8rem 0 .8rem;
    }

    .name-email .input {
        width: 21.5rem;
    }

    .err-msg {
        font-size: 1rem;
    }

    .button {
        margin-bottom: 0;
    }
    

}

@media only screen and (max-width: 450px) {

    #contact {
        margin-bottom: 10rem;
    }

    .contact-title {
    font-size: 2.2rem;
    }

    .big {
    font-size: 2.2rem;
    }

    
    .message {
        max-width: 20rem;
        font-size: 1.1rem;
    }

    .contact-form {
        min-width: 20rem;
        max-width: 20rem;
    }

    .name-email .input {
        width: 16.5rem;
    }

    .err-msg {
        font-size: 1rem;
        margin-left: 1.5rem;
    }
}

@media only screen and (max-width: 354px){
    .contact-form {
        min-width: 17rem;
        max-width: 17rem;
    }

    .name-email .input {
        width: 13.5rem;
    }
}
</style>