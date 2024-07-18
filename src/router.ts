import { createMemoryHistory, createRouter } from 'vue-router';

import WelcomePage from './pages/WelcomePage.vue';
import WorkExperiencePage from './pages/WorkExperiencePage.vue';
import PassionProjectsPage from './pages/PassionProjectsPage.vue';
import UnderConstructionPage from './pages/UnderConstructionPage.vue';

const routes = [
  { path: '/', name: 'home', component: WelcomePage },
  { path: '/work-experience', name: 'work-experience', component: WorkExperiencePage },
  { path: '/passion-projects', name: 'passion-projects', component: PassionProjectsPage },
  { path: '/certificates', name: 'certificates', component: UnderConstructionPage },
  { path: '/contact', name: 'contact', component: UnderConstructionPage }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

export default router;
