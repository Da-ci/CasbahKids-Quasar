
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
    path: '/login',
    name: 'login',
    component: () => import('layouts/AuthentificationLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/Authentification/Login.vue') }
    ],
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('layouts/AuthentificationLayout.vue'),
    children: [
      { path: '/register', component: () => import('pages/Authentification/Register.vue') }
    ],
  },
  {
    path: '/dashboard',
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
