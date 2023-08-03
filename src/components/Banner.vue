<template>
  <div class="position-relative banner">
    <div class="layer">
      <div class="layer">
        <div class="d-flex justify-center py-10">
          <div class="pt-md-10 mt-md-10">
            <div class="pt-md-10 mt-md-10">
              <div class="pt-md-10 mt-md-10">
                <div class="pt-md-10 mt-md-10">
                  <v-img
                    width="320"
                    class="d-block mx-auto"
                    :lazy="true"
                    :src="'/logo.png'"
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
          </div>
        </div>
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
  background: url("banner.webp") no-repeat top center / cover;

  .layer {
    background: #00000070;

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
