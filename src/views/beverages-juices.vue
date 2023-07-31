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
          name: { en: "Green Salad", ar: "سلطة خضراء" },
          price: "5",
          rate: null,
          calories: "15"
        },
        {
          img: "salmon.png",
          name: { en: "Sliced Green Salad", ar: "سلطة خضراء طرنشات" },
          price: "5",
          rate: null,
          calories: 5
        },
        {
          img: "salmon.png",
          name: { en: "Gilthead Bream", ar: "دنيس" },
          price: "60",
          rate: null,
          calories: 658
        },
        {
          img: "salmon.png",
          name: { en: "Dammam’s Coral Trout", ar: "ناجل الدمام" },
          price: "60",
          rate: null,
          calories: 781
        },
        {
          img: "salmon.png",
          name: { en: "Medium Shrimp ", ar: " جمبري وسط  " },
          price: "80",
          rate: null,
          calories: 456
        },
        {
          img: "salmon.png",
          name: { en: "Grilled Crabs", ar: "كابوريا مشوي" },
          price: "55",
          rate: null,
          calories: 652
        },
        {
          img: "salmon.png",
          name: { en: "Creamy Crab Meat", ar: "كابوريا مخلية بالكريمة " },
          price: "60",
          rate: null,
          calories: 359
        }
        // Add more fish items here as needed
      ]
    };
  }
};
</script>
