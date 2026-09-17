import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { internships } from '../../data/portfolio';

function BriefcaseFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-none" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="14" width="36" height="26" rx="6" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.12" />
      <path d="M 18 14 V 10 C 18 7.8 19.8 6 22 6 H 26 C 28.2 6 30 7.8 30 10 V 14" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 6 24 H 42" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <rect x="20" y="21" width="8" height="6" rx="2" stroke={color} strokeWidth="2" fill="#fff" />
    </svg>
  );
}

export function Internship(): JSX.Element {
  const { theme } = useTheme();

  return (
    <section id="experience" className="site-section">
      <div className="container">
        <header className="mb-10 sm:mb-14 text-center">
          <p className="section-label justify-center">Training</p>
          <h2 className="section-title">Internship <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle mx-auto">Hands-on experience across Artificial Intelligence, Machine Learning, and Data Analysis</p>
        </header>

        <div className="mx-auto max-w-[1000px] grid gap-6 lg:grid-cols-2">
          {internships.map((item) => (
            <article key={`${item.title}-${item.date}`} className="glass-card p-5 sm:p-8">
              <div className="flex items-center gap-3.5 sm:gap-4 mb-3.5 sm:mb-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex-none flex items-center justify-center border shadow-inner ${
                  theme === 'dark' ? 'bg-purple-500/10 border-purple-500/30' : 'bg-purple-50 border-purple-200'
                }`}>
                  <BriefcaseFlaticon color={theme === 'dark' ? '#c084fc' : '#9333ea'} />
                </div>
                <div>
                  <h3 className={`text-base sm:text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm font-semibold text-[#00d4ff]">{item.company}</p>
                </div>
              </div>

              <p className={`font-mono text-[11px] sm:text-xs mb-3 sm:mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                {item.date}
              </p>

              <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                {item.description}
              </p>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                {item.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
