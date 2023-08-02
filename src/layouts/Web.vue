<template>
  <div>
    <v-app class="overflow-hidden">
      <loader />
      <app-header></app-header>
      <div class="my-13"></div>
      <v-spacer></v-spacer>
      <router-view></router-view>
      <BackButton />
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    BackButton, // Add the BackButton component to the components list
    Loader, // Add the BackButton component to the components list
  },
  data() {
    return {
      overlay: true
    };
  }
};
</script>

<style lang="scss">
.v-toolbar__content {
  height: 100px !important;
}
</style>
