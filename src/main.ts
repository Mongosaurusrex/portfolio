import './assets/main.css';

import { createApp, provide, h } from 'vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  MdWork,
  FaProjectDiagram,
  LaCertificateSolid,
  MdContactpage,
  BiArrowLeftSquareFill,
  GiCrane,
  PrSpinner,
  MdEmail,
  BiGithub,
  BiLinkedin,
  BiMedium
} from 'oh-vue-icons/icons';
import { DefaultApolloClient } from '@vue/apollo-composable';

import App from './App.vue';
import router from './router';
import createApolloClient from './apollo';

addIcons(
  MdWork,
  FaProjectDiagram,
  LaCertificateSolid,
  MdContactpage,
  BiArrowLeftSquareFill,
  GiCrane,
  PrSpinner,
  MdEmail,
  BiGithub,
  BiLinkedin,
  BiMedium
);

createApp({
  setup() {
    provide(DefaultApolloClient, createApolloClient());
  },

  render: () => h(App)
})
  .use(router)
  .component('v-icon', OhVueIcon)
  .mount('#app');
