<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <v-app-bar color="white" class="d-none d-md-block">
      <v-container>
        <v-row align="center" justify="space-between" class="my-5 my-md-0">
          <v-col cols="12" md="2">
            <v-app-bar-title align="center">
              <router-link to="/" aria-label="الرئيسية">
                <v-img width="150" class="my-2" src="/logo.png" alt="header logo"></v-img>
              </router-link>
            </v-app-bar-title>
          </v-col>
          <v-col cols="12" md="10" class="d-flex flex-column flex-md-row justify-end">
            <router-link
              :aria-label="item.name.en"
              class="menu-item"
              v-for="(item, i) in menu"
              :key="i"
              :to="item.to"
            >{{item.name.en}}</router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <div class="d-block d-md-none">
      <v-app-bar color="white">
        <v-row align="center" justify="space-between" class="my-md-0">
          <v-col cols="3">
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </v-col>
          <v-col cols="4" md="2">
            <v-app-bar-title align="center">
              <router-link aria-label="home , الرئيسية" to="/">
                <v-img width="150" class="my-2" src="/logo.png" alt="header mobile logo"></v-img>
              </router-link>
            </v-app-bar-title>
          </v-col>
        </v-row>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" temporary>
        <div class="d-flex h-100 flex-column justify-space-around px-3 py-5">
          <div v-for="(item, i) in menu" :key="i">
            <router-link
              :aria-label="item.name.en"
              class="menu-item"
              :class="{'active': $route.name == item.name.en}"
              :to="item.to"
            >{{item.name.en}}</router-link>
            <v-divider></v-divider>
          </div>
        </div>
      </v-navigation-drawer>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
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
