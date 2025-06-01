<script setup>
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue";

</script>

<template>
  <body class="corpo">
    <header-component @click-cart="carrinho = !carrinho"/>
      <main>
        <RouterView />
      </main>
      <footer-component />
  </body>
</template>

<style scoped>

</style>
