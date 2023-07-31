<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="menu">
    <h1 class="category-title font-70 text-center">Soups - الشوربات</h1>
    <h3 class="category-description font-25 text-center">Request upon - حسب الطلب</h3>
    <div class="menu-items">
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" v-for="(item, index) in items" :key="index" class="menu-item">
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
          img: "salmon.png",
          name: { en: "Seafood Soup (white - red)", ar: "شوربة السي فود ( ابيض / أحمر )" },
          price: "25",
          rate: null,
          calories: "557"
        },
        {
          img: "salmon.png",
          name: { en: "Shrimp Soup", ar: "شوربة جمبري" },
          price: "20",
          rate: null,
          calories: "432"
        },
        {
          img: "salmon.png",
          name: {
            en: "Sahil Alexandria's Soup (Shrimp-Squid-Greasy Grouper Fillet Crab-Mussels)",
            ar: "شوربة ساحل إسكندرية (جمبري – سبيط – فلية هامور – كابوريا – بلح البحر )"
          },
          price: "30",
          rate: null,
          calories: "690"
        },
       
        

        // Add more fish items here as needed
      ]
    };
  }
};
</script>
