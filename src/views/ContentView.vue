<script setup lang="ts">
import { useModule } from '@/composables/useModule';
import '@/assets/css/index.css';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { useRoute } from 'vue-router';
import { provide, ref, watch } from 'vue';

const module = useModule()
module.value = {
  name: 'Elevate Community, LLC',
}

const route = useRoute()
const sidebarVisible = ref(true)

provide('sidebarVisible', sidebarVisible)

watch(route, () => {
  sidebarVisible.value = true
})
</script>

<template>
  <HeaderComponent size="banner" :text="route.name as string" />

  <div class="elcom-content-wrapper elcom-container">
    <div class="elcom-content-container">
      <RouterView/>
    </div>
    <div class="elcom-content-sidebar" v-if="sidebarVisible">
      <slot name="sidebar" />
    </div>
  </div>
</template>

<style scoped>
.elcom-content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: 5rem;
}

.elcom-content-container {
  flex: 2;
}

.elcom-content-sidebar {
  flex: 1;
  background-color: var(--elcom-background-green);
}

@media (max-width: 48rem) {
  .elcom-content-sidebar {
    display: none;
  }
}

:deep(a::before) {
  content: "🔗";
  margin-right: 0.25rem;
}
</style>
