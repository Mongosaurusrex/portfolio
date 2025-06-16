import { createMemoryHistory, createRouter } from 'vue-router';

import WelcomePage from './pages/WelcomePage.vue';
import WorkExperiencePage from './pages/WorkExperiencePage.vue';
import PassionProjectsPage from './pages/PassionProjectsPage.vue';
import ContactPage from './pages/ContactPage.vue';
import Accomplishments from './pages/Accomplishments.vue';
import BlogEntry from './pages/BlogEntry.vue';
import Posts from './pages/Posts.vue';

const routes = [
  { path: '/', name: 'home', component: WelcomePage },
  { path: '/work-experience', name: 'work-experience', component: WorkExperiencePage },
  { path: '/passion-projects', name: 'passion-projects', component: PassionProjectsPage },
  { path: '/certificates', name: 'certificates', component: Accomplishments },
  { path: '/contact', name: 'contact', component: ContactPage },
  { path: '/posts', name: 'posts', component: Posts },
  {
    path: '/blog/:id',
    name: 'blog',
    component: BlogEntry
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

export default router;
