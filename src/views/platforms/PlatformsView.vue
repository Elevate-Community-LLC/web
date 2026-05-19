<script setup lang="ts">
import PlatformSideListComponent from '@/components/PlatformSideListComponent.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <PlatformSideListComponent v-if="route.name === 'Platforms'"/>
  <RouterView/>
</template>
