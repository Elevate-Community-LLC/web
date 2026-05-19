<template>
  <a :href="href" class="elcom-card">
    <picture>
      <img :src="image" loading="lazy" />
    </picture>
    <div class="elcom-subtitle">
      {{ title }}
      <img src="@/assets/icons/arrow-top-right.svg" loading="lazy" width="24px" height="24px" />
    </div>
    <div class="elcom-content">{{ content }}</div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  image: string
  title: string
  content: string
}>()
</script>

<style scoped lang="css">
.elcom-card {
  display: flex;
  flex-direction: column;
  width: 31.3%;
  color: inherit;
  text-decoration: none;
}

.elcom-card picture {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 15rem;
  margin-bottom: 2rem;
}

.elcom-card picture::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
  background-color: var(--elcom-primary-green);
}

.elcom-card:hover picture::before {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.elcom-card picture img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.elcom-subtitle {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.elcom-subtitle img {
  filter: brightness(0) saturate(100%) invert(58%) sepia(21%) saturate(796%) hue-rotate(57deg) brightness(94%) contrast(93%);
  margin-left: 0.5rem;
}

.elcom-card:hover .elcom-subtitle {
  scale: 1.2;
  transform-origin: 0 50%;
  transition: scale 0.3s ease;
}

/* Mobile styles */
@media (max-width: 48rem) {
  .elcom-card {
    width: 100%;
  }

  .elcom-card picture {
    height: 20rem;
  }
}
</style>
