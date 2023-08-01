<template>
    <div class="back-button">
      <span class="back-button-text">العودة للقائمة الرئيسية</span>
      <router-link to="/" class="back-button-link">
        <v-btn icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
  .back-button {
    position: fixed;
    top: 120px;
    right: 20px;
    z-index: 9999;
   
  }
  
 
  
  .back-button-text {
    margin-right: 5px;
    margin-top: 120px;
    font-size: 18px;
    font-weight: bold;
    color: #3bb5eb;
  }
  </style>
  