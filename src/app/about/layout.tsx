import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NW Landscape Management | 29+ Years Experience | Federal Way, WA',
  description: 'Learn about NW Landscape Management\'s 29+ years of Pacific Northwest landscaping expertise. Award-winning team, licensed & insured, serving Federal Way, Tacoma, and South Sound.',
  keywords: 'about NW Landscape, landscape company history, Pacific Northwest landscaping, Federal Way, Tacoma, licensed landscapers, award winning',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
