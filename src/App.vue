<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
</script>

<script lang="ts">
export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
}
</script>

<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>
