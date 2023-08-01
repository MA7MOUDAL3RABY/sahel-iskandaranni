<template>
  <div class="menu">
    <h1 class="category-title font-70">appetisers-salads - المقبلات – السلطات</h1>
    <div class="menu-items">
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" sm="6" v-for="(item, index) in items" :key="index" class="menu-item">
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
          img: "/food/appetizers/appe1.jpeg",
          name: { en: "Green Salad", ar: "سلطة خضراء" },
          price: "5",
          rate: null,
          calories: "15"
        },
        {
          img: "/food/appetizers/appe2.jpeg",
          name: { en: "Sliced Green Salad", ar: "سلطة خضراء طرنشات" },
          price: "5",
          rate: null,
          calories: "14"
        },
        {
          img: "/food/appetizers/appe3.jpeg",
          name: { en: "Pickle", ar: "مخلل" },
          price: "3",
          rate: null,
          calories: "30"
        },
        {
          img: "/food/appetizers/appe4.png",
          name: { en: "Marinated Tomatoes", ar: "طماطم متبله" },
          price: "5",
          rate: null,
          calories: "15"
        },
        {
          img: "/food/appetizers/appe5.jpeg",
          name: { en: "Marinated Eggplant", ar: "باذنجان متبل" },
          price: "5",
          rate: null,
          calories: "18"
        },
        {
          img: "/food/appetizers/appe6.jpeg",
          name: { en: "Baba ghanoush", ar: "بابا غنوج" },
          price: "6",
          rate: null,
          calories: "26"
        },
        {
          img: "/food/appetizers/appe7.jpeg",
          name: { en: "Tahini", ar: "طحينة" },
          price: "5",
          rate: null,
          calories: "23"
        },
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
