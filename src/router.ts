import { createWebHistory, createRouter } from 'vue-router';

import WelcomePage from './pages/WelcomePage.vue';
import WorkExperiencePage from './pages/WorkExperiencePage.vue';
import PassionProjectsPage from './pages/PassionProjectsPage.vue';
import ContactPage from './pages/ContactPage.vue';
import Accomplishments from './pages/Accomplishments.vue';

const routes = [
  { path: '/', name: 'home', component: WelcomePage },
  { path: '/work-experience', name: 'work-experience', component: WorkExperiencePage },
  { path: '/passion-projects', name: 'passion-projects', component: PassionProjectsPage },
  { path: '/certificates', name: 'certificates', component: Accomplishments },
  { path: '/contact', name: 'contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
