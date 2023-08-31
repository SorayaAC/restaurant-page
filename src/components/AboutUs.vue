<template>
  <section>
    <div class="title">
      <div class="separator"></div>
      <h3 class="title-text">Quienes Somos</h3>
      <div class="separator"></div>
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora
      magni officia velit aliquam eligendi odio aliquid ullam culpa excepturi
      officiis corrupti ea fugit suscipit nemo, reprehenderit quos dicta
      aspernatur.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
      eveniet quod quos inventore, praesentium possimus, ut aspernatur ea itaque
      esse molestiae libero unde hic rem? Labore dolorem nam autem quasi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi
      nostrum reprehenderit praesentium veritatis magnam ex cupiditate unde aut
      facere quo ab, recusandae porro doloribus enim quaerat quis suscipit?
      Accusantium.
    </p>
  </section>
</template>

<script>
export default {
  name: 'AboutUsComponent',
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
  flex: 1;
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
