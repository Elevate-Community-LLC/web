function toggleNavbarMobileMenu(shouldOpen = false) {
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

function closeNavbarMobileMenu() {
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
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
