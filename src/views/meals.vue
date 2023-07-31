<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="menu">
    <h1 class="category-title font-70">Meals - الوجبات – السلطات</h1>
    <!-- <h3 class="category-description font-30">Request upon - حسب الطلب</h3>
    <h3 class="category-description font-30">( زيت وليمون – سنجاري – مشوي – مقلي – جريل – صنيه بطاطس )</h3>
    <h3 class="category-description font-30">
      Oil &Lemon- Baked w/Vegetables “Singari” -Grilled - Fried-Griddle –
      Tray-Baked w/ Potatoes
    </h3> -->
    <div class="menu-items">
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" v-for="(item, index) in items" :key="index" class="menu-item">
          <MenuCard :index="index" :item="item" />
          <!-- <div class="price-column">
            <div class="food-price">{{ item.price }}</div>
            <div class="calories">{{ item.calories }}CAL</div>
          </div>
          <div class="food-details">
            <div class="food-name">{{ item.name }}</div>
            <div v-if="item.arabicDescription" class="food-description">{{ item.arabicDescription }}</div>
            <div class="food-nameen">{{ item.nameen }}</div>

            <div
              v-if="item.englishDescription"
              class="food-description"
            >{{ item.englishDescription }}</div>
          </div>-->
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
          name: { en: "Grey Mullet Meal", ar: "وجبة بوري ( حبة بوري – أرز – سلطات)" },
          price: "40",
          rate: null,
          calories: "876"
        },
        {
          img: "salmon.png",
          name: { en: "Tilapia Meal", ar: "وجبة بلطي ( حبة بلطي– أرز – سلطات)" },
          price: "25",
          rate: null,
          calories: "689"
        },
        {
          img: "salmon.png",
          name: { en: "Gilthead Bream Meal", ar: "وجبة دنيس ( حبة دنيس– أرز – سلطات)" },
          price: "45",
          rate: null,
          calories: "567"
        },
        {
          img: "salmon.png",
          name: {
            en: "Sahil Alexandria's Meal (1 Sea Bream fish-4 Shrimp Skewers-100gm Squid-Seafood Soup-Rice-Salads)",
            ar: "وجبة ساحل إسكندرية (حبة دنيس–4شيش جمبري 100جرام سبيط- 1شوربة سي فود–رز–سلطات)"
          },
          price: "75",
          rate: null,
          calories: "1180"
        },
        // Add more fish items here as needed
      ]
    };
  }
};
</script>
