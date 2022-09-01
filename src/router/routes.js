
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'light', component: () => import('pages/Light.vue') },
      { path: 'ten', component: () => import('pages/Ten.vue') },
      { path: 'dabei', component: () => import('pages/DaBei.vue') },
      { path: 'lengyan', component: () => import('pages/LengYan.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
