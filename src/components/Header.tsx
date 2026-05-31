/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ScreenType } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  setScreen: (screen: ScreenType) => void;
}

export default function Header({ currentScreen, setScreen }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems: { id: ScreenType; label: string; icon: typeof Shield }[] = [
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
  ];

  const handleNavClick = (screen: ScreenType) => {
    setScreen(screen);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-brand-surface-lowest/80 backdrop-blur-md border-b border-brand-outline-variant/20 shadow-sm transition-all duration-200">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('privacy')}
          className="flex items-center gap-3.5 hover:opacity-90 active:scale-95 transition-all text-left"
          id="brand-logo-btn"
        >
          <div className="w-8 h-8 rounded-none border border-brand-primary flex items-center justify-center text-brand-primary font-serif font-semibold text-lg hover:bg-brand-primary hover:text-black transition-colors">
            Z
          </div>
          <span className="font-serif text-lg font-light tracking-[0.2em] uppercase text-brand-ink">
            Zyphen <span className="font-sans text-xs font-semibold text-brand-ink-muted hidden sm:inline ml-1.5 tracking-widest pl-2 border-l border-brand-outline-variant/30">Legal</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 border text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  isActive
                    ? 'border-brand-primary text-brand-primary bg-brand-primary/5 font-serif italic'
                    : 'border-transparent text-brand-ink-muted hover:text-brand-primary hover:bg-brand-primary/5'
                }`}
                id={`nav-${item.id}-desktop`}
              >
                <Icon size={14} className="opacity-80" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-brand-ink-muted hover:text-brand-primary hover:bg-brand-surface-low transition-colors"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-brand-surface-lowest border-b border-brand-outline-variant/20 animate-fade-in px-6 py-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 border text-xs font-semibold uppercase tracking-widest text-left transition-all ${
                  isActive
                    ? 'border-brand-primary text-brand-primary bg-brand-primary/5 font-serif italic'
                    : 'border-transparent text-brand-ink-muted hover:text-brand-primary hover:bg-brand-surface-low'
                }`}
                id={`nav-${item.id}-mobile`}
              >
                <Icon size={14} className="opacity-85" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
