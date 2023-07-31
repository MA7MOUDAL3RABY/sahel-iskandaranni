<template>
  <div class="menu">
    <h1 class="category-title font-70 text-center">Fish - اسماك</h1>
    <h3 class="category-description font-25 text-center">Request upon - حسب الطلب</h3>
    <h3 class="category-description font-25 text-center">( زيت وليمون – سنجاري – مشوي – مقلي – جريل – صنيه بطاطس )</h3>
    <h3 class="category-description font-25 text-center">
      Oil &Lemon- Baked w/Vegetables “Singari” -Grilled - Fried-Griddle –
      Tray-Baked w/ Potatoes
    </h3>
    <div class="menu-items">
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" v-for="(item, index) in fishItems" :key="index" class="menu-item">
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
      fishItems: [
        {
          img: "food/griled-fish/2.png",
          name: { en: "Salmon", ar: " سلمون" },
          price: "85",
          rate: "3",
          calories: "458"
        },
        {
          img: "salmon.png",
          name: { en: "King Mackerel", ar: "كنعد" },
          price: "80",
          rate: "3",
          calories: 781
        },
        {
          img: "salmon.png",
          name: { en: "Gilthead Bream", ar: "دنيس" },
          price: "60",
          rate: "2.5",
          calories: 658
        },
        {
          img: "salmon.png",
          name: { en: "Dammam’s Coral Trout", ar: "ناجل الدمام" },
          price: "60",
          rate: "4.5",
          calories: 781
        },
        {
          img: "salmon.png",
          name: { en: "White Sea Bass", ar: "قاروص أبيض"},
          price: "80",
          rate: null,
          calories: 499
        },
        {
          img: "salmon.png",
          name: { en: "Black Sea Bass", ar: "قاروص اسود"},
          price: "55",
          rate: null,
          calories: 478
        },
        {
          img: "salmon.png",
          name: { en: "Spangled Emperor Sheeri", ar: "شعور" },
          price: "60",
          rate: null,
          calories: 951
        }
        // Add more fish items here as needed
      ]
    };
  }
};
</script>
