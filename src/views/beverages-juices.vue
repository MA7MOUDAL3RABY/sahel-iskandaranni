<template>
  <div class="menu">
        <div class="my-10 py-5"></div>

    <h1 class="category-title font-70 text-center">beverages-juices | المشروبات والعصائر</h1>
        <div class="my-5 py-5"></div>
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
          img: "/food/drinkes/drink1.webp",
          name: { en: "Lemon Mint", ar: "ليمون نعناع" },
          price: "12",
          rate: null,
          calories: "45"
        },
        {
          img: "/food/drinkes/drink2.webp",
          name: { en: "Mango", ar: "مانجو" },
          price: "14",
          rate: null,
          calories: "16"
        },
        {
          img: "/food/drinkes/drink3.webp",
          name: { en: "Mojito", ar: "موهيتو" },
          price: "15",
          rate: null,
          calories: "24"
        },
        {
          img: "/food/drinkes/drink4.webp",
          name: { en: "Orange", ar: "برتقال" },
          price: "14",
          rate: null,
          calories: "45"
        },
        {
          img: "/food/drinkes/drink5.webp",
          name: { en: "Small Water Bottle", ar: "مياة صغير" },
          price: "1",
          rate: null,
          calories: "0"
        },
        {
          img: "/food/drinkes/drink6.webp",
          name: { en: "Large Water Bottle", ar: "مياة كبيرة" },
          price: "2",
          rate: null,
          calories: "0"
        },
        {
          img: "/food/drinkes/drink7.webp",
          name: { en: "Pepsi – Citrus – 7UP", ar: "بيبسي – حمضيات – سفن أب" },
          price: "3",
          rate: null,
          calories: "250"
        },
        // Add more drink items here as needed
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
