/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ScreenType } from '../types';

interface FooterProps {
  currentScreen: ScreenType;
  setScreen: (screen: ScreenType) => void;
}

export default function Footer({ currentScreen, setScreen }: FooterProps) {
  const handleFooterClick = (screen: ScreenType, e: React.MouseEvent) => {
    e.preventDefault();
    setScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-surface-low border-t border-brand-outline-variant/10 shadow-none mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-serif text-base font-light tracking-[0.2em] uppercase text-brand-ink">
            ZYPHEN
          </span>
          <span className="text-[10px] text-brand-ink-muted uppercase tracking-wider">
            © 2026 Zyphen Legal. Built by Shivam Beohar.
          </span>
        </div>

        {/* Footer Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-widest">
          <a
            href="#privacy-policy"
            onClick={(e) => handleFooterClick('privacy', e)}
            className={`transition-colors active:scale-95 duration-100 ${
              currentScreen === 'privacy'
                ? 'text-brand-primary font-serif italic font-medium'
                : 'text-brand-ink-muted hover:text-brand-primary'
            }`}
            id="footer-nav-privacy"
          >
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}
