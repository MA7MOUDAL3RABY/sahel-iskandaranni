<template>
  <div class="menu">
    <h1 class="category-title font-70">beverages-juices - المشروبات والعصائر</h1>
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
          name: { en: "Lemon Mint", ar: "ليمون نعناع" },
          price: "12",
          rate: null,
          calories: "45"
        },
        {
          img: "salmon.png",
          name: { en: "Mango", ar: "مانجو" },
          price: "14",
          rate: null,
          calories: "16"
        },
        {
          img: "salmon.png",
          name: { en: "Mojito", ar: "موهيتو" },
          price: "15",
          rate: null,
          calories: "24"
        },
        {
          img: "salmon.png",
          name: { en: "Orange", ar: "برتقال" },
          price: "14",
          rate: null,
          calories: "45"
        },
        {
          img: "salmon.png",
          name: { en: "Small Water Bottle", ar: "مياة صغير" },
          price: "1",
          rate: null,
          calories: "0"
        },
        {
          img: "salmon.png",
          name: { en: "Large Water Bottle", ar: "مياة كبيرة" },
          price: "2",
          rate: null,
          calories: "0"
        },
        {
          img: "salmon.png",
          name: { en: "Pepsi – Citrus – 7UP", ar: "بيبسي – حمضيات – سفن أب" },
          price: "3",
          rate: null,
          calories: "250"
        },
        // Add more fish items here as needed
      ]
    };
  }
};
</script>
