<template>
  <header class="header">
    <img
      class="header-logo"
      src="@/assets/images/LaBotanicaLogo.png"
      alt="Logo"
    />
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
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
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
}
.header-logo {
  width: 100%;
  max-width: 250px;
}
</style>
