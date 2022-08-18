import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import * as Sentry from '@sentry/capacitor'
import * as SentryVue from '@sentry/vue'

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
    Sentry.init(
      {
        app: app,
        dsn: `https://4079af8b316240ea9453eb0a23b715cc@o447951.ingest.sentry.io/5522756`,
        release: `myapp@${process.env.npm_package_version}`,
        dist: '1',
        tracesSampleRate: 0.1,
        debug: true
      },
      SentryVue.init
    );

router.isReady().then(() => {
  app.mount('#app');
});