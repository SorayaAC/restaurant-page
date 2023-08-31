<template>
  <section>
    <div class="title">
      <div class="separator"></div>
      <div id="restaurants" class="title-text">Restaurantes</div>
      <div class="separator"></div>
    </div>

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
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.separator {
  width: 100%;
  height: 1px;
  background-color: #ae8a46;
}
.title-text {
  font-size: 1rem;
  font-weight: bold;
  color: #ae8a46;
  margin: 0 1rem;
  text-transform: uppercase;
}
</style>
