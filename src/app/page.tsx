// src/app/page.tsx
// Server Component — NO "use client", NO dynamic import here.
// AiChat is rendered via ClientShell which is a Client Component.

import Navbar   from "@/components/Navbar";
import Hero     from "@/components/sections/Hero";
import About    from "@/components/sections/About";
import Skills   from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact  from "@/components/sections/Contact";
// console.log('Contact value:', Contact);
// console.log('Is Contact a function?', typeof Contact === 'function');
// console.log('Contact keys:', Object.keys(Contact || {}));
import Footer   from "@/components/Footer";
import ClientShell from "@/components/ClientShell";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ClientShell />
    </main>
  );
}