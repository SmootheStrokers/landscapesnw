import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact NW Landscape Management | Free Quote | Federal Way, Tacoma, WA',
  description: 'Get your free landscape quote from NW Landscape Management. Call (253) 661-5824 or request online quote. 29+ years serving Federal Way, Tacoma, and South Sound area.',
  keywords: 'contact NW Landscape, free quote, landscape consultation, Federal Way landscapers, Tacoma landscape company, get quote online',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
