// src/app/page.tsx
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
// import { About } from '@/components/About';
// import { Skills } from '@/components/Skills';
// import { Projects } from '@/components/Projects';
// import { Timeline } from '@/components/Timeline';
// import { Resume } from '@/components/Resume';
// import { Contact } from '@/components/Contact';
// import { Footer } from '@/components/Footer';
import data from '@/lib/data.json'; // Import your data

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <section id="hero" className="mb-24">
          <Hero data={data.hero} />
        </section>
        {/* <section id="about" className="mb-24">
          <About data={data.about} />
        </section>
        <section id="skills" className="mb-24">
          <Skills data={data.skills} />
        </section>
        <section id="projects" className="mb-24">
          <Projects data={data.projects} />
        </section>
        <section id="timeline" className="mb-24">
          <Timeline data={data.timeline} />
        </section>
        <section id="resume" className="mb-24">
          <Resume />
        </section>
        <section id="contact" className="mb-24">
          <Contact data={data.contact} />
        </section> */}
      </main>
      {/* <Footer data={data.hero.socialLinks} /> */}
    </div>
  );
}