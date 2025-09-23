'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { href: '/images/Landscape-Maintenance-88.jpg', as: 'image' },
      { href: '/images/landscape-design-slider1-1024x768 (1).png', as: 'image' },
      { href: '/images/NW-Tree-Farm.jpg', as: 'image' }
    ];

    preloadLinks.forEach(({ href, as }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      document.head.appendChild(link);
    });

    // Optimize images with lazy loading
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });

    // Add performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        // Core Web Vitals monitoring
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            if (entry.entryType === 'first-input') {
              console.log('FID:', entry.processingStart - entry.startTime);
            }
            if (entry.entryType === 'layout-shift') {
              if (!entry.hadRecentInput) {
                console.log('CLS:', entry.value);
              }
            }
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      });
    }

    return () => {
      // Cleanup
      preloadLinks.forEach(({ href }) => {
        const link = document.querySelector(`link[href="${href}"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return null;
}