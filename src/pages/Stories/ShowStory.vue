<template>
    <q-page :class=windowSize()>

        <q-card flat class="my-card content q-pa-lg box-shadow">
            <h5>Titre de l'histoire</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ipsum adipisci deserunt! Saepe,
            pariatur unde quidem placeat ipsam veniam perspiciatis commodi officiis tempora similique nostrum quis
            veritatis corporis ullam?s
        </q-card>

        <q-card flat class="my-card audio q-pa-lg">
            <div class="name">{{ title }}</div>
            <audio-player ref="audioPlayer" :audio-list="audioList.map((elm) => elm.url)"
                :before-play="handleBeforePlay" show-play-button="false" />
        </q-card>

    </q-page>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from "vue"
import AudioPlayer from "@d1ci/vue-audio-player-updated";


export default {
    components: {
        AudioPlayer,
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
.name {
    text-align: center;
    line-height: 50px;
    font-weight: 700;
    font-size: 18px;
}

.content {
    width: 100%;
    max-width: 100%;
    border-radius: 4px;
    height: calc(100vh - 360px);
    max-height: calc(100vh - 360px);
    overflow-y: auto;
    margin-bottom: 5px;
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
</style>