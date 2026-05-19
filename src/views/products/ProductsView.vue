<script setup lang="ts">
import ProductGridComponent from '@/components/ProductGridComponent.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <ProductGridComponent v-if="route.name === 'Products'"/>
  <RouterView/>
</template>
