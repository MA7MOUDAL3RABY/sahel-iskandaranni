<template>
  <div class="menu">
    <h1 class="category-title font-70 text-center">اسماك</h1>
    <h1 class="category-title text-center">Fish</h1>
    <h3 class="category-description text-center">حسب الطلب request Upon:</h3>
    <h3 class="category-description text-center">( زيت وليمون – سنجاري – مشوي – مقلي – جريل – صنيه بطاطس )</h3>
    <h3 class="category-description text-center">
      Oil &Lemon- Baked w/Vegetables “Singari” -Grilled - Fried-Griddle –
      Tray-Baked w/ Potatoes
    </h3>
    <div class="menu-items">
      <div class="food-image-container">
        <div class="item-description">item</div>
        <div class="price-description">price</div>
      </div>

      <div v-for="(item, index) in fishItems" :key="index" class="menu-item">
        <div class="price-column">
          <div class="food-price">{{ item.price }}</div>
          <div class="calories">{{ item.calories }}CAL</div>
        </div>
        <div class="food-details">
          <div class="food-name">{{ item.name }}</div>
          <div v-if="item.arabicDescription" class="food-description">{{ item.arabicDescription }}</div>
          <div class="food-nameen">{{ item.nameen }}</div>

          <div v-if="item.englishDescription" class="food-description">{{ item.englishDescription }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      fishItems: [
        {
          name: " سلمون",
          arabicDescription: "",
          nameen: "Salmon",
          englishDescription: "",

          price: "85",
          calories: "458"
        },
        {
          name: "كنعد",
          arabicDescription: "",
          nameen: "King Mackerel",
          englishDescription: "",

          price: "80",
          calories: 781
        },
        {
          name: "دنيس",
          arabicDescription: "",
          nameen: "Gilthead Bream",
          englishDescription: "",

          price: "60",
          calories: 658
        },
        {
          name: "ناجل الدمام",
          arabicDescription: "",
          nameen: "Dammam’s Coral Trout",
          englishDescription: "",

          price: "60",
          calories: 781
        },
        {
          name: " جمبري وسط  ",
          arabicDescription: "  (مشوي – مقلي) (زبدة - شيش) ",

          nameen: "Medium Shrimp ",
          englishDescription: " (grilled - fried) (butter - skewers) ",

          price: "80",
          calories: 456
        },
        {
          name: "كابوريا مشوي",
          nameen: "Grilled Crabs",
          price: "55",
          calories: 652
        },
        {
          name: "كابوريا مخلية بالكريمة ",
          nameen: "Creamy Crab Meat",
          price: "60",
          calories: 359
        }
        // Add more fish items here as needed
      ]
    };
  }
};
</script>

<style>
.menu {
  text-align: center;
}

.category-title {
  margin-bottom: 10px;
}

.category-description {
  font-size: 18px;
  margin-bottom: 30px;
}





.food-image-container {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align the content to the left */
  margin-bottom: 20px;
}

.food-image {
  width: 150px; /* Increase the width to make it bigger */
  height: 150px; /* Increase the height to make it bigger */
  border-radius: 50%;
}
.item-description {
  font-size: 18px;
  color: #007bff; /* You can adjust the color to match your design */
  margin-bottom: 10px;
}

.price-description {
  font-size: 18px;
  color: #007bff; /* You can adjust the color to match your design */
}

.calories-description {
  font-size: 14px;
  color: #007bff; /* You can adjust the color to match your design */
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
