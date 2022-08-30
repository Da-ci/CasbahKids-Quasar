<template>

    <q-page :class=windowSize() style="max-width: 100%;">
        <q-card flat style="border-radius: 0px;">
            <h2 class="flex flex-center text-bold text-h5 q-pa-md">Les dernieres histoires</h2>
            <q-separator inset />
        </q-card>
        <q-card flat class="my-card q-pa-xs"
            style="overflow-x: scroll; padding-left: 185px; border-top-left-radius: 0px; border-top-right-radius: 0px;">
            <div class=" q-pa-lg flex_container">
                <div v-for="index in 10" class="card q-ma-xs" style="width: 100%">
                    <div class="card-info">
                        <p class="title">La belle et la bete</p>
                        <p class="subtitle">Yacine Loldj</p>
                    </div>
                    <router-link style="text-decoration: none; color: inherit" to="/">
                        <div class="card-bio">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </q-card>

        <q-table flat class="my-sticky-dynamic q-mt-lg" title="Treats" :rows="rows" :columns="columns"
            :loading="loading" row-key="index" virtual-scroll :virtual-scroll-item-size="48"
            :virtual-scroll-sticky-size-start="48" :pagination="pagination" :rows-per-page-options="[0]"
            @virtual-scroll="onScroll" />
    </q-page>
</template>
  
  <script>
import { computed, onMounted, onUnmounted, ref, nextTick } from 'vue'
import '../css/dashboard.css'

const columns = [
    {
        name: 'index',
        label: '#',
        field: 'index'
    },
    {
        name: 'name',
        required: true,
        label: 'Dessert (100g serving)',
        align: 'left',
        field: row => row.name,
        format: val => val,
        sortable: true
    },
    { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
    { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
    { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
    { name: 'protein', label: 'Protein (g)', field: 'protein' },
    { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
    { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const seed = [
    {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%'
    },
    {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%'
    },
    {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%'
    },
    {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%'
    },
    {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%'
    },
    {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%'
    },
    {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%'
    },
    {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%'
    },
    {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: '12%',
        iron: '6%'
    }
]

// we generate lots of rows here
let allRows = []
for (let i = 0; i < 1000; i++) {
    allRows = allRows.concat(seed.slice(0).map(r => ({ ...r })))
}
allRows.forEach((row, index) => {
    row.index = index
})

const pageSize = 50
const lastPage = Math.ceil(allRows.length / pageSize)

export default {
    setup() {
        const url = ref('https://placeimg.com/500/300/nature?t=' + Math.random())
        const url2 = ref('https://placeimg.com/500/300/nature?t=' + Math.random())

        const nextPage = ref(2)
        const loading = ref(false)

        const rows = computed(() => allRows.slice(0, pageSize * (nextPage.value - 1)))


        return {
            slide: ref(1),
            autoplay: ref(false),
            url,
            url2,
            refresh() {
                url.value = 'https://placeimg.com/500/300/nature?t=' + Math.random()
                url2.value = 'https://placeimg.com/500/300/nature?t=' + Math.random()
            },


            columns,
            rows,
            nextPage,
            loading,
            pagination: { rowsPerPage: 0 },
            onScroll({ to, ref }) {
                const lastIndex = rows.value.length - 1

                if (loading.value !== true && nextPage.value < lastPage && to === lastIndex) {
                    loading.value = true

                    setTimeout(() => {
                        nextPage.value++
                        nextTick(() => {
                            ref.refresh()
                            loading.value = false
                        })
                    }, 500)
                }
            }

        }
    },
    data() {
        return {
            windowWidth: window.innerWidth
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
                return 'q-pa-xs'
            else if (1023.99 > this.windowWidth && this.windowWidth > 600)
                return 'q-pa-sm'
            else if (1439.99 > this.windowWidth && this.windowWidth > 1024)
                return 'q-pa-md'
            else if (1919.99 > this.windowWidth && this.windowWidth > 1440)
                return 'q-pa-lg'
            else if (this.windowWidth > 1920)
                return 'q-pa-xl'
        }
    }
}
</script>
  
  
  <style scoped>
  /* @import '../css/dashboard_latest_stories.css'; */
  
  .flex_container {
      display: flex;
      justify-content: space-around;
  }
  </style>
  
  <style lang="sass">
  .my-sticky-dynamic
    /* height or max-height is important */
    height: 410px
  
    .q-table__top,
    .q-table__bottom,
    thead tr:first-child th /* bg color is important for th; just specify one */
      background-color: #fff
  
    thead tr th
      position: sticky
      z-index: 1
    /* this will be the loading indicator */
    thead tr:last-child th
      /* height of all previous header rows */
      top: 48px
    thead tr:first-child th
      top: 0
  </style>
  
  