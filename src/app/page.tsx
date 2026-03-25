// src/app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: The home page — serves the "/" route.
//

// ─────────────────────────────────────────────────────────────────────────────


import Navbar   from "@/components/Navbar";
import Hero     from "@/components/sections/Hero";
import About    from "@/components/sections/About";
import Skills   from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact  from "@/components/sections/Contact";
import Footer   from "@/components/Footer";
import AiChatWrapper from "@/components/AiChatWrapper";


export default function HomePage() {
  return (
    <main>
      {/* Navbar: position:fixed inside Navbar.tsx — stays at top while scrolling */}
      <Navbar />

     
      <Hero />       {/* id="home" */}
      <About />      {/* id="about"  */}
      <Skills />     {/* id="skills" */}
      <Projects />   {/* id="projects" */}
      <Contact />    {/* id="contact" */}
      <Footer />

      {/* AiChat: floats fixed bottom-right, visible on all sections */}
      <AiChatWrapper />
    </main>
  );
}