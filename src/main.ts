import './assets/main.css';

import { createApp, provide, h } from 'vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  MdWork,
  FaProjectDiagram,
  LaCertificateSolid,
  BiArrowLeftSquareFill,
  GiCrane,
  PrSpinner,
  MdEmail,
  BiGithub,
  BiLinkedin,
  CoKaggle,
  CoPencil
} from 'oh-vue-icons/icons';
import { DefaultApolloClient } from '@vue/apollo-composable';

import App from './App.vue';
import router from './router';
import createApolloClient from './apollo';

addIcons(
  MdWork,
  FaProjectDiagram,
  LaCertificateSolid,
  BiArrowLeftSquareFill,
  GiCrane,
  PrSpinner,
  MdEmail,
  BiGithub,
  BiLinkedin,
  CoKaggle,
  CoPencil
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
