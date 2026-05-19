<script setup lang="ts">
import ServicesCardGroupComponent from '@/components/ServicesCardGroupComponent.vue';
import { inject, watch, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const sidebarVisible: Ref<boolean> | undefined = inject('sidebarVisible') as Ref<boolean> | undefined

watch(route, () => {
  if (sidebarVisible && route.name === 'Services')
    sidebarVisible.value = false
})
</script>

<template>
  <ServicesCardGroupComponent v-if="route.name === 'Services'"/>
  <RouterView/>
</template>

<style lang="css" scoped>
</style>
