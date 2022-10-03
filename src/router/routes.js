import checkAuth from '../middleware/CheckAuth.js'

const routes = [
  {
    path: '/',
    alias: '',
    redirect: '/landing',
  },
  {
    path: '/landing',
    component: () => import('pages/Landing.vue')
  },
  {
    name: 'login',
    component: () => import('layouts/AuthentificationLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/Authentification/Login.vue') }
    ],
    meta: {
      middleware: checkAuth()
    }
  },
  {
    name: 'register',
    component: () => import('layouts/AuthentificationLayout.vue'),
    children: [
      { path: '/register', component: () => import('pages/Authentification/Register.vue') }
    ],
  },
  {
    name: 'dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
      { path: '/profile', component: () => import('pages/MyProfile.vue') },
      { path: '/show/story', component: () => import('pages/Stories/ShowStory.vue') },
      { path: '/show/stories', component: () => import('pages/Stories/ShowStories.vue') },
      { path: '/add', component: () => import('pages/Stories/AddStory.vue') },
      { path: '/manage/stories', component: () => import('pages/Stories/StoriesManagement.vue') },
      { path: '/show/profile/', component: () => import('pages/ShowProfile.vue') }
    ],
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
