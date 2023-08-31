<template>
  <div>
    <Header />
    <Slider />
    <div class="home-wrapper">
      <Form :restaurantLogo="getSelectedRestaurant.nameLogo" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Slider from '@/components/Slider.vue';
import Form from '@/components/Form.vue';
import Footer from '@/components/Footer.vue';

import restaurantsData from '@/db/restaurantsData.json';
export default {
  name: 'BookingPage',
  data() {
    return {
      restaurants: restaurantsData,
    };
  },
  components: {
    Header,
    Slider,
    Form,
    Footer,
  },
  computed: {
    getSelectedRestaurantId() {
      return this.$route.params.id;
    },
    getSelectedRestaurant() {
      return this.restaurants.find(
        (restaurant) => restaurant.id === this.getSelectedRestaurantId
      );
    },
  },
};
</script>

<style scoped>
.home-wrapper {
  padding: 0 1.5rem 1.5rem 1.5rem;
}
</style>
