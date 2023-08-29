<template>
  <footer class="footer">
    <div class="container">
      <p>Made with <span class="heart">❤️</span> by Soraya Alonso</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  background-color: #f4f4f4;
  padding: 20px 0;
  text-align: center;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.heart {
  color: red;
}
</style>
