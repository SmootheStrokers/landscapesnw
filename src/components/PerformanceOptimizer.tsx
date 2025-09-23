'use client';

import { useEffect } from 'react';

// Type definitions for Web Performance API
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: LayoutShiftAttribution[];
}

interface LayoutShiftAttribution {
  node?: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}

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
              const eventEntry = entry as PerformanceEventTiming;
              console.log('FID:', eventEntry.processingStart - eventEntry.startTime);
            }
            if (entry.entryType === 'layout-shift') {
              const layoutShiftEntry = entry as LayoutShift;
              if (!layoutShiftEntry.hadRecentInput) {
                console.log('CLS:', layoutShiftEntry.value);
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