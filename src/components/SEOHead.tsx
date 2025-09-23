import Script from 'next/script';
import { localBusinessSchema, organizationSchema, faqSchema } from '@/lib/schema';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title = 'NW Landscape Management | Award-Winning Landscaping Services | Federal Way, Tacoma, South Sound',
  description = 'Award-winning landscape design and maintenance services for Federal Way, Tacoma, and the South Sound area. 29+ years of excellence. Starting at $325/month for maintenance.',
  keywords = 'landscaping, landscape maintenance, Federal Way, Tacoma, Kent, Auburn, landscape design, irrigation, hardscaping, patio installation, landscape lighting',
  canonical = 'https://nwlandscape.com',
  ogImage = '/images/og-image.jpg',
  noindex = false
}: SEOHeadProps) {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      
      <link rel="canonical" href={canonical} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NW Landscape Management" />
      <meta property="og:locale" content="en_US" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <meta name="geo.region" content="US-WA" />
      <meta name="geo.placename" content="Federal Way" />
      <meta name="geo.position" content="47.3223;-122.3126" />
      <meta name="ICBM" content="47.3223, -122.3126" />
      
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      
      <meta name="author" content="NW Landscape Management" />
      <meta name="copyright" content="NW Landscape Management" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="NW Landscape" />
      
      <meta name="application-name" content="NW Landscape Management" />
      <meta name="msapplication-TileColor" content="#1B3B0D" />
      <meta name="theme-color" content="#1B3B0D" />
    </>
  );
}
