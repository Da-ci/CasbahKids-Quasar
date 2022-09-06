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
                                    <q-input outlined clearable v-model="story_title" :rules="story_titleRules"
                                        type="text" label="Titre de l'histoire">
                                    </q-input>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <div class="q-pa-md">
                                <div class="q-gutter-y-md column">
                                    <q-select outlined v-model="story_category" :rules="story_categoryRules"
                                        :options="options" label="Catégorie" :dense="dense"></q-select>
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
                        <div class="col-md-6 col-xs-12">
                            <div class="q-pa-md">
                                <q-img :src="'https://cdn.quasar.dev/img/parallax2.jpg'" class="border-radius">
                                    <div class="absolute-full text-subtitle2 flex flex-center">
                                        {{ story_title }}
                                    </div>
                                </q-img>
                            </div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div class="q-pa-md">
                                <q-file outlined label="Ajouter une photo">
                                    <template v-slot:prepend>
                                        <q-icon name="attach_file" />
                                    </template>
                                </q-file>
                            </div>
                            <div class="q-pa-md">
                                <q-input v-model="story_description" :rules="story_descriptionRules" filled
                                    type="textarea" label="Description de l'histoire" hint="Max 150 characters"
                                    accept=".jpg, image/*" />
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
                            <q-editor v-model="story_content" :rules="story_contentRules" min-height="5rem" />
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
                            <q-tab-panel name="mails" style="padding: 0px;">
                                <div class="text-h6">Uploader</div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <div class="q-pa-md">
                                            <q-uploader url="http://localhost:4444/upload"
                                                style="width: 100%; margin: auto;  " />
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

                            <q-tab-panel name="alarms" style="padding: 0px;  overflow-y: hidden;">
                                <div class="text-h6">Enregistrer (en developpement)</div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <AudioRecorder></AudioRecorder>
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
import { computed, onMounted, onUnmounted, ref } from 'vue'
import AudioRecorder from '../../components/AudioRecorder.vue'

export default {
    setup() {

        const $q = useQuasar()

        const story_title = ref('')
        const story_category = ref('')
        const story_description = ref('')
        const story_content = ref('')

        const story_titleRules = [val => val && val.length > 0 || 'Saisissez le titre de l\'histoire']
        const story_categoryRules = [val => val && val.length > 0 || 'Choisissez une catégorie']
        const story_descriptionRules = [val => val && val.length > 0 || 'Saisissez une description de l\'histoire']
        const story_contentRules = [val => val && val.length > 0 || 'Entrez le contenu de l\'histoire']

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
            story_title,
            story_category,
            story_description,
            story_content,
            story_titleRules,
            story_categoryRules,
            story_descriptionRules,
            story_contentRules,
            tab: ref('mails'),
            splitterModel: ref(20),
            options: [
                'Catégorie 1', 'Catégorie 2', 'Catégorie 3', 'Catégorie 4', 'Catégorie 5'
            ],

            onSubmit() {
                if (story_title.value === '' || story_category.value === '' || story_description.value === '' || story_content.value === '') {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'Veuillez remplir tout les champs'
                    })
                }
            }

        }
    },
    data() {
        return {
            title: "",
            audioList: [
                {
                    name: "audio 1",
                    url: "http://www.ytmp3.cn/down/76865.mp3",
                },
                {
                    name: "audio 2",
                    url: "http://www.ytmp3.cn/down/76857.mp3",
                },
            ],
            windowWidth: window.innerWidth,
        };
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth;
        }
    },
    methods: {
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
            if (599.99 > this.windowWith)
                return true
            else
                return false
        }
    },
    components: {
        AudioRecorder,
        AudioRecorder
    }
}
</script>
