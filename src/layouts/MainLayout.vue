<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="height: 140px">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <div class="q-px-lg q-pt-xl q-mb-md">
          <div class="text-h3">Casbah Kids</div>
          <div class="text-subtitle1">{{ todaysDate }}</div>
        </div>

        <q-img src="../statics/header.jpg" class="header-image absolute-top"></q-img>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above :width="250" :breakpoint="700">
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item to="/dashboard" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="o_grid_view" />
            </q-item-section>

            <q-item-section>
              Dashboard
            </q-item-section>
          </q-item>

          <!-- <q-item to="/add" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="control_point" />
            </q-item-section>

            <q-item-section>
              Ajouter une histoire Version 1
            </q-item-section>
          </q-item> -->

          <q-item to="/add" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="control_point" />
            </q-item-section>

            <q-item-section>
              Ajouter une histoire
            </q-item-section>
          </q-item>

          <q-item to="/show/stories" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="o_format_list_bulleted" />
            </q-item-section>

            <q-item-section>
              Liste des histoires
            </q-item-section>
          </q-item>

          <q-item to="/manage/stories" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="o_manage_search" />
            </q-item-section>

            <q-item-section>
              Gestion d'histoires
            </q-item-section>
          </q-item>

          <q-item to="/show/story" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="o_history_edu" />
            </q-item-section>

            <q-item-section>
              Exemple une histoire
            </q-item-section>
          </q-item>

          <q-item to="/register" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="o_how_to_reg" />
            </q-item-section>

            <q-item-section>
              Inscription
            </q-item-section>
          </q-item>

          <q-item to="/login" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>

            <q-item-section>
              Connection
            </q-item-section>
          </q-item>

          <q-item to="/login" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section>
              Deconnexion
            </q-item-section>
          </q-item>

          <q-item to="/help" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help_outline" />
            </q-item-section>

            <q-item-section>
              Aide
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="../statics/square.jpg" style="height: 142px">
        <div class="absolute-bottom bg-transparent">
          <router-link style="text-decoration: none; color: inherit" to="/profile">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../statics/avatar.png">
              <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
                <strong>Mon profile</strong>
              </q-tooltip>
            </q-avatar>
          </router-link>

          <router-link style="text-decoration: none; color: inherit" to="/profile">
            <div class="text-weight-bold">Ali SI-Larbi</div>
            <div>@ali_silarbi</div>
          </router-link>

        </div>
      </q-img>
    </q-drawer>

    <q-page-container class="bg-grey-3 column">
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { date } from 'quasar'
import axios from 'axios'


export default defineComponent({
  name: 'MainLayout',

  computed: {
    todaysDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  },
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  mounted() {
    // this.checkAuth()
  },
  methods: {
    async checkAuth() {
      const headers = {
        'Accept': 'application/json'
      }

      axios.post('http://127.0.0.1:8000/api/checkAuth', headers)
        .then(function (response) {
          console.log(response);
        })
        .catch((error) => {
          console.log(error)
        });
    },
    
  }



})
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
}
</style>
