import { createMemoryHistory, createRouter } from 'vue-router';

import WelcomePage from './pages/WelcomePage.vue';
import WorkExperiencePage from './pages/WorkExperiencePage.vue';
import UnderConstructionPage from './pages/UnderConstructionPage.vue';

const routes = [
  { path: '/', name: 'home', component: WelcomePage },
  { path: '/work-experience', component: WorkExperiencePage },
  { path: '/passion-projects', component: UnderConstructionPage },
  { path: '/certificates', component: UnderConstructionPage },
  { path: '/contact', component: UnderConstructionPage }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

export default router;
