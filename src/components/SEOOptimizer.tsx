'use client';

import { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any;
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

  return (
    <Head>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google.com" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
      
      {/* Additional performance hints */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#1B3B0D" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="NW Landscape Management" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Robots and indexing */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Local business schema */}
      <meta name="geo.region" content="US-WA" />
      <meta name="geo.placename" content="Federal Way" />
      <meta name="geo.position" content="47.3223;-122.3126" />
      <meta name="ICBM" content="47.3223, -122.3126" />
    </Head>
  );
}
