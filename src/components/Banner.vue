<template>
  <div class="position-relative banner">
    <div class="layer">
      <div class="content position-absolute bottom-0">
        <v-img
          width="60%"
          class="d-block mx-auto"
          :lazy="true"
          :src="'/logo.webp'"
          alt="banner logo"
        ></v-img>
        <h2 class="text-center heading" data-aos="fade-in-up">ساحل إسكندراني</h2>
        <h2
          class="sub-heading text-center"
          data-aos="fade-in-up"
          data-aos-delay="200"
        >للمأكولات البحرية</h2>
      </div>
    </div>
  </div>
</template>

  <script>
export default {};
</script>

  <style lang="scss" scoped>
.banner {
  position: relative;
  height: 90vh;
  width: 100vw;
  background: url("banner.jpg") no-repeat top center / cover;

  .layer {
    position: absolute;
    background: #00000070;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .banner-img {
    img {
      filter: blur(4px) !important;
      min-height: 100vh;
    }
  }

  .content {
    position: absolute;
    bottom: 15vh;
    left: calc(50vw - (50% / 2));
  }
  .heading {
    font-size: 5vw;
    color: #2a6c96;
    text-shadow: 0 0 6px #000000; /* You can adjust the color to match your design */
  }

  .sub-heading {
    font-size: 50px;
    color: #ea8f34; /* You can adjust the color to match your design */
    margin-top: 5px;
  }
}
</style>
