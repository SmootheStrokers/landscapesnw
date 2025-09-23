import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lawn Care & Maintenance Services | NW Landscape Management | Federal Way, WA',
  description: 'Professional lawn care and maintenance services starting at $325/month. Weekly year-round service including mowing, pruning, fertilization, and pest control.',
  keywords: 'lawn care, lawn maintenance, landscape maintenance, weekly service, Federal Way, Tacoma, Kent, Auburn, lawn mowing',
};

export default function LawnCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
