<template>
  <div class="menu">
    <div class="my-10 py-5"></div>
    <div class="my-10"></div>

    <h1 class="category-title font-70 text-center mt-10">Fish | اسماك</h1>
    <h3 class="category-description font-25 text-center">Request upon - حسب الطلب</h3>
    <h3
      class="category-description font-25 text-center"
    >( زيت وليمون – سنجاري – مشوي – مقلي – جريل – صنيه بطاطس )</h3>
    <h3 class="category-description font-25 text-center">
      Oil &Lemon- Baked w/Vegetables “Singari” -Grilled - Fried-Griddle –
      Tray-Baked w/ Potatoes
    </h3>
    <div class="my-5"></div>
    <div class="menu-items">
      <v-row align="start" justify="center">
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
          img: "/food/griled-fish/1.jpg",
          name: { en: "Salmon", ar: " سلمون" },
          price: "85",
          rate: "3",
          calories: "458"
        },
        {
          img: "/food/griled-fish/2.png",
          name: { en: "King Mackerel", ar: "كنعد" },
          price: "80",
          rate: "3",
          calories: 781
        },
        {
          img: "/food/griled-fish/3.png",
          name: { en: "Gilthead Bream", ar: "دنيس" },
          price: "60",
          rate: "2.5",
          calories: 658
        },
        {
          img: "/food/griled-fish/4.png",
          name: { en: "Dammam’s Coral Trout", ar: "ناجل الدمام" },
          price: "60",
          rate: "4.5",
          calories: 781
        },
        {
          img: "/food/griled-fish/5.png",
          name: { en: "Medium Shrimp ", ar: " جمبري وسط  " },
          price: "80",
          rate: null,
          calories: 499
        },
        {
          img: "/food/griled-fish/6.jpeg",
          name: { en: "Grilled Crabs", ar: "كابوريا مشوي" },
          price: "55",
          rate: null,
          calories: 652
        },
        {
          img: "/food/griled-fish/7.jpeg",
          name: { en: "Creamy Crab Meat", ar: "كابوريا مخلية بالكريمة " },
          price: "60",
          rate: null,
          calories: 359
        },
        {
          img: "/food/griled-fish/8.png",
          name: { en: "Grey Mullet", ar: "بوري" },
          price: "55",
          rate: null,
          calories: 358
        },
        {
          img: "/food/griled-fish/9.png",
          name: { en: "Fresh Tilapias", ar: "بلطي حى" },
          price: "32",
          rate: null,
          calories: 785
        },
        {
          img: "/food/griled-fish/10.png",
          name: { en: "Mackerel", ar: "ماكريل" },
          price: "38",
          rate: null,
          calories: 726
        },
        {
          img: "/food/griled-fish/11.jpeg",
          name: { en: "“Red Mullet “Sultan Ibrahim", ar: "سلطان ابراهيم" },
          price: "55",
          rate: null,
          calories: 658
        },
        {
          img: "/food/griled-fish/12.jpeg",
          name: { en: "Bayad", ar: "بياض" },
          price: "40",
          rate: null,
          calories: 982
        },
        {
          img: "/food/griled-fish/7.png",
          name: { en: "Greasy Grouper", ar: "هامور" },
          price: "70",
          rate: null,
          calories: 658
        },
        {
          img: "/food/griled-fish/14.jpeg",
          name: { en: "Snapper", ar: "فارس" },
          price: "60",
          rate: null,
          calories: 458
        },
        {
          img: "/food/griled-fish/15.jpeg",
          name: { en: "Jumbo Shrimp", ar: "جمبري جامبو" },
          price: "130",
          rate: null,
          calories: 472
        },
        {
          img: "/food/griled-fish/16.jpeg",
          name: { en: "Medium Shrimp", ar: "جمبري وسط" },
          price: "80",
          rate: null,
          calories: 456
        },
        {
          img: "/food/griled-fish/17.jpeg",
          name: { en: "Lobster", ar: "استاكوزا" },
          price: "140",
          rate: null,
          calories: 541
        },
        {
          img: "/food/griled-fish/18.jpeg",
          name: { en: "Greasy Grouper Fillet", ar: "هامور فايليه" },
          price: "80",
          rate: null,
          calories: "593cal"
        },
        {
          img: "/food/griled-fish/19.jpeg",
          name: { en: "Fried Squid", ar: "سمك السلمون المشوي" },
          price: "",
          rate: null,
          calories: ""
        },
        {
          img: "/food/griled-fish/20.jpeg",
          name: { en: "Calamari", ar: "كالاماري" },
          price: "60",
          rate: null,
          calories: "952cal"
        },
        {
          img: "/food/griled-fish/21.jpeg",
          name: {
            en: "Mussels (vinegar & garlic - soup)",
            ar: "محار (مرق بالخل والثوم)"
          },
          price: "85",
          rate: null,
          calories: "960cal"
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
