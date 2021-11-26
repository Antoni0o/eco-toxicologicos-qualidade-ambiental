import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About/'),
  },
  {
    path: '/materias/plastico',
    name: 'Plastico',
    component: () => import('../views/Subjects/Plastic.vue'),
  },
  {
    path: '/materias/agrotoxicos',
    name: 'Agrotoxicos',
    component: () => import('../views/Subjects/Pesticides.vue'),
  },
  {
    path: '/materias/farmacos',
    name: 'Farmacos',
    component: () => import('../views/Subjects/Pharmaceuticals.vue'),
  },
  {
    path: '/materias/punicoes-legais-pelo-descarte-incorreto-de-lixo',
    name: 'PunicoesDescarteDeLixo',
    component: () => import('../views/Subjects/WasteDisposalPunishments.vue'),
  },
  {
    path: '/materias/quais-sao-os-principais-problemas-causados-pelo-descarte-inadequado-de-lixo',
    name: 'ProblemasDescarteDeLixo',
    component: () => import('../views/Subjects/MainProblemsByWasteDisposal.vue'),
  },
  {
    path: '/materias/a-conservacao-dos-corpos-hidricos-como-garantia-da-qualidade-da-agua-para-consumo-humano',
    name: 'ConservacaoDosCorposHidricos',
    component: () => import('../views/Subjects/ConservationOfWaterBodies.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
