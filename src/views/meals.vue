<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="menu">
    <div class="my-10 py-5"></div>
    <h1 class="category-title font-70 my-10 text-center">Meals | الوجبات – السلطات</h1>
    <div class="my-10"></div>

    <div class="menu-items">
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="4"
          sm="6"
          v-for="(item, index) in items"
          :key="index"
          class="menu-item"
        >
          <MenuCard :index="index" :item="item" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import MenuCard from "@/components/MenuCard.vue";
export default {
  components: { MenuCard },
  data() {
    return {
      items: [
        {
          img: "/food/meals/meal1.jpeg",
          name: { en: "Grey Mullet Meal", ar: "وجبة بوري " },
          price: "40",
          rate: null,
          calories: "876"
        },
        {
          img: "/food/meals/meal2.jpeg",
          name: { en: "Tilapia Meal", ar: "وجبة بلطي " },
          price: "25",
          rate: null,
          calories: "689"
        },
        {
          img: "/food/meals/meal3.png",
          name: { en: "Gilthead Bream Meal", ar: "وجبة دنيٍس" },
          price: "45",
          rate: null,
          calories: "567"
        },
        {
          img: "/food/meals/meal4.jpeg",
          name: {
            en:
              "Sahil Alexandria's Meal (1 Sea Bream fish-4 Shrimp Skewers-100gm Squid-Seafood Soup-Rice-Salads)",
            ar: "وجبة ساحل إسكندرية"
          },
          price: "75",
          rate: null,
          calories: "1180"
        }
        // Add more fish items here as needed
      ]
    };
  }
};
</script>
<style>
/* Your existing styles here */

/* Media Queries for Responsive Design */

/* For smaller devices (e.g., phones) */
@media screen and (max-width: 768px) {
  .category-title {
    font-size: 40px;
  }
}

/* For medium-sized devices (e.g., tablets) */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .category-title {
    font-size: 50px;
  }
}

/* For larger devices (e.g., desktops) */
@media screen and (min-width: 1025px) {
  /* No changes needed for larger devices */
}
</style>
