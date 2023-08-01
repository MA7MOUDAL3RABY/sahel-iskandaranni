<template>
  <div class="position-relative banner">
    <img src="/banner.jpg" alt="banner image" />
    <div class="content position-absolute bottom-0">
      <h2 class="font-70 text-center heading" data-aos="fade-up">ساحل إسكندراني</h2>
      <h2 class="sub-heading text-center" data-aos="fade-up" data-aos-delay="200">للمأكولات البحرية</h2>
    </div>
  </div>
</template>

  <script>
export default {};
</script>

  <style lang="scss" scoped>
.banner {
  img {
    min-height: 100vh;
    max-height: 100vh;
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
