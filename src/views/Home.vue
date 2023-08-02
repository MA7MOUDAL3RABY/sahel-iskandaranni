<template>
  <div>
    <Banner />
    <div class="my-5"></div>
    <div class="my-5"></div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="4" v-for="(item, i) in menu" :key="i">
          <div class="my-5"></div>
          <router-link class="text-decoration-none" :aria-label="item.name.en" :to="item.to">
            <v-card
              border
              class="d-block mx-auto py-3 rounded-lg"
              data-aos="zoom-out"
              max-width="300px"
              :data-aos-delay="(index * 250)"
            >
              <div class="d-felx align-center justify-content-center">
                <v-img width="100px" class="d-block mx-auto" :lazy="true" :src="item.icon"></v-img>
              </div>

              <v-card-item class="text-center my-5">
                <v-card-title class="font-30 py-2">{{item.name.ar}}</v-card-title>
                <v-card-title class="font-30 py-2">{{item.name.en}}</v-card-title>
              </v-card-item>
            </v-card>
          </router-link>
          <div class="my-5"></div>
        </v-col>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
    <div class="my-5"></div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
export default {
  components: {
    Banner
  },
  data() {
    return {
      menu: [
        {
          icon: "/icons/fish.webp",
          name: {
            ar: "أسماك",
            en: "Fish"
          },
          to: "/fish"
        },
        {
          icon: "/icons/boil.webp",
          name: {
            ar: "الطواجن",
            en: "Stews"
          },
          to: "/stews"
        },
        {
          icon: "/icons/rice.webp",
          name: {
            ar: "الأرز – مكرونة",
            en: "Rice & Pasta"
          },
          to: "/rice-pasta"
        },
        {
          icon: "/icons/soup.webp",
          name: {
            ar: "الشوربات",
            en: "Soups"
          },
          to: "/soups"
        },
        {
          icon: "/icons/meals.webp",
          name: {
            ar: "الوجبات",
            en: "Meals"
          },
          to: "/meals"
        },
        {
          icon: "/icons/salad.webp",
          name: {
            ar: "المقبلات – السلطات",
            en: "Appetisers & Salads"
          },
          to: "/appetisers-salads"
        },
        {
          icon: "/icons/juice.webp",
          name: {
            ar: "المشروبات والعصائر",
            en: "Beverages & Juices"
          },
          to: "/beverages-juices"
        }
      ]
    };
  }
};
</script>

<style>
.menu {
  text-align: center;
}

.food-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* To maintain the aspect ratio and cover the circle */
}

.price-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.food-price {
  font-size: 18px;
}

.calories {
  font-size: 14px;
}

.food-details {
  text-align: center;
  margin-left: 20px;
}

.food-description {
  font-size: 14px;
  margin-top: 5px;
  color: #555; /* You can adjust the color to match your design */
}

/* Media Queries for Responsive Design */

/* For smaller devices (e.g., phones) */
@media screen and (max-width: 768px) {
  .heading {
    font-size: 40px;
  }

  .sub-heading {
    font-size: 30px;
  }
}

/* For medium-sized devices (e.g., tablets) */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .heading {
    font-size: 50px;
  }

  .sub-heading {
    font-size: 40px;
  }
}

/* For larger devices (e.g., desktops) */
@media screen and (min-width: 1025px) {
  /* No changes needed for larger devices */
}
</style>
