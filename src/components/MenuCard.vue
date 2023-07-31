<template>
  <v-card
    v-bind:="$attrs"
    :loading="loading"
    class="menu-card mx-auto my-12"
    max-width="500"
    border
    data-aos="zoom-out"
    :data-aos-delay="(index * 250)"
  >
    <!-- <img :src="item.img" /> -->
    <v-img :src="item.img"></v-img>

    <v-card-item class="text-center my-5">
      <v-card-title class="font-30 py-2">{{item.name.ar}}</v-card-title>
      <v-card-title class="font-30 py-2">{{item.name.en}}</v-card-title>
    </v-card-item>

    <v-card-text>
      <v-row align="center" justify="space-between" class="mx-0 mt-3 px-5">
        <div class="font-20">
          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
          {{ item.calories }} Cal
        </div>
        <!-- <div class="text-grey my-3 text-center ms-4">4.5 (413)</div> -->

        <div class="my-4 text-success font-20">Price: {{ item.price }}</div>
      </v-row>
    </v-card-text>
    <!-- <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div> -->

    <v-divider v-if="item.rate" class="mx-4 my-3"></v-divider>
    <div class="d-flex justify-center">
      <v-rating
        v-if="item.rate"
        :model-value="item.rate"
        color="amber"
        density="compact"
        half-increments
        readonly
        size="small"
      ></v-rating>
    </div>

    <!-- <v-card-title>{{item.name.en}}</v-card-title>
    <v-card-title>{{item.name.ar}}</v-card-title>-->

    <!-- <div class="px-4">
      <v-chip-group class="d-fledx align-center justify-center my-3">
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </div>-->
  </v-card>
</template>
<script>
export default {
  props: {
    item: {
      required: true
    },
    index: {
      required: false
    }
  },
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>

<style>
.menu-card {
  border-top-left-radius: 120px !important;
  border-top-right-radius: 120px !important;
}
</style>
