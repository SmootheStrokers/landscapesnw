import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials | NW Landscape Management | Federal Way, WA',
  description: 'Read reviews from satisfied clients of NW Landscape Management. 5-star testimonials from Federal Way, Tacoma, Kent, and South Sound area customers with 29+ years of service.',
  keywords: 'landscape reviews, testimonials, customer reviews, Federal Way landscapers, Tacoma landscape company, Kent lawn care reviews',
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
