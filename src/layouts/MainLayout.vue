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

          <q-item to="/show/story" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="o_reorder" />
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
          <router-link style="text-decoration: none; color: inherit" to="/show/profile">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../statics/avatar.png">
              <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
                <strong>Tooltip</strong> on <em>right</em>
              </q-tooltip>
            </q-avatar>
          </router-link>

          <router-link style="text-decoration: none; color: inherit" to="/show/profile">
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
import {defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

import { date } from 'quasar'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },
  computed: {
    todaysDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  },
  
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

})
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  // opacity: 0.2;
  // filter: grayscale(100%);
}
</style>
