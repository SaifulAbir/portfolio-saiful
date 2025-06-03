// src/app/page.tsx
'use client'; // THIS MUST BE THE VERY FIRST LINE

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Timeline } from '@/components/Timeline';
import { Education } from '@/components/Education';
// import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Loader } from '@/components/Loader'; // Import the Loader component
import data from '@/lib/data.json'; // Import your data
import { cn } from '@/lib/utils'; // For tailwind-merge, if needed for body class

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading. In a real app, this would be tied to
    // actual data fetching, image loading, or component hydration completion.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    // Apply min-h-screen, bg-background, font-sans, antialiased here
    // as body classes are now managed by the layout.
    // cn is used if you want to merge multiple class strings from different sources.
    <div className={cn('min-h-screen bg-background font-sans antialiased')}>
      <Loader isLoading={isLoading} /> {/* Render the loader */}

      {/* Only render content when not loading to prevent layout shifts */}
      {!isLoading && (
        <>
          <Navbar />
          <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
            <section id="hero" className="mb-24">
              <Hero data={data.hero} />
            </section>
            <section id="about" className="mb-24">
              <About data={data.about} />
            </section>
            <section id="skills" className="mb-24">
              <Skills data={data.skills} />
            </section>
            <section id="skills" className="mb-24">
              <Education data={data.education} />
            </section>
            <section id="projects" className="mb-24">
              <Projects data={data.projects} />
            </section>
            <section id="timeline" className="mb-24">
              <Timeline data={data.timeline} />
            </section>
            {/* <section id="resume" className="mb-24">
              <Resume />
            </section> */}
            <section id="contact" className="mb-24">
              <Contact data={data.contact} />
            </section>
          </main>
          <Footer data={data.hero.socialLinks} />
        </>
      )}
    </div>
  );
}