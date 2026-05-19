<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';

</script>

<template>
  <div class="elcom-section elcom-404">
    <div class="elcom-container">
      <div class="elcom-content">
        <div class="elcom-subtitle">Whoops! This page is under construction.</div>
        <picture>
          <img src="@/assets/images/not-found.png" alt="Under Construction Illustration" />
        </picture>
        <div class="elcom-text">
          We are currently working on this page. Please get in touch with us if you believe
          this is unexpected behavior or return to the <RouterLink to="/">home page</RouterLink>.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.elcom-404 {
  text-align: center;
  width: 100%;
}

.elcom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

picture {
  width: 20rem;
  margin-bottom: 1rem;
}
</style>
