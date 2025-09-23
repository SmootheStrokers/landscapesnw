import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landscape Services | NW Landscape Management | Federal Way, Tacoma, WA',
  description: 'Complete landscape services including maintenance, design, hardscaping, irrigation, and lighting. 29+ years serving Federal Way, Tacoma, and South Sound area.',
  keywords: 'landscape services, lawn maintenance, landscape design, hardscaping, irrigation systems, Federal Way, Tacoma, Kent, Auburn',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
