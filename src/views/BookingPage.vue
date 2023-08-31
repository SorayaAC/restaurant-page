<template>
  <div>
    <Header />
    <Slider />
    <Form />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Slider from '@/components/Slider.vue';
import Form from '@/components/Form.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'BookingPage',
  props: {
    restaurants: {
      type: Array,
      required: true,
    },
  },

  components: {
    Header,
    Slider,
    Form,
    Footer,
  },
  computed: {
    getSelectedRestaurantId() {
      // get for the route
      return this.$route.params.id;
    },
    getSelectedReaturantData() {
      // get for the route
      return this.restaurants.find(
        (restaurant) => restaurant.id === this.getSelectedRestaurantId
      );
    },
  },
};
</script>

<style></style>
