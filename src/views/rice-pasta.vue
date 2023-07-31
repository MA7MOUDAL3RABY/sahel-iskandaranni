<template>
  <div class="menu">
    <h1 class="category-title font-70 text-center">Rice & Pasta - ارز ومكرونة</h1>
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
          name: { en: "White Rice (Basmati)", ar: "أرز أبيض ( بسمتى )" },
          price: "7",
          rate: null,
          calories: "458"
        },
        {
          img: "salmon.png",
          name: { en: "Fisherman's Rice “Sayadieh”", ar: "أرز صيادية ( مصري – بسمتى )" },
          price: "10",
          rate: null,
          calories: "984"
        },
        {
          img: "salmon.png",
          name: { en: "Seafood Rice", ar: "أرز سي فود" },
          price: "30",
          rate: null,
          calories: "965"
        },
        {
          img: "salmon.png",
          name: { en: "Shrimp Pasta (white - red)", ar: "مكرونة (أبيض – أحمر ) جمبري" },
          price: "30",
          rate: null,
          calories: "548"
        },
        {
          img: "salmon.png",
          name: { en: "Seafood Pasta (white - red)", ar: "مكرونة ( أبيض – أحمر ) سي فود" },
          price: "35",
          rate: null,
          calories: "596"
        },
       
        

        // Add more fish items here as needed
      ]
    };
  }
};
</script>
