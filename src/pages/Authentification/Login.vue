<template>
    <q-layout>
        <q-page class="q-pa-xl background">
            <div class="position">
                <div class="column">
                    <div class="row">
                        <h5 class="text-h5 text-white q-my-md">Connection à Casbah Kids</h5>
                    </div>
                    <q-form @submit="onSubmit" class="q-gutter-md">
                        <div class="row">
                            <q-card flat class="q-pa-lg shadow-1 border-radius">
                                <q-card-section>
                                    <q-input filled outlined clearable color="indigo-1" label-color="indigo-1"
                                        ref="emailRef" v-model="email" type="email" :rules="emailRules" lazy-rules
                                        label="Email" class="q-mb-lg" />

                                    <q-input filled outlined clearable color="indigo-1" label-color="indigo-1"
                                        ref="passwordRef" v-model="password" :rules="passwordRules" type="password"
                                        label="Mot de passe" />
                                </q-card-section>
                                <q-card-actions class="q-px-md">
                                    <!-- <q-btn unelevated color="primary" size="lg" class="full-width" label="Connection"
                                        type="submit" /> -->
                                        <q-btn unelevated color="primary" size="lg" class="full-width" label="Connection"
                                        to="/dashboard" />
                                </q-card-actions>
                                <q-card-section class="text-center q-pa-none">
                                    <p class="text-white">Non enregistré ?
                                        <router-link to="/register">
                                            Créé un compte
                                        </router-link>
                                    </p>
                                </q-card-section>

                            </q-card>
                        </div>
                    </q-form>
                </div>
            </div>
        </q-page>
    </q-layout>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
    setup() {
        const $q = useQuasar()

        const email = ref(null)
        const password = ref(null)

        const emailRules = [val => val && val.length > 0 || 'Saisissez votre email']
        const passwordRules = [val => val && val.length > 8 || 'Votre mot de passe doit contenir au moins au moins 8 caracteres']

        return {
            email,
            password,
            emailRules,
            passwordRules,

            onSubmit() {
                if (email.value === '' || password === '') {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'Vous devez remplir tout les champs'
                    })
                } else {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Vous etes enregistré'
                    })
                }

            },

        }
    },

}
</script>

<style scoped>
.q-card {
    width: 360px;
    background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(21px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
    border: 1px solid rgba(255, 255, 255, 0.16);
}

.position {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
}

.background {
    background-image: url("../../statics/login.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>