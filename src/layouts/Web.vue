<template>
  <div>
    <v-app>
      <header>
        <v-app-bar color="white">
          <v-row justify="between">
            <v-col cols="2">
              <v-img class="my-2" src="@/assets/logo.png"></v-img>
            </v-col>
            <v-col>
              <v-item-list>test</v-item-list>
            </v-col>
          </v-row>
        </v-app-bar>
      </header>

      <v-container>
        <v-btn color="primary">Click me</v-btn>
      </v-container>

      <footer></footer>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true
    };
  }
};
</script>
