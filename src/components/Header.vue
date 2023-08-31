<template>
  <header class="header">
    <img src="../assets/images/NameLogo.png" alt="" class="header-logo" />
    <button
      v-if="isHomePage"
      class="header-button"
      @click="scrollToRestaurantList"
    >
      Reservar
    </button>
    <button v-else class="header-button" @click="returnHome">Volver</button>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  computed: {
    isHomePage() {
      if (this.$route.path === '/') {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    scrollToRestaurantList() {
      const restaurantListTitle = document.querySelector(
        '#restaurantListTitle'
      );
      if (restaurantListTitle) {
        restaurantListTitle.scrollIntoView({ behavior: 'smooth' });
      }
    },
    returnHome() {
      this.$router.push({ path: '/' });
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
  background-color: #ae8a46;
  border: none;
  padding: 0.5rem;
  color: black;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  .header {
    padding: 1rem 2rem;
  }
  .header-logo {
    width: 15rem;
    height: auto;
  }
  .header-button {
    padding: 1rem;
  }
}
@media (min-width: 1000px) {
  .header {
    padding: 1.5rem 3rem;
  }
}
</style>
