/**
 * FLUXO — 3D Background & Interaction Controller (ES Module)
 */

import TubesCursor from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js';

// 1. Initialize TubesCursor 3D Background
function init3DBackground() {
  const canvas = document.getElementById('canvas');
  if (!canvas) return;

  try {
    const app = TubesCursor(canvas, {
      tubes: {
        count: 16,
        colors: ['#ff008a', '#8b5cf6', '#3b82f6', '#ffffff'],
        minRadius: 0.005,
        maxRadius: 0.045,
        minTubularSegments: 32,
        maxTubularSegments: 128,
        material: {
          metalness: 0.95,
          roughness: 0.25,
        },
        lights: {
          intensity: 50,
          colors: ['#ff008a', '#8b5cf6', '#3b82f6', '#ffffff'],
        },
        lerp: 0.45,
        noise: 0.04,
      },
      bloom: {
        threshold: 0.05,
        strength: 1.2,
        radius: 0.4,
      },
    });

    // Explicitly do NOT randomize colors on click per specifications
    console.log('TubesCursor 3D background initialized with static premium palette.');
  } catch (error) {
    console.warn('WebGL / Three.js TubesCursor initialization skipped or unsupported:', error);
  }
}

// 2. Mobile Menu Toggle Controller
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (!hamburgerBtn || !mobileDrawer) return;

  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileDrawer.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
  });

  // Close when clicking outside the drawer
  document.addEventListener('click', (e) => {
    if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && e.target !== hamburgerBtn) {
      mobileDrawer.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      mobileDrawer.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on link click
  const links = mobileDrawer.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// 3. Mount on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    init3DBackground();
    initMobileMenu();
  });
} else {
  init3DBackground();
  initMobileMenu();
}
