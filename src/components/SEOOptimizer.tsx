'use client';

import { useEffect } from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;
}

export default function SEOOptimizer({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  structuredData
}: SEOOptimizerProps) {
  useEffect(() => {
    // Update page title if provided
    if (title) {
      document.title = title;
    }

    // Add canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Add structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }

    // Add meta tags for social sharing
    const metaTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: ogType },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    metaTags.forEach(({ property, name, content }) => {
      if (content) {
        const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
        let meta = document.querySelector(selector);
        
        if (!meta) {
          meta = document.createElement('meta');
          if (property) {
            meta.setAttribute('property', property);
          } else {
            meta.setAttribute('name', name!);
          }
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      }
    });

    // Add breadcrumb structured data for better SEO
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nwlandscape.com"
        }
      ]
    };

    // Add breadcrumb script
    let breadcrumbScript = document.querySelector('script[data-breadcrumb]');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      breadcrumbScript.setAttribute('data-breadcrumb', 'true');
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);

  }, [title, description, keywords, canonical, ogImage, ogType, structuredData]);

  return null;
}
