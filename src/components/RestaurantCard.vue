<template>
  <div class="restaurant-list">
    <router-link
      :to="`/booking/${restaurant.id}`"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="restaurant-card"
      :style="{ background: `url(${restaurant.image})` }"
      :restaurants="restaurants"
    >
      <div class="logo">
        <img :src="restaurant.logo" alt="Logo" />
      </div>
      <div class="info">
        <p>{{ restaurant.location }}</p>
      </div>
    </router-link>
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
  flex-wrap: wrap;
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
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  text-decoration: none;
}

.logo img {
  border-radius: 50px;
  max-width: 100px;
  max-height: 100px;
  object-fit: contain;
}
.info {
  margin-top: auto;
  width: 7rem;
}
.info p {
  background-color: white;
  margin: 5px 0 0;
  color: #ae8a46;
  font-weight: bold;
  padding: 0.5rem;
  text-transform: uppercase;
  text-decoration: none;
}
@media (min-width: 768px) {
  .restaurant-list {
    flex-direction: row;
  }
  .restaurant-card {
    height: 15rem;
    width: 19rem;
    margin: 1rem;
  }
}
@media (min-width: 1000px) {
  .restaurant-card {
    height: 22rem;
    width: 26rem;
    margin: 2rem;
  }
  .restaurant-list {
    justify-content: flex-start;
  }
}
</style>
