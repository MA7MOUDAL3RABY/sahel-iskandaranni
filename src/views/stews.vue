<template>
  <div class="menu">
    <div class="my-10 py-5"></div>
    <h1 class="category-title font-70 text-center">Stews - طواجن</h1>
    <h3 class="category-description font-25 text-center">Request upon - حسب الطلب</h3>
    <h3 class="category-description font-25 text-center">
      ( زيت وليمون – سنجاري – مشوي – مقلي – جريل – صنيه بطاطس )
    </h3>
    <h3 class="category-description font-25 text-center">
      Oil &Lemon- Baked w/Vegetables “Singari” -Grilled - Fried-Griddle – Tray-Baked w/ Potatoes
    </h3>
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
          <!--
          <div class="price-column">
            <div class="food-price">{{ item.price }}</div>
            <div class="calories">{{ item.calories }}CAL</div>
          </div>
          <div class="food-details">
            <div class="food-name">{{ item.name.en }}</div>
            <div v-if="item.name.ar" class="food-description">{{ item.name.ar }}</div>
            <div class="food-nameen">{{ item.name.en }}</div>

            <div v-if="item.englishDescription" class="food-description">
              {{ item.englishDescription }}
            </div>
          </div>
          -->
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
          img: "/food/Stews/Stews1.png",
          name: { en: "Squid Stew", ar: "طاجن سبيط" },
          price: "45",
          rate: null,
          calories: "862"
        },
        {
          img: "/food/Stews/Stews2.png",
          name: { en: "Shrimp Stew ", ar: "طاجن جمبري" },
          price: "45",
          rate: null,
          calories: "980"
        },
        {
          img: "/food/Stews/Stews3.png",
          name: { en: "Mixed Stew ", ar: "طاجن ميكس " },
          price: "45",
          rate: null,
          calories: "548"
        },
        {
          img: "/food/Stews/Stews4.png",
          name: { en: "Shrimp Fajita", ar: "فاهيتا جمبري" },
          price: "45",
          rate: null,
          calories: "872"
        },
        {
          img: "/food/Stews/Stews5.png",
          name: { en: "Squid Fajita", ar: "فاهيتا سبيط" },
          price: "45",
          rate: null,
          calories: "872"
        },
        {
          img: "/food/Stews/Stews6.jpeg",
          name: { en: "Mulukhiyah Stew with Shrimp", ar: "طاجن ملوخية بالجمبري" },
          price: "20",
          rate: null,
          calories: "452"
        },
        {
          img: "/food/Stews/Stews7.jpeg",
          name: { en: "Plain Mulukhiyah Stew", ar: "طاجن ملوخية ساده" },
          price: "10",
          rate: null,
          calories: "380"
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

  .category-description {
    font-size: 20px;
  }
}

/* For medium-sized devices (e.g., tablets) */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .category-title {
    font-size: 50px;
  }

  .category-description {
    font-size: 25px;
  }
}

/* For larger devices (e.g., desktops) */
@media screen and (min-width: 1025px) {
  /* No changes needed for larger devices */
}
</style>
