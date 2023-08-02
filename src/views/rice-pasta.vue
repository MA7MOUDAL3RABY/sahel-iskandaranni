<template>
  <div class="menu">
    <div class="my-10 py-5"></div>
    <h1 class="category-title font-70 text-center">Rice &amp; Pasta | ارز ومكرونة</h1>
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
          img: "/food/ricepasta/rice1.webp",
          name: { en: "White Rice (Basmati)", ar: "أرز أبيض ( بسمتى )" },
          price: "7",
          rate: null,
          calories: "458"
        },
        {
          img: "/food/ricepasta/rice2.webp",
          name: { en: "Fisherman's Rice “Sayadieh”", ar: "أرز صيادية" },
          price: "10",
          rate: null,
          calories: "984"
        },
        {
          img: "/food/ricepasta/rice3.webp",
          name: { en: "Seafood Rice", ar: "أرز سي فود" },
          price: "30",
          rate: null,
          calories: "965"
        },
        {
          img: "/food/ricepasta/pasta1.webp",
          name: { en: "Shrimp Pasta (white - red)", ar: "مكرونة  جمبري" },
          price: "30",
          rate: null,
          calories: "548"
        },
        {
          img: "/food/ricepasta/pasta2.webp",
          name: { en: "Seafood Pasta (white - red)", ar: "مكرونة  سي فود" },
          price: "35",
          rate: null,
          calories: "596"
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
    font-size: 18px;
  }
}

/* For medium-sized devices (e.g., tablets) */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .category-title {
    font-size: 50px;
  }
  .category-description {
    font-size: 20px;
  }
}

/* For larger devices (e.g., desktops) */
@media screen and (min-width: 1025px) {
  /* No changes needed for larger devices */
}
</style>
