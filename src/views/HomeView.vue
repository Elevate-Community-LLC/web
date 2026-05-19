<script setup lang="ts">
import { useModule } from '@/composables/useModule';
import '@/assets/css/index.css';
import HeaderComponent from '@/components/HeaderComponent.vue';
import PlatformSideListComponent from '@/components/PlatformSideListComponent.vue';
import ProductGridComponent from '@/components/ProductGridComponent.vue';
import StoriesCardGroupComponent from '@/components/StoriesCardGroupComponent.vue';
import AboutUsSideContentComponent from '@/components/AboutUsSideContentComponent.vue';
import CallToActionBannerComponent from '@/components/CallToActionBannerComponent.vue';
import ServicesCardGroupComponent from '@/components/ServicesCardGroupComponent.vue';
import { useRoute } from 'vue-router';

const module = useModule()
module.value = {
  name: 'Elevate Community, LLC',
}

const route = useRoute()
</script>

<template>
  <HeaderComponent :size="(route.path === '/') ? 'hero' : 'banner'" :text="(route.path === '/') ? 'Elevate Your Technology' : route.name as string"/>

  <ServicesCardGroupComponent :limit="3" v-if="route.path === '/'" />
  <PlatformSideListComponent v-if="route.path === '/'"/>
  <ProductGridComponent v-if="route.path === '/'"/>
  <!-- <StoriesCardGroupComponent /> -->
  <AboutUsSideContentComponent v-if="route.path === '/'"/>
  <CallToActionBannerComponent v-if="route.path === '/'"/>

  <RouterView/>
</template>

<style scoped>
#platforms {
  background-color: var(--elcom-background-green);
}
#about {
  background-color: var(--elcom-background-green);
}
</style>
