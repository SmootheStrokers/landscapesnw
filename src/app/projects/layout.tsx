import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landscape Projects & Portfolio | NW Landscape Management | Award-Winning Designs',
  description: 'Explore our award-winning landscape projects including Federal Way Symphony Garden Tour features. Before/after transformations across Federal Way, Tacoma, and South Sound.',
  keywords: 'landscape projects, portfolio, before after, Federal Way, Tacoma, landscape design, hardscaping, irrigation, garden tours',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
