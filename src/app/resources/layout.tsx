import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landscape Resources & Guides | NW Landscape Management | Tips & FAQs',
  description: 'Expert landscape guides, FAQs, and resources from NW Landscape Management. Pacific Northwest landscaping tips, maintenance guides, and seasonal advice from 29+ years of experience.',
  keywords: 'landscape guides, landscaping tips, Pacific Northwest plants, lawn care tips, irrigation maintenance, seasonal landscaping, landscape FAQ',
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
