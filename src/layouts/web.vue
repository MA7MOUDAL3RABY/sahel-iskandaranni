<template>
  <div>
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
    NavBar
  }
};
</script>

<style>
</style>