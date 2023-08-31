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
      <div class="slider-logo">
        <img src="@/assets/images/LaBotanicaLogo.png" alt="Logo" />
      </div>
      <div class="controls">
        <i
          class="fa-solid fa-circle-chevron-left slider-icon"
          @click="prevSlide"
          style="color: #ae8a46"
        ></i>
        <i
          class="fa-solid fa-circle-chevron-right slider-icon"
          @click="nextSlide"
          style="color: #ae8a46"
        ></i>
      </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 90vh;
  object-fit: cover;
}
.controls {
  z-index: 10;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 45%;
  width: auto;
  margin: 0 auto;
  padding: 0 5%;
}
.slider-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.slider-logo img {
  width: 17rem;
}
.slider-icon {
  cursor: pointer;
  font-size: 1.5rem;
  outline: none;
}

@media (min-width: 768px) {
  .slider-img {
    height: 100vh;
  }
  .slider-logo img {
    width: 40rem;
  }
  .slider-icon {
    font-size: 2rem;
  }
}
@media (min-width: 1200px) {
  .slider-logo img {
    width: 52rem;
  }
}
</style>
