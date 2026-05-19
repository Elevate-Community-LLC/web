<script setup lang="ts">
export interface NavbarLinkProps {
  to: string
  text: string
  target?: string
  isSmoothScroll?: boolean
}

const props = defineProps<NavbarLinkProps>()

const smoothScroll = (e: Event) => {
  e.preventDefault(); // Prevent the default jump behavior
  const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.replace(/[\/#]/g, ''); // Remove any leading slash or hash from the href to get the target ID
  const targetElement = document.getElementById(targetId!);

  if (props.isSmoothScroll && targetElement) {
      setTimeout(() => {
          document.getElementById(targetId!)!.scrollIntoView({
              behavior: 'smooth'
          });
      }, 200);
  }
}
</script>

<template>
  <li>
    <RouterLink
      :class="{ 'elcom-active': $route.path.includes(props.to.replace(/\#/, '')) }"
      :to="props.to"
      :target="props.target"
      :rel="props.target ? 'noopener noreferrer' : undefined"
      @click="smoothScroll"
    >{{ props.text }}</RouterLink>
  </li>
</template>
