<template>
  <div class="app-container">
    <NavBar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import NavBar from "./components/navbar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
/* Background Image */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-image: url("@/assets/image036.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

/* Your app container styles */

/* Other styles for your app */
/* For example, you can center the content vertically */
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
