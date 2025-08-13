import React from 'react';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import Timeline from './components/Timeline.jsx';
import SkillCloud from './components/SkillCloud.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import { profile, education, experiences, skills, projects, achievements } from './data.js';

export default function App() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-10">
      <Hero profile={profile} />

      <Section id="skills" title="TECH STACK">
        <SkillCloud skills={skills} />
      </Section>

      <Section id="experience" title="EXPERIENCE">
        <Timeline items={experiences} />
      </Section>

      <Section id="education" title="EDUCATION">
        <Timeline items={education} />
      </Section>

      <Section id="projects" title="PROJECTS">
        <ProjectGrid projects={projects} />
      </Section>

      <Section id="links" title="ACHIEVEMENTS / CERTS">
        <div className="flex flex-wrap gap-3">
          {achievements.map((a, i) => (
            <a key={i} className="glass px-4 py-2 rounded-full hover:shadow-glow transition" href={a.href} target="_blank" rel="noreferrer">
              {a.label}
            </a>
          ))}
        </div>
      </Section>

      <footer className="text-center text-white/50 py-6">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
