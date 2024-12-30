import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export function SEO({ 
  title = 'AI Tools Catalog | Like Look Solutions',
  description = 'Explore our curated collection of AI tools for 3D modeling, art generation, and more. Powered by Like Look Solutions.',
  image = '/og-image.jpg'
}: SEOProps) {
  const siteUrl = 'https://likelook.wixsite.com/solutions';
  const contact = {
    name: 'Julio Campos Machado',
    whatsapp: '+5511970603441'
  };

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Contact Information */}
      <meta name="author" content={contact.name} />
      <meta property="business:contact_data:website" content={siteUrl} />
      <meta property="business:contact_data:phone_number" content={contact.whatsapp} />
    </Helmet>
  );
}