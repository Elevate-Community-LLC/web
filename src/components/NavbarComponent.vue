<script setup lang="ts">
import { useModule } from '@/composables/useModule';
import { useNav } from '@/composables/useNav';
import NavbarLinkComponent from './NavbarLinkComponent.vue';
import { useRoute } from 'vue-router';

const module = useModule()
const nav = useNav()
const route = useRoute();


const mouseEnterNavDrop = (dropName) => {
    const dropElement = document.querySelector(`.elcom-nav-drop[data-nav-drop="${dropName}"]`);
    if (dropElement) {
        dropElement.style.zIndex = '5';
        dropElement.style.opacity = '1';
    }
}

const mouseLeaveNavDrop = (dropName) => {
    const dropElement = document.querySelector(`.elcom-nav-drop[data-nav-drop="${dropName}"]`);
    if (dropElement) {
        dropElement.style.zIndex = '-1';
        dropElement.style.opacity = '0';
    }
}

const toggleNavbarMobileMenu = (shouldOpen = false) => {
  const navMenu = document.querySelector('.elcom-navbar .elcom-nav');

  if (navMenu.style.opacity === '1') {
    closeNavbarMobileMenu();
  }

  else if (shouldOpen) {
    const popupBg = document.querySelector('.elcom-popup-background');
    const toggleButton = document.querySelector('.elcom-navbar .elcom-quick-contact li:last-child img');

    navMenu.style.opacity = '1';
    navMenu.style.zIndex = '1001';
    popupBg.style.opacity = '1';
    popupBg.style.zIndex = '1000';
    toggleButton.style.filter = 'brightness(1)';

    disableScroll();
  }
}

const closeNavbarMobileMenu = () => {
  const navMenu = document.querySelector('.elcom-navbar .elcom-nav');
  const popupBg = document.querySelector('.elcom-popup-background');
  const toggleButton = document.querySelector('.elcom-navbar .elcom-quick-contact li:last-child img');

  // Unset styles to return to CSS defaults.
  navMenu.style.removeProperty('opacity');
  navMenu.style.removeProperty('z-index');
  popupBg.style.removeProperty('opacity');
  popupBg.style.removeProperty('z-index');

  // This one needs to be explicitly set, or it will stay hover-styled.
  // Since the style change is only triggered by a click, leaving it set isn't really an issue.
  toggleButton.style.filter = 'brightness(0)';

  enableScroll();
}

// Source - https://stackoverflow.com/a
// Posted by gblazex, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-22, License - CC BY-SA 4.0

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = {37: 1, 38: 1, 39: 1, 40: 1};

const preventDefault = (e) => {
  e.preventDefault();
}

const preventDefaultForScrollKeys = (e) => {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch(e) {}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
const disableScroll = () => {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
const enableScroll = () => {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
</script>

<script lang="ts">
export default {
  name: 'NavbarComponent',
  components: {
    NavbarLinkComponent,
  },
}
</script>

<template>
  <div class="elcom-popup-background" @click="() => closeNavbarMobileMenu()"></div>

  <div class="elcom-navbar" data-nosnippet>
    <div class="elcom-container">
      <RouterLink to="/">
      <img
        src="@/assets/icons/logo.svg"
        height="50px"
        :style="{ marginTop: '4px'}"
        alt=""
      />
    </RouterLink>

    <ul class="elcom-ul elcom-links elcom-nav">
      <template
          v-for="navItem in nav.items"
          v-bind:key="navItem.name"
        >
          <NavbarLinkComponent
            v-if="navItem.type === 'link'"
            :to="(route.path === '/') ? navItem.href.replace(/^\//, '#') : navItem.href"
            :text="navItem.name"
            :target="navItem.hrefType === 'external' ? '_blank' : undefined"
            :is-smooth-scroll="true"
            @click="() => toggleNavbarMobileMenu() || mouseLeaveNavDrop(navItem.name.toLocaleLowerCase().replace(/\s+/g, '_'))"
          />
          <li
            v-else-if="navItem.type === 'drop' && route.path === '/'"
            @mouseenter="() => mouseEnterNavDrop(navItem.name.toLocaleLowerCase().replace(/\s+/g, '_'))"
            @mouseleave="() => mouseLeaveNavDrop(navItem.name.toLocaleLowerCase().replace(/\s+/g, '_'))"
          >
            <NavbarLinkComponent
              :to="'#' + navItem.name.toLocaleLowerCase().replace(/\s+/g, '_')"
              :text="navItem.name"
              :is-smooth-scroll="true"
              @click="() => toggleNavbarMobileMenu() || mouseLeaveNavDrop(navItem.name.toLocaleLowerCase().replace(/\s+/g, '_'))"
            />
            <ul
              class="elcom-ul elcom-links elcom-nav elcom-nav-drop"
              :data-nav-drop="navItem.name.toLocaleLowerCase().replace(/\s+/g, '_')"
            >
              <template
                v-for="dropItem in navItem.items"
                v-bind:key="dropItem.name"
              >
                <NavbarLinkComponent
                  :to="dropItem.href"
                  :text="dropItem.name"
                  :target="dropItem.hrefType === 'external' ? '_blank' : undefined"
                />
              </template>
            </ul>
          </li>
          <li
            v-else-if="navItem.type === 'drop' && route.path !== '/'"
            @mouseenter="() => mouseEnterNavDrop(navItem.name.toLocaleLowerCase().replace(/\s+/g, '_'))"
            @mouseleave="() => mouseLeaveNavDrop(navItem.name.toLocaleLowerCase().replace(/\s+/g, '_'))"
          >
            <NavbarLinkComponent
              :to="'/' + navItem.name.toLocaleLowerCase().replace(/\s+/g, '_')"
              :text="navItem.name"
              @click="() => toggleNavbarMobileMenu()"
            />
            <ul
              class="elcom-ul elcom-links elcom-nav elcom-nav-drop"
              :data-nav-drop="navItem.name.toLocaleLowerCase().replace(/\s+/g, '_')"
            >
              <template
                v-for="dropItem in navItem.items"
                v-bind:key="dropItem.name"
              >
                <NavbarLinkComponent
                  :to="dropItem.href"
                  :text="dropItem.name"
                  :target="dropItem.hrefType === 'external' ? '_blank' : undefined"
                />
              </template>
            </ul>
          </li>
        </template>
        <li><a href="mailto:brandon@elevatecommunity.llc">Contact</a></li>
      </ul>

      <ul class="elcom-ul elcom-links elcom-quick-contact">
        <li><a href="mailto:brandon@elevatecommunity.llc"><img loading="eager" src="@/assets/icons/mail.svg" alt="Email Icon" width="32px" height="32px"/></a></li>
        <li><a href="callto:3603207728"><img loading="eager" src="@/assets/icons/phone.svg" alt="Phone Icon" width="32px" height="32px"/></a></li>
        <li><a href="#" @click="() => toggleNavbarMobileMenu(true)"><img loading="eager" src="@/assets/icons/menu.svg" alt="Menu Icon" width="32px" height="32px"/></a></li>
    </ul>
    </div>
  </div>
</template>

<style scoped>
.elcom-navbar {
    height: 5rem;
    width: 100%;
}

.elcom-navbar::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: var(--elcom-background-green);
    z-index: -1;
}

.elcom-container {
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}

.elcom-navbar .elcom-logo {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
}

.elcom-navbar .elcom-logo img {
    height: 3rem;
}

.elcom-navbar .elcom-logo-text {
    font-family: var(--elcom-header-font-family);
    color: var(--elcom-primary-blue);
    font-size: 2rem;
    font-weight: 300;
    padding-top: 1.2rem;
}

.elcom-navbar .elcom-nav {
    margin-left: 2rem;
    opacity: 1;
}

.elcom-navbar .elcom-nav-drop {
    position: absolute;
    top: 5rem;
    left: -4rem;
    background-color: var(--elcom-background-blue);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: -1;
    padding: 2rem;
    width: 15rem;
    height: max-content;
    opacity: 0;
    border-left: 3px solid var(--elcom-primary-blue);
    border-bottom: 3px solid var(--elcom-primary-green);
    transition: opacity 0.3s ease;
}

:deep(.elcom-nav-drop li a) {
  color: #ddd;
}

.elcom-navbar .elcom-quick-contact {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.elcom-navbar .elcom-quick-contact * {
    height: 32px;
}

.elcom-navbar .elcom-quick-contact li:last-child {
    display: none;
}

/* Mobile styles */
@media (max-width: 48rem) {
    .elcom-navbar .elcom-nav {
        position: absolute;
        top: 5rem;
        right: 0;
        flex-direction: column;
        align-items: flex-start;
        background-color: var(--elcom-background-blue);
        margin: 0;
        padding: 2rem;
        opacity: 0;
        transition: opacity 0.3s ease;
        gap: 1rem;
        z-index: -1000;
        height: max-content;
        width: 15rem;
    }

    :deep(.elcom-links.elcom-ul li a) {
      color: #ddd;
    }

    .elcom-navbar .elcom-quick-contact li:last-child {
        display: flex;
    }
}

@media (min-width: 48rem) {
    .elcom-navbar .elcom-nav-drop li a {
        color: #ddd;
    }
}

</style>
