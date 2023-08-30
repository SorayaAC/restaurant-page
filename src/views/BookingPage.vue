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
  components: {
    Header,
    Slider,
    Form,
    Footer,
  },
};
</script>

<style></style>
