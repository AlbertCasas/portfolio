<template>
<div class="wrapper">
    <NavBar />
    <div class="form-wrapper">
        <div class="form-message">
            <h1 class="contact-title">CONTACT</h1>
            <p class="message">Send me a <span>message</span> or contact me on <a class="linkedin-link" href="https://www.linkedin.com/in/albertcasas3d/" target="_blank"><span>Linkedin</span></a>.</p>
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
    <FooterMobile />
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
.wrapper {
    
    background-color:  #393939;
    width: 100%;
    background-image: url("https://i.ibb.co/HztbQhy/Recurso-25.png");
    background-position: bottom 0 right 0;
    background-size: 19rem;
    background-repeat: no-repeat;
}

.form-wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: transparent;
}

.contact-title {
  color: #1dfcdb;
  font-weight: 900;
  font-size: 2.5rem;
  display: none;
}

.form-message {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 5rem 0 12rem;
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
}


@media only screen and (max-width: 1500px) {
  .wrapper {
    background-image: none;
  }

  .contact-title {
    display: block;
  }

  .form-message {
    margin: 0 5rem 0 8rem;
  }
}

@media only screen and (max-width: 1300px) {
    .contact-form {
        min-width: 45rem;
        max-width: 55rem;
        min-height: 19.4rem;
        max-height: 40rem;
    }

    
    .name-email .input {
        width: 18rem;
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

    .form-message {
        margin-left: 5rem;
    }
    
    .name-email .input {
        width: 18rem;
    }

    .input-message {
        height: 5rem;
    }
}

@media only screen and (max-width: 880px) {
    
    .form-message {
        margin-left: 5rem;
    }

    .contact-form {
        min-width: 40rem;
    }

    .input {
        margin: 1.5rem 1.5rem 0 1.5rem;
    }

    .name-email .input {
        width: 16rem;
    }

    .err-msg-wrapper {
    width: 25rem;
}
    
}

@media only screen and (max-width: 775px) {
    .form-message {
        margin-left: 5rem;
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
    .form-message {
        margin-left: 3rem;
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
    

}

@media only screen and (max-width: 450px) {

    .form-message {
        margin-left: 1.5rem;
        margin-top: 7rem;
        margin-bottom: 7rem;
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
</style>