<template>

    <q-page :class=windowSize()>
        <q-form @submit="onSubmit">
            <q-stepper flat v-model="step" vertical color="primary" animated style="height: 100%">
                <h4 class="flex flex-center" style="padding: 0; margin: 0; margin-bottom: 10px;">Ajouter une histoire
                </h4>
                <q-separator />
                <q-step :name="1" title="Ajouter une image" icon="settings" :done="step > 1">
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <div class="q-pa-md">
                                <div class="q-gutter-y-md column">
                                    <q-input outlined clearable v-model="name" :rules="nameRules" type="text"
                                        label="Titre de l'histoire">
                                    </q-input>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="q-pa-md">
                                <div class="q-gutter-y-md column">
                                    <q-select outlined v-model="category" :rules="categoryRules" :options="options"
                                        label="Catégorie" :dense="dense"></q-select>
                                </div>
                            </div>
                        </div>

                    </div>

                    <q-stepper-navigation>
                        <q-btn @click="step = 2" color="primary" label="Continue" />
                    </q-stepper-navigation>
                </q-step>

                <q-step :name="2" title="Ajouter une photo" icon="create_new_folder" :done="step > 2">
                    <div class="row">
                        <div class="col-md-8 col-xs-12">
                            <div class="q-pa-md">
                                <input type="file" @change="onImageUploadChange" />
                            </div>
                            <div class="q-pa-md">
                                <q-input v-model="description" :rules="descriptionRules" filled type="textarea"
                                    label="Description de l'histoire" hint="Max 150 characters"
                                    accept=".jpg, image/*" />
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12" :class="isMobile() ? 'order-last' : 'order-first' ">
                            <div class="q-pa-md">
                                <q-img :src="url ? url : 'https://cdn.quasar.dev/img/parallax2.jpg'"
                                    class="border-radius" style="aspect-ratio: 1/1; width: 100%;">
                                    <div class="absolute-full text-subtitle2 flex flex-center">
                                        {{ story_title }}
                                    </div>
                                </q-img>
                            </div>
                        </div>

                    </div>
                    <q-stepper-navigation>
                        <q-btn @click="step = 3" color="primary" label="Continue" />
                        <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
                    </q-stepper-navigation>
                </q-step>

                <q-step :name="3" title="Ecrire l'histoire" icon="add_comment" :done="step > 3">
                    <div>
                        <div class="q-pa-md q-gutter-sm">
                            <q-editor v-model="content" :rules="contentRules" min-height="5rem" />
                        </div>
                    </div>
                    <q-stepper-navigation>
                        <q-btn @click="step = 4" color="primary" label="Continue" />
                        <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
                    </q-stepper-navigation>
                </q-step>


                <q-step :name="4" title="Ajouter l'audio" icon="create_new_folder">

                    <q-card flat style="margin-left: -35px;">
                        <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary"
                            align="justify" narrow-indicator>
                            <q-tab name="mails" label="Uploader" />
                            <q-tab name="alarms" label="Enregistrer" />
                        </q-tabs>

                        <q-separator />

                        <q-tab-panels v-model="tab" animated>
                            <q-tab-panel name="mails">
                                <div class="text-h6">Uploader</div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="q-pa-md">
                                            <q-uploader @uploaded="onAudioUpload" url="http://127.0.0.1:8000/api/upload"
                                                style="width: 100%; margin: auto;" accept=".mp3, audio/*" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div class="q-pa-md">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Consequatur laboriosam
                                                libero
                                                neque veniam facere sapiente alias, ratione fuga ducimus
                                                corporis necessitatibus!
                                                Vitae
                                                sint amet doloremque commodi repellendus ea voluptatibus
                                                maiores!</p>
                                        </div>
                                    </div>
                                </div>
                            </q-tab-panel>

                            <q-tab-panel name="alarms">
                                <div class="text-h6">Enregistrer (en developpement)</div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="q-pt-lg">
                                            <AudioRecorder></AudioRecorder>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div class="q-pa-md">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Consequatur laboriosam
                                                libero
                                                neque veniam facere sapiente alias, ratione fuga ducimus
                                                corporis necessitatibus!
                                                Vitae
                                                sint amet doloremque commodi repellendus ea voluptatibus
                                                maiores!</p>

                                        </div>
                                    </div>
                                </div>
                            </q-tab-panel>

                        </q-tab-panels>
                    </q-card>

                    <q-stepper-navigation>
                        <q-btn type="submit" color="primary" label="Enregistrer" />
                        <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
                    </q-stepper-navigation>
                </q-step>

            </q-stepper>

        </q-form>
    </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import AudioRecorder from '../../components/AudioRecorder.vue'
import axios from 'axios'

export default {
    setup() {
        const $q = useQuasar()

        const name = ref('Title')
        const category = ref('category')
        const description = ref('description')
        const content = ref('Histoire de plus de 10 caracteres')
        const picture = ref('')
        const audio = ref('')

        const nameRules = [val => val && val.length > 0 || 'Saisissez le titre de l\'histoire']
        const categoryRules = [val => val && val.length > 0 || 'Choisissez une catégorie']
        const descriptionRules = [val => val && val.length > 0 || 'Saisissez une description de l\'histoire']
        const contentRules = [val => val && val.length > 0 || 'Entrez le contenu de l\'histoire']

        function onRejected() {
            $q.notify({
                type: 'negative',
                message: 'Vous devez uploader une image (.jpg, .jpeg, .png)'
            })
            return { onRejected }
        }
        return {
            dense: ref(false),
            step: ref(1),
            name,
            category,
            description,
            content,
            nameRules,
            categoryRules,
            descriptionRules,
            contentRules,
            picture,
            tab: ref('mails'),
            splitterModel: ref(20),
            options: [
                'Catégorie 1', 'Catégorie 2', 'Catégorie 3', 'Catégorie 4', 'Catégorie 5'
            ],
            audio,
        }
    },
    data() {
        return {
            title: "",
            windowWidth: window.innerWidth,
            url: null,
        };
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth;
        }
        this.bearerToken()
    },
    methods: {
        onImageUploadChange(e) {
            this.url = URL.createObjectURL(e.target.files[0])
            this.picture = new FormData()
            this.picture.append('image', e.target.files[0], e.target.files[0].name)
        },
        onAudioUpload(file) {
            this.audio = new FormData()
            this.audio.append('audio', file.files[0], file.files[0].name)
        },
        onSubmit() {
            this.addStory()
        },
        async addStory() {

            console.log(AudioRecorder.init())

            return

            const token = localStorage.getItem('bearerToken')
            const headers = {
                headers:
                {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            }

            const data = {
                name: this.name,
                category: this.category,
                description: this.description,
                content: this.content,
                picture: this.picture,
                audio: this.audio
            }

            axios.post('http://127.0.0.1:8000/api/story/store', data, headers)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })

        },
        bearerToken() {
            console.log(localStorage.getItem('bearerToken'))
        },
        windowSize() {
            if (599.99 > this.windowWidth > 0)
                return ''
            else if (1023.99 > this.windowWidth && this.windowWidth > 600)
                return 'q-pa-sm'
            else if (1439.99 > this.windowWidth && this.windowWidth > 1024)
                return 'q-pa-md'
            else if (1919.99 > this.windowWidth && this.windowWidth > 1440)
                return 'q-pa-lg'
            else if (this.windowWidth > 1920)
                return 'q-pa-xl'
        },
        isMobile() {
            if (1023.99 > this.windowWidth)
                return true
            else
                return false
        }
    },
    components: {
        AudioRecorder
    }
}
</script>

<style scoped>
.file_input {
    background-color: red;
}
</style>
