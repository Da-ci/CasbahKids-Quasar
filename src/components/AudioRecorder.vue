<template>
  <div>
    <div class="column items-center">
      <div class="col-3 q-gutter-xs">
        <!-- <q-btn color="primary" push size="lg" icon="mic" @click="this.record()">
          Record
        </q-btn>
        <q-btn color="primary" push size="lg" icon="stop" @click="this.stop()">Stop</q-btn> -->
        <q-btn @click="this.startTime()">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                fill="currentColor">
                <path d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="9" r="4" />
                <path
                  d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z" />
              </svg>
            </div>
          </div>
          <span>Enregistrer</span>
        </q-btn>
      </div>
    </div>
    <span class="flex flex-center q-mt-md">{{ this.time ? this.time : '00:00' }}</span>
    <div class="column items-center q-pt-md">
      <div class="col">
        <audio controls :src="audio"></audio>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'PageIndex',

  data() {
    return {
      mediaRecorder: null,
      chunks: [],
      audios: [],
      audio: null,
      btnStop: false,
      recorder: false,
      time: '',
      timeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
      running: null,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    test(){
      console.log("buttoning")
    },
    init() {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then((stream) => {
            this.mediaRecorder = new MediaRecorder(stream)

            this.mediaRecorder.ondataavailable = (e) => {
              this.chunks.push(e.data)
            }

            this.mediaRecorder.onstop = (e) => {
              const blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' })
              this.audio = window.URL.createObjectURL(blob)
              this.chunks = []
            }
          })
          .catch(function (err) {
            console.log('The following getUserMedia error occured: ' + err)
          })
      } else {
        alert('getUserMedia not supported on your browser!')
      }
    },
    record() {
      if (this.recorder) return
      this.mediaRecorder.start()
      this.recorder = true
      this.startTime()
    },
    stop() {
      if (!this.recorder) return
      this.recorder = false;
      this.mediaRecorder.stop()
      this.btnStop = false
      this.stopTime()
    },
    startTime() {
      if (this.running) return
      if (this.timeBegan === null || this.timeStopped !== null) {
        this.resetTime()
        this.timeBegan = new Date()
      }

      this.started = setInterval(this.clockRunning, 10)
      this.running = true
    },
    stopTime() {
      console.log("thanos")
      this.running = false
      this.timeStopped = new Date()
      clearInterval(this.started)
    },
    resetTime() {
      this.running = false
      clearInterval(this.started)
      this.stoppedDuration = 0
      this.timeBegan = null
      this.timeStopepd = null
      this.time = ""
    },
    clockRunning() {
      var currentTime = new Date()
      var timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration)
      var min = timeElapsed.getUTCMinutes()
      var sec = timeElapsed.getUTCSeconds()

      this.time =
        this.zeroPrefix(min, 2) + ":" +
        this.zeroPrefix(sec, 2)

    },
    zeroPrefix(num, digit) {
      var zero = '';
      for (var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }

  }
}
/* eslint-disable */
</script>

<style scoped>
button {
  font-family: inherit;
  /* font-size: 20px; */
  background: royalblue;
  color: white;
  /* padding: 0.7em 1em; */
  /* padding-left: 0.9em; */
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.2s;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  transform: translateX(55px) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(115px);
}

button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}
</style>
