import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  MdWork,
  FaProjectDiagram,
  LaCertificateSolid,
  MdContactpage,
  BiArrowLeftSquareFill,
  GiCrane
} from 'oh-vue-icons/icons';

import router from './router';

addIcons(
  MdWork,
  FaProjectDiagram,
  LaCertificateSolid,
  MdContactpage,
  BiArrowLeftSquareFill,
  GiCrane
);

createApp(App).use(router).component('v-icon', OhVueIcon).mount('#app');
