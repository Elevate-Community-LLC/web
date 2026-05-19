<script setup lang="ts">

export interface HeaderProps {
  size: 'hero' | 'banner',
  text: string
}

const props = defineProps<HeaderProps>()
</script>

<script lang="ts">
export default {
  name: 'HeaderComponent',
}
</script>

<template>
  <div class="elcom-header" :class="{'elcom-hero': props.size === 'hero', 'elcom-banner': props.size === 'banner'}">
    <img loading="eager" src="@/assets/images/hero.jpg"/>
    <div class="elcom-header-text" style="font-weight: 300;">{{ props.text }}</div>
  </div>
</template>

<style scoped lang="css">
.elcom-hero {
  height: 60vh;
}

.elcom-hero::before {
  height: 60vh;
}

.elcom-hero .elcom-header-text {
  top: 56vh;
}

.elcom-banner {
  height: 30vh;
}

.elcom-banner::before {
  height: 30vh;
}

.elcom-banner .elcom-header-text {
  top: 26vh;
}

.elcom-header {
  width: 100%;
}

.elcom-header::before {
  content: "";
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
  background-color: rgba(15, 41, 74, 0.7);
  z-index: 1;
}

.elcom-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.elcom-header .elcom-header-text {
  position: absolute;
  left: max(0rem, calc(50% - 37.5rem));
  color: var(--elcom-primary-blue);
  font-family: var(--elcom-header-font-family);
  font-size: 3rem;
  font-weight: 300;
  line-height: 5rem;
  height: 5rem;
  background-color: var(--elcom-primary-green);
  padding: 0 1rem;
  z-index: 2;
}

.elcom-header .elcom-header-text::before {
  content: "";
  position: absolute;
  top: 0;
  left: min(0rem, calc(37.5rem - 50vw));
  width: max(0rem, calc(50vw - 37.5rem));
  height: 5rem;
  background-color: var(--elcom-primary-green);
  z-index: -1;
}

/* Mobile & Tablet styles */
@media (max-width: 64rem) {
  .elcom-header .elcom-header-text {
    font-size: 2rem;
    line-height: 4rem;
    height: 4rem;
  }
}

/* Desktop styles */
@media (min-width: 76rem) {
  .elcom-header .elcom-header-text {
    padding-left: 0;
  }
}
</style>
