<template>
    <q-page :class=windowSize()>
  
      <q-card flat class="my-card q-pa-lg" style="margin-top: -5px;">
        <h5 class="flex flex-center">Modifier votre profil</h5>
        <q-separator inset />
        <q-card-section>
  
          <div class="container">
            <q-img class="image" :src="url" spinner-color="white" />
            <div class="overlay">
              <div class="text">
                <button class="button">Modifier</button>
              </div>
            </div>
          </div>
  
          <p class="name">Ali Silarbi</p>
  
          <q-form>
  
  
            <div class="row">
  
              <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3 ">
                <div class="q-pa-md">
                  <div class="q-gutter-y-md column">
                    <q-input outlined clearable v-model="first_name" :rules="first_nameRules" type="text" label="Prénom">
                    </q-input>
                  </div>
                </div>
              </div>
  
              <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3">
                <div class="q-pa-md">
                  <div class="q-gutter-y-md column">
                    <q-input outlined clearable v-model="last_name" :rules="last_nameRules" type="text" label="Nom">
                    </q-input>
                  </div>
                </div>
              </div>
  
              <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3">
                <div class="q-pa-md ">
                  <q-input outlined v-model="currentDate" mask="date" :rules="['date']" type="text" >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-date v-model="currentDate"  :rules="dateRules" minimal>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
              </div>
  
              <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3">
                <div class="q-pa-md">
                  <div class="q-gutter-y-md column">
                    <q-input clearable outlined v-model="email" :rules="emailRules" type="email" label="Email">
                    </q-input>
                  </div>
                </div>
              </div>
  
            </div>
  
            <div class="q-pa-md" style="text-align: right">
              <q-btn color="primary" type="submit" label="Modifier" />
            </div>
  
          </q-form>
  
        </q-card-section>
      </q-card>
    </q-page>
  
  </template>
  
  <script>
  import { useQuasar, date } from 'quasar'
  import { computed, onMounted, onUnmounted, ref, defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'IndexPage',
    setup() {
      const url = ref('https://placeimg.com/500/300/nature')
      const url2 = ref('https://placeimg.com/500/300/nature')
  
      const $q = useQuasar()
  
      const first_name = ref('')
      const last_name = ref('')
      const currentDate = ref(date.formatDate(Date.now(), 'YYYY-MM-DD'))
      const email = ref('')
  
      const first_nameRules = [val => val && val.length > 0 || 'Veuillez saisir votre prénom']
      const last_nameRules = [val => val && val.length > 0 || 'Veuillez saisir votre nom']
      const emailRules = [val => val && val.length > 0 || 'Veuillez saisir votre email']
  
      return {
        url,
        first_name,
        last_name,
        currentDate,
        email,
        first_nameRules,
        last_nameRules,
        emailRules,
  
        onSubmit() {
          if (first_name.value === '' || last_name.value === '' || email.value === '' || currentDate.value === '') {
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
        windowWidth: window.innerWidth,
      }
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
      }
    },
    computed: {
      todaysDate() {
        const timeStamp = Date.now()
        return date.formatDate(timeStamp, 'YYYY-DD-MM')
  
      }
    },
  })
  </script>
  
  
  <style scoped>
  .content {
    width: 100%;
    max-width: 100%;
    border-radius: 4px;
  }
  
  .container {
    position: relative;
    width: 170px;
    height: 170px;
    margin: auto;
    margin-bottom: 30px;
  }
  
  .image {
    display: block;
    width: 170px;
    height: 170px;
    border-radius: 50%;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    border-radius: 50%;
  }
  
  .container:hover .overlay {
    opacity: 5;
  }
  
  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  /* From uiverse.io by @WhiteNervosa */
  .button {
    width: 100px;
    height: 30px;
    font-size: 16px;
    background: transparent;
    border: none;
    position: relative;
    color: #f0f0f0;
    z-index: 1;
  }
  
  .button::after,
  .button::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all .4s;
  }
  
  .button::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 4px;
  }
  
  .button::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    border-radius: 50px;
  }
  
  .button:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }
  
  .button:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }
  
  .button:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }
  
  .name {
    text-align: center;
    font-size: medium;
    font-weight: 500;
    letter-spacing: 1px;
  }
  </style>