<template>
  <div class="menu">
    <div class="my-10 py-5"></div>
    <h1 class="category-title font-70 text-center">Soups - الشوربات</h1>
    <h3 class="category-description font-25 text-center">Request upon - حسب الطلب</h3>
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
          img: "/food/soups/soup1.png",
          name: { en: "Seafood Soup (white - red)", ar: "شوربة السي فود " },
          price: "25",
          rate: null,
          calories: "557"
        },
        {
          img: "/food/soups/soup2.jpeg",
          name: { en: "Shrimp Soup", ar: "شوربة جمبري" },
          price: "20",
          rate: null,
          calories: "432"
        },
        {
          img: "/food/soups/soup3.jpeg",
          name: {
            en: "Sahil Alexandria's Soup",
            ar: "شوربة ساحل إسكندرية "
          },
          price: "30",
          rate: null,
          calories: "690"
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
