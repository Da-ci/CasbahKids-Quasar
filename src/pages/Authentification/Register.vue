<template>
    <q-page class="q-pa-xl background">
        <div class="position">
            <div class="row">
                <h5 class="text-h5 text-white q-my-md">Créez un compte</h5>
            </div>
            <q-card flat class="my-card q-pa-lg ">
                <div class="form_errors">
                    <ul v-for="key in form_errors">
                        <li>{{ key }}</li>
                    </ul>
                </div>
                <q-form @submit="onSubmit()">
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <div class="q-pa-md">
                                <div class="q-gutter-y-md column">
                                    <q-input filled outlined clearable color="indigo-1" label-color="indigo-1"
                                        v-model="first_name" type="text" label="Prénom" :rules="first_nameRules" />
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="q-pa-md">
                                <div class="q-gutter-y-md column">
                                    <q-input filled outlined clearable color="indigo-1" label-color="indigo-1"
                                        v-model="last_name" :rules="last_nameRules" type="text" label="Nom" />
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="q-pa-md">
                                <div class="q-gutter-y-md column">
                                    <q-input filled outlined clearable color="indigo-1" label-color="indigo-1"
                                        v-model="email" :rules="emailRules" type="email" label="Email" />
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="q-pa-md">
                                <div class="q-gutter-y-md column">
                                    <q-input filled outlined clearable color="indigo-1" label-color="indigo-1"
                                        v-model="email_confirmation" :rules="email_confirmationRules" type="email"
                                        label="Confirmation Email" />
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="q-pa-md">
                                <div class="q-gutter-y-md column">
                                    <q-input filled outlined clearable color="indigo-1" label-color="indigo-1"
                                        v-model="password" :rules="passwordRules" type="password"
                                        label="Mot de passe" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <q-card-actions class="q-px-md" style="max-width: 60%; margin: auto;">
                        <q-btn unelevated color="primary" type="submit" size="lg" class="full-width"
                            label="Enregistrer" />
                    </q-card-actions>
                </q-form>

                <q-card-section class="text-center q-pa-none">
                    <p class="text-white">Déja enregistré ?
                        <router-link to="/login">
                            Connectez vous
                        </router-link>
                    </p>
                </q-card-section>
            </q-card>

        </div>
    </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import axios from 'axios'

export default {
    setup() {
        const $q = useQuasar()

        // const first_name = ref(null)
        // const last_name = ref(null)
        // const email = ref(null)
        // const email_confirmation = ref(null)
        // const password = ref(null)

        const first_name = ref('Ali')
        const last_name = ref('Silarbi')
        const email = ref('ali.silarbi00@gmail.com')
        const email_confirmation = ref('ali.silarbi00@gmail.com')
        const password = ref('8689696896')

        const first_nameRules = [val => val && val.length > 0 || 'Saisissez votre prénom']
        const last_nameRules = [val => val && val.length > 0 || 'Saisissez votre nom']
        const emailRules = [val => !val || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ || 'Saisissez votre email']
        const email_confirmationRules = [val => !val === email || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ || 'Saisissez la confirmation de votre email']
        const passwordRules = [val => val && val.length > 8 || 'Votre mot de passe doit contenir au moins 8 caracteres']

        return {
            first_name,
            last_name,
            email,
            email_confirmation,
            password,
            first_nameRules,
            last_nameRules,
            emailRules,
            email_confirmationRules,
            passwordRules,
        }
    },
    data() {
        return {
            form_errors: '',
            title: '',

        }
    },

    methods: {
        isValidEmail() {
            if (email === this.email_confirmation)
                return true
        },
        onSubmit() {
            // if (email.value !== email_confirmation.value) {
            //     $q.notify({
            //         color: 'red-5',
            //         textColor: 'white',
            //         icon: 'warning',
            //         message: 'Veuillez confirmez votre email'
            //     })
            // } else {
            //     $q.notify({
            //         color: 'green-4',
            //         textColor: 'white',
            //         icon: 'cloud_done',
            //         message: 'Vous etes enregistré'
            //     })
            // }
            this.register()
        },
        async register() {

            const headers = {
                'Accept': 'application/json'
            }

            const data = {
                // first_name: this.first_name,
                // last_name: this.last_name,
                // email: this.email,
                // email_confirmation: this.email_confirmation,
                // password: this.password
            }

            axios.post('http://127.0.0.1:8000/api/register', data, headers)
                .then(function (response) {
                    console.log(response);
                })
                .catch((error) => {
                    let obj = error.response.data.errors

                    console.log(obj.email)

                    // let errors = Object.keys(obj)
                    // let messages = Object.values(obj)

                    // messages.forEach(function (messageArray, index) {
                    //     messageArray.forEach(function (message) {
                    //         messages[index] = message
                    //     })
                    // })
                    // // console.log(messages)


                    // errors.forEach(function (errorsArray, index){
                    //     console.log(errorsArray)
                    //     // messages.forEach(function (index){
                    //     //     console.log(errorsArray)
                    //     // })
                    // })

                    // // console.log(messages)


                });
        },

    }

}
</script>

<style scoped>
.q-card {
    background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
    border: 1px solid rgba(255, 255, 255, 0.16);
}

.position {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 1000px;
}

.background {
    background-image: url("../../statics/register.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>