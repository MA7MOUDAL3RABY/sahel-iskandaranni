<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="menu">
    <h1 class="category-title font-70 text-center">Fish - اسماك</h1>
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
          img: "food/2.png",
          name: { en: "Salmon", ar: " سلمون" },
          price: "85",
          rate: "3",
          calories: "458"
        },
        {
          img: "/food/salmon.png",
          name: { en: "King Mackerel", ar: "كنعد" },
          price: "80",
          rate: "3",
          calories: 781
        },
        {
          img: "/food/salmon.png",
          name: { en: "Gilthead Bream", ar: "دنيس" },
          price: "60",
          rate: "2.5",
          calories: 658
        },
        {
          img: "/food/salmon.png",
          name: { en: "Dammam’s Coral Trout", ar: "ناجل الدمام" },
          price: "60",
          rate: "4.5",
          calories: 781
        },
        {
          img: "/food/salmon.png",
          name: { en: "Medium Shrimp ", ar: " جمبري وسط  " },
          price: "80",
          rate: null,
          calories: 499
        },
        {
          img: "/food/salmon.png",
          name: { en: "Grilled Crabs", ar: "كابوريا مشوي" },
          price: "55",
          rate: null,
          calories: 478
        },
        {
          img: "/food/salmon.png",
          name: { en: "Creamy Crab Meat", ar: "كابوريا مخلية بالكريمة " },
          price: "60",
          rate: null,
          calories: 951
        },
        {
          img: "salmon.png",
          name: { en: "Grey Mullet", ar: "بوري" },
          price: "55",
          rate: null,
          calories: 358
        },
        {
          img: "salmon.png",
          name: { en: "Fresh Tilapias", ar: "بلطي حى" },
          price: "32",
          rate: null,
          calories: 785
        },
        {
          img: "salmon.png",
          name: { en: "Mackerel", ar: "ماكريل" },
          price: "38",
          rate: null,
          calories: 726
        },
        {
          img: "salmon.png",
          name: { en: "“Red Mullet “Sultan Ibrahim", ar: "سلطان ابراهيم" },
          price: "55",
          rate: null,
          calories: 658
        },
        {
          img: "salmon.png",
          name: { en: "Bayad", ar: "بياض" },
          price: "40",
          rate: null,
          calories: 982
        },
        {
          img: "salmon.png",
          name: { en: "Greasy Grouper", ar: "هامور" },
          price: "70",
          rate: null,
          calories: 658
        },
        {
          img: "salmon.png",
          name: { en: "Snapper", ar: "فارس" },
          price: "60",
          rate: null,
          calories: 458
        },
        {
          img: "salmon.png",
          name: { en: "Jumbo Shrimp", ar: "جمبري جامبو" },
          price: "130",
          rate: null,
          calories: 472
        },
        {
          img: "salmon.png",
          name: { en: "Medium Shrimp", ar: "جمبري وسط" },
          price: "80",
          rate: null,
          calories: 456
        },
        {
          img: "salmon.png",
          name: { en: "Grilled Crab", ar: "كابوريا مشوي" },
          price: "55",
          rate: null,
          calories: 658
        },
        {
          img: "salmon.png",
          name: { en: "Creamy Crab Meat", ar: "كابوريا مخلية بالكريمة" },
          price: "60",
          rate: null,
          calories: 359
        },
        {
          img: "salmon.png",
          name: { en: "Lobster", ar: "استاكوزا" },
          price: "140",
          rate: null,
          calories: 541
        },
        {
          img: "salmon.png",
          name: { en: "Greasy Grouper Fillet", ar: "هامور فايليه" },
          price: "80",
          rate: null,
          calories: "593cal"
        },
        {
          img: "salmon.png",
          name: { en: "Fried Squid", ar: "سمك السلمون المشوي" },
          price: "",
          rate: null,
          calories: ""
        },
        {
          img: "salmon.png",
          name: { en: "Calamari", ar: "كالاماري" },
          price: "60",
          rate: null,
          calories: "952cal"
        },
        {
          img: "salmon.png",
          name: { en: "Mussels (vinegar & garlic - soup)", ar: "محار (مرق بالخل والثوم)" },
          price: "85",
          rate: null,
          calories: "960cal"
        },


        // Add more fish items here as needed
      ]
    };
  }
};
</script>
