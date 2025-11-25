"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <nav className="max-w-4xl mx-auto px-6 md:px-0 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-medium">
            Nuzze
          </Link>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-gray-400 transition-colors">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-gray-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-gray-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-balance">
            crafting software
            <br />
            for humans.
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            I love to build beautiful, easy-to-use digital products
            <br />
            with a focus on accessibility and user experience.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/nuzzesick"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/nuzze"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://twitter.com/nuzzze"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              Twitter ↗
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I&apos;m a Software Developer born and raised in Buenos Aires,
              Argentina. I&apos;ve been a software enthusiast since childhood
              and started programming my first websites at 16.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I dropped out of university and began my programming career
              self-taught. I&apos;m primarily passionate about frontend
              development and crafting beautiful easy-to-use products.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              As a good Argentinian, I like football⚽, mate🧉, and working in
              environments with great human and cultural values.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>

          {/* Current Role */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <a
                  href="https://connect.earth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors"
                >
                  Connect Earth
                </a>
              </div>
              <p className="text-sm text-gray-500 md:text-right mt-1 md:mt-0">
                Oct 2025 — Present
                <br />
                London (Remote)
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Connect Earth acquired Datia in October 2025. I continue
              developing and maintaining the sustainability platform, working
              with the same tech stack and responsibilities.
            </p>
          </div>

          {/* Dogma */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold">Co-founder</h3>
                <a
                  href="https://getdogma.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors"
                >
                  Dogma
                </a>
              </div>
              <p className="text-sm text-gray-500 md:text-right mt-1 md:mt-0">
                Feb 2025 — Present
                <br />
                Buenos Aires
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Dogma is the easiest way to discover electronic music events in
              Argentina. We recently launched our own ticketing system with QR
              code scanning.
            </p>
            <div className="flex gap-3 text-sm mb-4">
              <a
                href="https://getdogma.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Website ↗
              </a>
              <a
                href="https://getdogma.app/web/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Web App ↗
              </a>
              <a
                href="https://getdogma.app/download"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Mobile App ↗
              </a>
            </div>
            <p className="text-sm text-gray-500 font-mono">
              Next.js · React Native · TailwindCSS · Express · Prisma · Supabase
              · Firebase · MercadoPago
            </p>
          </div>

          {/* Datia */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <a
                  href="https://datia.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors"
                >
                  Datia
                </a>
              </div>
              <p className="text-sm text-gray-500 md:text-right mt-1 md:mt-0">
                Nov 2020 — Oct 2025
                <br />
                Stockholm (Remote)
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Joined at an early stage (4 people) and built the entire UI for a
              sustainability SaaS platform. Participated in client conversations
              and software architecture decisions. Helped scale the team to
              almost 20 people.
            </p>
            <p className="text-sm text-gray-500 font-mono">
              Next.js · MUI · Tanstack Query · TailwindCSS · Cypress · Storybook
              · Formik · Framer Motion
            </p>
          </div>

          {/* Rather */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <a
                  href="https://ratherlabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors"
                >
                  Rather Labs
                </a>
              </div>
              <p className="text-sm text-gray-500 md:text-right mt-1 md:mt-0">
                Aug 2020 — Nov 2020
                <br />
                Buenos Aires
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Joined at an early stage and built the entire web UI for a social
              network for moviegoers.
            </p>
            <p className="text-sm text-gray-500 font-mono">
              Next.js · TailwindCSS
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
          <p className="text-gray-300 text-lg mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities.
            <br />
            Feel free to send me an email so we can get to know each other and
            drink mate.
          </p>
          <a
            href="mailto:mati280341@gmail.com"
            className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
          >
            Send me an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nuzze. Made in Argentina 🇦🇷</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/nuzzesick"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nuzze"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/nuzzze"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
