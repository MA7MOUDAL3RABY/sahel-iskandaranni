<template>
  <div>
    <v-spacer></v-spacer>
    <div class="my-5"></div>
    <h2 class="font-70 text-center heading">ساحل إسكندراني</h2>
    <h2 class="sub-heading text-center">للمأكولات البحرية</h2>
    <div class="my-5"></div>
    <div class="d-flex align-center justify-center" data-aos="flip-in">
      <v-col cols="12" lg="6">
        <v-img class="my-2" src="/home-image.png"></v-img>
      </v-col>
    </div>
    <div class="my-5"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.menu {
  text-align: center;
}

.heading {
  font-size: 70px;
  color: #0056b2; /* You can adjust the color to match your design */
}

.sub-heading {
  font-size: 50px;
  color: #ea8f34; /* You can adjust the color to match your design */
  margin-top: 5px;
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
.big-images {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align the images to the left */
  margin-top: 20px;
}

.big-images img {
  width: 200px; /* Adjust the width of the big images */
  height: 200px; /* Adjust the height of the big images */
  margin-bottom: 20px; /* Add spacing between the big images */
}
</style>
