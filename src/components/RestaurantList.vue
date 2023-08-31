<template>
  <section class="restaurant-list">
    <h3 id="restaurants" class="title">Restaurantes</h3>
    <RestaurantCard />
  </section>
</template>

<script>
import RestaurantCard from '@/components/RestaurantCard.vue';
export default {
  name: 'RestaurantListComponent',
  components: {
    RestaurantCard,
  },
};
</script>

<style scoped>
.restaurant-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ededed;
}
</style>
