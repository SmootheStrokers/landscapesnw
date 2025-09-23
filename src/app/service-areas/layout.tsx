import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas | NW Landscape Management | Federal Way, Tacoma, Kent, Auburn',
  description: 'NW Landscape Management serves 21+ cities including Federal Way, Tacoma, Kent, Auburn, Renton, Des Moines, and surrounding South Sound areas. 29+ years of local expertise.',
  keywords: 'service areas, Federal Way, Tacoma, Kent, Auburn, Renton, Des Moines, Covington, Maple Valley, Sumner, landscape services, local landscapers',
};

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
