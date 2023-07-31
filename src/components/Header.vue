<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <v-app-bar color="white">
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col cols="2">
            <v-app-bar-title>
              <v-img width="150" class="my-2" src="logo.png"></v-img>
            </v-app-bar-title>
          </v-col>
          <v-col class="d-flex justify-end">
            <router-link class="menu-item" v-for="(item, i) in menu" :key="i" :to="item.to">{{item.name.en}}</router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: {
            ar: "أسماك",
            en: "Fish"
          },
          to: "/fish"
        },
        {
          name: {
            ar: "الطواجن",
            en: "Stews"
          },
          to: "/stews"
        },
        {
          name: {
            ar: "الأرز – مكرونة",
            en: "Rice & Pasta"
          },
          to: "/rice-pasta"
        },
        {
          name: {
            ar: "الشوربات",
            en: "Soups"
          },
          to: "/soups"
        },
        {
          name: {
            ar: "الوجبات",
            en: "Meals"
          },
          to: "/meals"
        },
        {
          name: {
            ar: "المقبلات – السلطات",
            en: "Appetisers & Salads"
          },
          to: "/appetisers-salads"
        },
        {
          name: {
            ar: "المشروبات والعصائر",
            en: "Beverages & Juices"
          },
          to: "/beverages-juices"
        }
      ]
    };
  }
};
</script>

<style>
</style>
