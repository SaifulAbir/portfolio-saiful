// src/app/page.tsx
'use client'; // THIS MUST BE THE VERY FIRST LINE

import { useState, useEffect, useCallback } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Timeline } from '@/components/Timeline';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Loader } from '@/components/Loader';
import data from '@/lib/data.json';
import { cn } from '@/lib/utils';

const MIN_LOADER_MS = 800;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const start = Date.now();

    const done = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_LOADER_MS - elapsed);
      setTimeout(finishLoading, remaining);
    };

    if (document.readyState === 'complete') {
      done();
    } else {
      window.addEventListener('load', done);
      return () => window.removeEventListener('load', done);
    }
  }, [finishLoading]);

  return (
    <div className={cn('min-h-screen bg-background font-sans antialiased')}>
      <Loader isLoading={isLoading} />

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
            <section id="education" className="mb-24">
              <Education data={data.education} />
            </section>
            <section id="projects" className="mb-24">
              <Projects data={data.projects} />
            </section>
            <section id="timeline" className="mb-24">
              <Timeline data={data.timeline} />
            </section>
            <section id="contact" className="mb-24">
              <Contact data={data.contact} />
            </section>
          </main>
          <Footer data={{ ...data.hero.socialLinks, email: data.contact.email }} />
        </>
      )}
    </div>
  );
}