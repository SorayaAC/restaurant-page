<template>
  <div class="restaurant-list">
    <div
      v-for="(restaurant, index) in restaurants"
      :key="index"
      class="restaurant-card"
      :style="{ background: `url(${restaurant.image})` }"
    >
      <div class="logo">
        <img :src="restaurant.logo" alt="Logo" />
      </div>
      <div class="info">
        <p>{{ restaurant.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import restaurantsData from '@/db/restaurantsData.json';
export default {
  name: 'RestaurantCardComponent',
  data() {
    return {
      restaurants: restaurantsData,
    };
  },
};
</script>

<style scoped>
.restaurant-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.restaurant-card {
  height: 13rem;
  width: 17rem;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
  margin-bottom: 20px;
}

.logo img {
  border-radius: 50px;
  max-width: 100px;
  max-height: 100px;
  object-fit: contain;
}

.info p {
  background-color: aliceblue;
  margin: 5px 0 0;
  color: #666;
}
</style>
