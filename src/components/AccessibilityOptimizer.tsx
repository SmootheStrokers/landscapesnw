'use client';

import { useEffect } from 'react';

export default function AccessibilityOptimizer() {
  useEffect(() => {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pacific-evergreen text-pure-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content landmark
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }

    // Enhance focus management
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeDropdown = document.querySelector('[aria-expanded="true"]');
        if (activeDropdown) {
          (activeDropdown as HTMLElement).click();
        }
      }

      // Arrow keys for navigation in menus
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const menu = document.querySelector('[role="menu"]');
        if (menu && document.activeElement?.closest('[role="menu"]')) {
          e.preventDefault();
          const focusable = Array.from(menu.querySelectorAll(focusableElements));
          const currentIndex = focusable.indexOf(document.activeElement as Element);
          let nextIndex;

          if (e.key === 'ArrowDown') {
            nextIndex = currentIndex < focusable.length - 1 ? currentIndex + 1 : 0;
          } else {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : focusable.length - 1;
          }

          (focusable[nextIndex] as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Enhance form accessibility
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      // Add required field indicators
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        const label = form.querySelector(`label[for="${field.id}"]`);
        if (label && !label.textContent?.includes('*')) {
          label.innerHTML += ' <span class="text-red-500" aria-label="required">*</span>';
        }
      });

      // Add error announcements
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('invalid', () => {
          const errorMessage = input.getAttribute('aria-describedby');
          if (errorMessage) {
            const errorElement = document.getElementById(errorMessage);
            if (errorElement) {
              errorElement.setAttribute('role', 'alert');
              errorElement.setAttribute('aria-live', 'polite');
            }
          }
        });
      });
    });

    // Enhance image accessibility
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt && img.getAttribute('role') !== 'presentation') {
        img.alt = 'Landscape image';
      }
    });

    // Add ARIA landmarks
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      if (!section.getAttribute('aria-label') && !section.getAttribute('aria-labelledby')) {
        const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
        if (heading) {
          section.setAttribute('aria-labelledby', heading.id || `heading-${index}`);
          if (!heading.id) {
            heading.id = `heading-${index}`;
          }
        }
      }
    });

    // Enhance button accessibility
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        const icon = button.querySelector('svg');
        if (icon) {
          const iconName = icon.getAttribute('aria-label') || 'icon';
          button.setAttribute('aria-label', iconName);
        }
      }
    });

    // Add live region for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.id = 'live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);

    // Announce page changes for SPA navigation
    const announcePageChange = (title: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = `Page changed to ${title}`;
      }
    };

    // Store announce function globally for use in navigation
    (window as { announcePageChange?: (title: string) => void }).announcePageChange = announcePageChange;

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        document.body.removeChild(skipLink);
      }
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        document.body.removeChild(liveRegion);
      }
    };
  }, []);

  return null;
}
