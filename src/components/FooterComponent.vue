<script setup lang="ts">
import { useRoute } from 'vue-router';
import NavbarLinkComponent from './NavbarLinkComponent.vue';
import { watch } from 'vue';

const route = useRoute();
let path = '/';

watch(() => route.path, () => {
  path = route.path;
});
</script>

<template>

  <div
    class="elcom-section elcom-footer"
    data-nosnippet
  >
    <div class="elcom-container">
        <a href="/">
          <img src="@/assets/icons/logo.svg" />
        </a>
      <div class="elcom-content">
        <div class="elcom-dynamic-links">
          <ul class="elcom-ul elcom-links elcom-nav">
            <NavbarLinkComponent
              :to="path === '/' ? '#services' : '/services'"
              text="Services"
              :is-smooth-scroll="path === '/'"
            />
            <NavbarLinkComponent
              :to="path === '/' ? '#platforms' : '/platforms'"
              text="Platforms"
              :is-smooth-scroll="path === '/'"
            />
            <NavbarLinkComponent
              :to="path === '/' ? '#products' : '/products'"
              text="Products"
              :is-smooth-scroll="path === '/'"
            />
          </ul>
          <ul class="elcom-ul elcom-links elcom-nav">
            <!-- <NavbarLinkComponent
              :to="path === '/' ? '#stories' : '/stories'"
              text="Stories"
              :is-smooth-scroll="path === '/'"
            /> -->
            <NavbarLinkComponent
              :to="path === '/' ? '#about' : '/about'"
              text="About"
              :is-smooth-scroll="path === '/'"
            />
            <li><a href="mailto:brandon@elevatecommunity.llc">Contact</a></li>
          </ul>
        </div>

        <div class="copyright">&copy; 2026 Elevate Community, LLC. All rights reserved.</div>
      </div>
        <ul class="elcom-ul elcom-links elcom-quick-contact">
        <li><a href="mailto:brandon@elevatecommunity.llc"><img
              src="@/assets/icons/mail.svg"
              alt="Email Icon"
              width="32px"
              height="32px"
            /></a></li>
        <li><a href="callto:3603207728"><img
              src="@/assets/icons/phone.svg"
              alt="Phone Icon"
              width="32px"
              height="32px"
            /></a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" scoped>
.elcom-footer {
  width: 100%;
  position: relative;
  background-color: var(--elcom-background-blue);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.elcom-footer .elcom-container {
  width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.elcom-footer .elcom-container>* {
    min-width: 16rem;
}

.elcom-footer img {
    max-width: 16rem;
}

.elcom-footer .elcom-content {
  width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--elcom-background-green);
}

.elcom-footer .elcom-dynamic-links {
    display: flex;
    flex-direction: row;
}

.elcom-footer .elcom-dynamic-links .elcom-ul:first-child {
    padding-right: 1.5rem;
}

.elcom-footer .elcom-links.elcom-ul {
    height: auto;
}

:deep(.elcom-links.elcom-ul li a) {
    color: var(--elcom-background-green);
}

:deep(.elcom-links.elcom-ul li a:hover) {
    color: var(--elcom-primary-green);
}

.elcom-footer .elcom-quick-contact img {
    filter: brightness(0) saturate(100%) invert(99%) sepia(2%) saturate(26%) hue-rotate(137deg) brightness(102%) contrast(82%);
}

.elcom-footer .elcom-quick-contact img:hover {
    filter: brightness(0) saturate(100%) invert(58%) sepia(21%) saturate(796%) hue-rotate(57deg) brightness(94%) contrast(93%);
}

.elcom-footer .elcom-quick-contact {
    justify-content: flex-end;
}

@media (max-width: 77rem) {
    .elcom-footer .elcom-container {
      width: initial;
        flex-direction: column;
        justify-content: flex-start;
        gap: 2rem;
    }
    .elcom-footer .elcom-dynamic-links {
        display: flex;
        flex-direction: column;
        place-items: center;
    }
    .elcom-footer .elcom-dynamic-links .elcom-ul:first-child {
        padding-right: 0;
        padding-bottom: 0.2rem;
    }
    .elcom-footer .elcom-quick-contact {
        display: none;
    }
}
</style>
