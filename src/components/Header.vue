<template>
  <header class="header">
    <img src="../assets/images/NameLogo.png" alt="" class="header-logo" />
    <!-- <router-link
      class="header-button"
      :to="{ name: 'RestaurantList', hash: 'first-title' }"
      >Reservar</router-link
    > -->
    <button class="header-button" @click="bookRestaurant">Reservar</button>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    bookRestaurant() {
      this.$router.push({ name: 'RestaurantCard' });
    },
  },
};
</script>

<style scoped>
.header {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: auto;
}
.header-logo {
  width: 6rem;
  height: auto;
}
.header-button {
  background-color: #d8a557;
  border: none;
  padding: 0.5rem;
  color: black;
  font-weight: bold;
  cursor: pointer;
}
@media (min-width: 768px) {
  .header-logo {
    width: 15rem;
    height: auto;
  }
  .header-button {
    padding: 1rem;
  }
}
@media (min-width: 1200px) {
}
</style>
