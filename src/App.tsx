/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, startTransition } from 'react';
import { Shield, Calendar, Clock, Sparkles } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyView from './components/PrivacyView';
import TermsView from './components/TermsView';
import CookieView from './components/CookieView';
import SupportView from './components/SupportView';
import { ScreenType } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('privacy');

  // Dynamic header assets for active pages
  const headerMeta = {
    privacy: {
      badge: 'Legal Document',
      titlePrimary: 'Zyphen',
      titleSecondary: 'Privacy Policy',
      dateLabel: 'Effective Date:',
      dateValue: 'May 31, 2026',
      updateLabel: 'Last Updated:',
      updateValue: 'May 31, 2026',
    },
    terms: {
      badge: 'Core Agreement',
      titlePrimary: 'Zyphen',
      titleSecondary: 'Terms of Service',
      dateLabel: 'Effective Date:',
      dateValue: 'May 31, 2026',
      updateLabel: 'Last Updated:',
      updateValue: 'May 31, 2026',
    },
    cookies: {
      badge: 'Cache Setup',
      titlePrimary: 'Zyphen',
      titleSecondary: 'Cookie Policy',
      dateLabel: 'Effective Date:',
      dateValue: 'May 31, 2026',
      updateLabel: 'Last Updated:',
      updateValue: 'May 31, 2026',
    },
    support: {
      badge: 'Help Desk Platform',
      titlePrimary: 'Zyphen',
      titleSecondary: 'Contact Support',
      dateLabel: 'Provider Status:',
      dateValue: 'Active',
      updateLabel: 'Support Agent Response:',
      updateValue: 'Personalized (~24h)',
    },
  };

  const handleSetScreen = (screen: ScreenType) => {
    startTransition(() => {
      setCurrentScreen(screen);
    });
  };

  const activeMeta = headerMeta[currentScreen];

  return (
    <div className="bg-brand-bg text-brand-ink min-h-screen font-sans antialiased flex flex-col relative overflow-hidden selection:bg-brand-primary selection:text-black">
      {/* Decorative Arched Structure behind content (Artistic Flair) */}
      <div className="absolute top-[120px] right-[5%] lg:right-[10%] w-[380px] h-[500px] border border-brand-outline-variant/10 rounded-t-[190px] pointer-events-none -z-10 bg-gradient-to-b from-brand-primary/5 via-transparent to-transparent hidden md:block" />
      
      {/* Dynamic Background Glowing Accents */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-surface-lowest to-brand-bg -z-20 opacity-40" />
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] -z-20" />
      <div className="absolute top-[400px] -left-[100px] w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[120px] -z-20" />

      {/* Persistent Navigation Header */}
      <Header currentScreen={currentScreen} setScreen={handleSetScreen} />

      {/* Main Structural Content Canvas */}
      <main className="flex-grow max-w-[1250px] w-full mx-auto px-6 sm:px-10 py-12 md:py-20">
        
        {/* Document Header Section */}
        <header className="mb-16 text-center md:text-left relative">
          <div className="inline-block text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-brand-secondary mb-4 animate-fade-in border-b border-brand-primary/35 pb-1">
            Zyphen Archive / Vol. 26 — {activeMeta.badge}
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-light text-brand-ink tracking-tight leading-[1.1] max-w-3xl">
            <span className="font-serif italic text-brand-primary block">{activeMeta.titlePrimary}</span>
            {activeMeta.titleSecondary}
          </h1>

          {/* Date Stamp Row */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 font-sans text-xs text-brand-ink-muted mt-6 border-l border-brand-primary/40 pl-4 md:border-l-0 md:pl-0">
            <span className="flex items-center gap-1.5 justify-center md:justify-start">
              <Calendar size={12} className="text-brand-primary" />
              <strong className="tracking-wide text-[10px] uppercase">{activeMeta.dateLabel}</strong> {activeMeta.dateValue}
            </span>
            <span className="hidden md:inline text-brand-outline-variant">|</span>
            <span className="flex items-center gap-1.5 justify-center md:justify-start">
              <Clock size={12} className="text-brand-primary" />
              <strong className="tracking-wide text-[10px] uppercase">{activeMeta.updateLabel}</strong> {activeMeta.updateValue}
            </span>
          </div>

          {/* Aesthetic Elegant Vertical Rule */}
          <div className="w-[1px] h-12 bg-brand-primary/30 mt-8 mx-auto md:mx-0 hidden md:block" />
        </header>

        {/* Dynamic Inner Screens Container */}
        <div className="transition-all duration-300">
          {currentScreen === 'privacy' && <PrivacyView />}
          {currentScreen === 'terms' && <TermsView />}
          {currentScreen === 'cookies' && <CookieView />}
          {currentScreen === 'support' && <SupportView />}
        </div>
      </main>

      {/* Dynamic Content Switching Footer */}
      <Footer currentScreen={currentScreen} setScreen={handleSetScreen} />
    </div>
  );
}
