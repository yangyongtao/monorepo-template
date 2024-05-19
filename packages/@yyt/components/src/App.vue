<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <elbutton></elbutton>
    <gbutton></gbutton>
    <tbutton></tbutton>
    <jbutton></jbutton>
  </header>
</template>

<script setup lang="ts">
import elbutton from '@/components/button/ELButton.vue'
import gbutton from '@/components/button/GButton.vue'
import tbutton from '@/components/button/TButton'
import jbutton from '@/components/button/JButton'
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
