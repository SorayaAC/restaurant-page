<template>
  <div class="slider-container">
    <div class="slider">
      <div
        class="slider-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div class="slider-item" v-for="(slide, index) in slides" :key="index">
          <img :src="slide" class="slider-img" alt="Slide Image" />
        </div>
      </div>
    </div>
    <div class="controls">
      <button class="prev-button" @click="prevSlide">&lt;</button>
      <button class="next-button" @click="nextSlide">&gt;</button>
    </div>
  </div>
</template>

<script>
import slide1 from '@/assets/images/hero-slider-1.jpg';
import slide2 from '@/assets/images/hero-slider-2.jpg';
import slide3 from '@/assets/images/hero-slider-3.jpg';
export default {
  name: 'SliderComponent',
  data() {
    return {
      currentIndex: 0,
      slides: [slide1, slide2, slide3],
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
  },
};
</script>

<style>
.slider-container {
  width: 100%;
  position: relative;
}

.slider {
  position: relative;
  overflow: hidden;
  align-items: center;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-item {
  flex-shrink: 0;
  width: 100%;
}

.slider-img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
}
.controls {
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 45%;
  width: auto;
  margin: 0 auto;
  padding: 0 10%;
}
</style>
