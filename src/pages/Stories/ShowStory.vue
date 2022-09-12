<template>
    <q-page :class=windowSize()>
        <q-page-sticky expand position="top" style="z-index: 1">
            <q-card flat class="my-card audio q-pa-lg">
                <div class="name">{{ title }}</div>
                <audio-player ref="audioPlayer" :audio-list="audioList.map((elm) => elm.url)"
                    :before-play="handleBeforePlay" show-play-button="false" />
            </q-card>
        </q-page-sticky>

        <div class="content-container">
            <div class="story-information">
                <div class="user-card">
                    <div class="information">
                        <div style="border-radius: 50%; height: 90px; width: 90px;">
                            <img src="https://cdn.quasar.dev/img/avatar2.jpg"
                                style="border-radius: 50%; height: 100%; width: 100%;">
                        </div>
                        <div class="column" style="margin-left: 8px; margin-top: 15px;">
                            <span class="text-weight-light" style="font-size: 11px; opacity: 0.6">Crée par : </span>
                            <span class="text-weight-medium" style="font-size: 14px">Yacine Loldj</span>
                        </div>
                    </div>
                    <div style="margin-top: 25px;">
                        <q-btn outline color="primary" label="Consulter" />
                    </div>
                </div>
                <div class="manage-story">
                    <q-btn outline color="primary" label="Désapprouver" @click="disapprove" />
                    <q-btn unelevated color="primary" label="Approuver" />

                </div>

            </div>

            <div style="width: 100%;">
                <div flat class="content q-pa-lg">
                    <h5>Titre de l'histoire</h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt!
                    Saepe,
                    pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique
                    nostrum quis
                    veritatis corporis ullam?s
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt!
                    Saepe,
                    pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique
                    nostrum quis
                    veritatis corporis ullam?s

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt!
                    Saepe,
                    pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique
                    nostrum quis
                    veritatis corporis ullam?s
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt!
                    Saepe,
                    pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique
                    nostrum quis
                    veritatis corporis ullam?s

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt!
                    Saepe,
                    pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique
                    nostrum quis
                    veritatis corporis ullam?s
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt!
                    Saepe,
                    pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique
                    nostrum quis
                    veritatis corporis ullam?s
                </div>
            </div>
        </div>

    </q-page>
</template>

<script>
import AudioPlayer from "@d1ci/vue-audio-player-updated";
import { useQuasar } from "quasar";

export default {
    components: {
        AudioPlayer,
    },
    setup() {
        const $q = useQuasar()

        return {
            disapprove() {
                console.log("im in");
                $q.dialog({
                    title: 'Confirmer',
                    message: 'Citez la raison (Minimum 10 characteres)',
                    prompt: {
                        model: '',
                        isValid: val => val.length > 10, // << here is the magic
                        type: 'text' // optional
                    },
                    cancel: true,
                    persistent: true
                }).onOk(data => {
                    // console.log('>>>> OK, received', data)
                })
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
        this.$nextTick(() => {
            this.title = this.audioList[0].name;
            this.$refs.audioPlayer.play(); // Can realize auto play
        });
        window.onresize = () => {
            this.windowWidth = window.innerWidth;
        }
    },

    methods: {
        // Use this function if you want to do something before you start playing
        handleBeforePlay(next) {
            this.title = this.audioList[this.$refs.audioPlayer.currentPlayIndex].name;

            next(); // Start play
        },
        windowSize() {

            if (599.99 > this.windowWidth > 0)
                return 'margin-bottom'
            else if (1023.99 > this.windowWidth && this.windowWidth > 600)
                return 'q-pa-sm'
            else if (1439.99 > this.windowWidth && this.windowWidth > 1024)
                return 'q-pa-md'
            else if (1919.99 > this.windowWidth && this.windowWidth > 1440)
                return 'q-pa-lg'
            else if (this.windowWidth > 1920)
                return 'q-pa-xl'
        }
    },
};
</script>

<style scoped>
.content-container {
    margin-top: 190px;
    margin-bottom: 5px;
    display: flex;
    z-index: -1;
}

.story-information {
    border-radius: 4px;
    margin-right: 8px;
    width: 100%;
}

.user-card {
    display: flex;
    padding: 20px;
    border-radius: 4px;
    background-color: white;
}

.information {
    display: flex;
    flex-direction: column;
}

.manage-story {
    width: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    height: 100;
}

.content {
    border-radius: 4px;
    overflow-y: auto;
    background-color: #ffffff;
    width: 100%;
    min-height: 335px;
}

.name {
    text-align: center;
    line-height: 50px;
    font-weight: 700;
    font-size: 18px;
}

.content>h5 {
    margin-top: 0px;
    text-align: center;
    font-weight: 500;
    letter-spacing: 1px;
}

.audio {
    width: 100%;
    max-width: 100%;
    border-radius: 4px;
    background-color: white;
}

@media only screen and (max-width: 800px) {
    .content-container {
        display: block;
    }

    .user-card {
        margin-bottom: 4px;
        justify-content: space-between;
    }

    .information {
        flex-direction: row;
    }
    .content {
        margin-top: -3px;
    }
}

@media only screen and (min-width: 800px) {
    .user-card {
        margin-bottom: 10px;
        height: 250px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .story-information {
        width: 100%;
        max-width: 400px;
    }
}

@media only screen and (max-width: 600px) {
    .content-container {
        margin-top: 190px;
    }

    .content {
        margin-top: -3px;
    }


}
</style>