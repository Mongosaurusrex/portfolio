import { createWebHistory, createRouter } from 'vue-router';

import WelcomePage from './pages/WelcomePage.vue';
import WorkExperiencePage from './pages/WorkExperiencePage.vue';
import PassionProjectsPage from './pages/PassionProjectsPage.vue';
import ContactPage from './pages/ContactPage.vue';
import Accomplishments from './pages/Accomplishments.vue';
import PredictionsPage from './pages/PredictionsPage.vue';
import UnderConstructionPage from './pages/UnderConstructionPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: WelcomePage,
    meta: {
      title: 'Nathan Dygant | Data Scientist',
      description: 'I am Nathan and I am a data scientist!'
    }
  },
  {
    path: '/work-experience',
    name: 'work-experience',
    component: WorkExperiencePage,
    meta: {
      title: 'Work Experience | Nathan Dygant',
      description: "Nathan Dygant's professional work experience as a data scientist."
    }
  },
  {
    path: '/passion-projects',
    name: 'passion-projects',
    component: PassionProjectsPage,
    meta: {
      title: 'Passion Projects | Nathan Dygant',
      description: "A showcase of Nathan Dygant's personal software and data science projects."
    }
  },
  {
    path: '/certificates',
    name: 'certificates',
    component: Accomplishments,
    meta: {
      title: 'Accomplishments | Nathan Dygant',
      description: "Nathan Dygant's academic programs, courses, and certificates."
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
    meta: {
      title: 'Contact | Nathan Dygant',
      description: 'Get in touch with Nathan Dygant via GitHub, LinkedIn, Kaggle, or email.'
    }
  },
  {
    path: '/allsvenskan-predictions',
    name: 'allsvenskan-predictions',
    component: PredictionsPage,
    meta: {
      title: 'Allsvenskan Predictions | Nathan Dygant',
      description: 'Match and season outcome predictions for Allsvenskan football.'
    }
  },
  {
    path: '/abacus-llm',
    name: 'abacus-llm',
    component: UnderConstructionPage,
    meta: {
      title: 'AbacusLLM | Nathan Dygant',
      description: 'abacusLLM is an LLM project built from scratch by Nathan Dygant. Coming soon.'
    }
  },
  { path: '/knowledge-engine', redirect: '/abacus-llm' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
