<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import * as Sentry from '@sentry/capacitor'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  methods: {
    captureMessage() {
      console.log('capturing message');
      Sentry.captureMessage('Hola Mundo' + Math.random());

    }
  }
});
</script>