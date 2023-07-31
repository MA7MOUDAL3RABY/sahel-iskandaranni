<template>
  <div class="menu">
    <h1 class="category-title font-70">appetisers-salads - المقبلات – السلطات</h1>
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
          calories: "14"
        },
        {
          img: "salmon.png",
          name: { en: "Pickle", ar: "مخلل" },
          price: "3",
          rate: null,
          calories: "30"
        },
        {
          img: "salmon.png",
          name: { en: "Marinated Tomatoes", ar: "طماطم متبله" },
          price: "5",
          rate: null,
          calories: "15"
        },
        {
          img: "salmon.png",
          name: { en: "Marinated Eggplant", ar: "باذنجان متبل" },
          price: "5",
          rate: null,
          calories: "18"
        },
        {
          img: "salmon.png",
          name: { en: "Baba ghanoush", ar: "بابا غنوج" },
          price: "6",
          rate: null,
          calories: "26"
        },
        {
          img: "salmon.png",
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
