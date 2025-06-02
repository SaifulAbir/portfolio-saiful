import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils'; // For tailwind-merge

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saiful Islam - Software Engineer Portfolio',
  description: 'A modern and interactive portfolio showcasing my skills, projects, and career journey as a Software Engineer.',
  keywords: ['Software Engineer', 'Developer', 'Portfolio', 'Next.js', 'React', 'TypeScript'],
  openGraph: {
    title: 'Saiful Islam - Software Engineer Portfolio',
    description: 'A modern and interactive portfolio showcasing my skills, projects, and career journey as a Software Engineer.',
    url: 'https://your-portfolio.netlify.app',
    siteName: 'Saiful Islam Portfolio',
    images: [
      {
        url: '/social-preview.png', // Image for social media previews
        width: 1200,
        height: 630,
        alt: 'Saiful Islam Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saiful Islam - Software Engineer Portfolio',
    description: 'A modern and interactive portfolio showcasing my skills, projects, and career journey as a Software Engineer.',
    creator: '@your_twitter_handle', // Optional
    images: ['/social-preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Add sitemap.xml and robots.txt in public folder
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen bg-background font-sans antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
