/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Cookie, 
  Database, 
  HelpCircle, 
  Trash2, 
  Info, 
  Play, 
  Type, 
  RefreshCw 
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CookieView() {
  const [localKeys, setLocalKeys] = useState<{ key: string; value: string }[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  // Load current localStorage items
  const loadStorageItems = () => {
    const items: { key: string; value: string }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        items.push({ key, value: localStorage.getItem(key) || '' });
      }
    }
    setLocalKeys(items);
  };

  useEffect(() => {
    loadStorageItems();
  }, []);

  const clearAllLocalPreferences = () => {
    localStorage.clear();
    loadStorageItems();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const cookiesDataset = [
    {
      name: '_ga, _gid',
      provider: 'Google Analytics (Diagnostic logs)',
      purpose: 'Anonymized crash diagnostics & usage analytical patterns.',
      type: 'Persistent / Third-party',
      duration: 'Up to 2 years'
    },
    {
      name: 'Google Fonts IP asset caching',
      provider: 'Google Fonts service',
      purpose: 'Direct rendering of typography assets without locally storing trackers.',
      type: 'Transient / Third-party',
      duration: 'Single session delivery'
    },
    {
      name: 'Local DB Preferences (DataStore/Room representation)',
      provider: 'Zyphen App Internal Storage',
      purpose: 'Secures reminders, settings, and exact alarm structures directly on device.',
      type: 'Local Sandboxed DB',
      duration: 'Infinite (until application uninstallation)'
    }
  ];

  return (
    <div className="space-y-12 max-w-[800px] mx-auto">
      {/* Intro section */}
      <div className="bg-brand-surface-lowest rounded-none p-6 sm:p-8 border border-brand-outline-variant/30">
        <div className="flex items-center gap-3.5 mb-4">
          <Cookie size={28} className="text-brand-primary" />
          <h2 className="font-serif text-2xl font-light text-brand-ink tracking-wide">
            Cookie Policy
          </h2>
        </div>
        <p className="text-brand-ink-muted text-sm leading-relaxed mb-4">
          This Cookie Policy explains how <strong>Zyphen</strong> ("we", "us", or "our") utilizes device storage and similar diagnostic mechanisms. Since Zyphen is designed as an <strong>offline-first local-only tool</strong>, standard internet browser tracking cookies are not utilized inside our mobile app's active engine. However, we outline the parameters of local device cache systems and third-party dependencies.
        </p>
        <p className="text-brand-secondary font-bold text-xs tracking-wider uppercase font-sans">
          Last Revision: May 31, 2026
        </p>
      </div>

      {/* Structured breakdowns */}
      <div className="space-y-12 text-sm">
        {/* Section 1 */}
        <section className="space-y-3">
          <h3 className="font-serif text-lg font-light text-brand-ink flex items-center gap-3">
            <span className="w-6 h-6 border-b border-brand-primary/50 text-brand-primary flex items-center justify-center text-xs font-semibold font-serif italic">1</span>
            What are Cookies &amp; Local Storage?
          </h3>
          <p className="text-brand-ink-muted leading-relaxed pl-9">
            Cookies are simple text blocks saved to a client's device browser during online crawls. <strong>Local Storage</strong> (like HTML5 localStorage, DataStore, or Room DB) is a sandboxed device segment that permits software applications to preserve states directly on user hardware, bypassing external web server communication.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h3 className="font-serif text-lg font-light text-brand-ink flex items-center gap-3">
            <span className="w-6 h-6 border-b border-brand-primary/50 text-brand-primary flex items-center justify-center text-xs font-semibold font-serif italic">2</span>
            How Zyphen Uses Device Storage
          </h3>
          <p className="text-brand-ink-muted leading-relaxed pl-9 mb-4">
            Zyphen stores user configurations, alarm states, and reminder setups exclusively on your device's internal storage using secure sandbox paths. Neither Shivam Beohar nor Zyphen maintains servers capable of reading, writing, or inspecting your logs.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pl-9 pt-2">
            <div className="p-4 bg-brand-surface-lowest rounded-none border border-brand-outline-variant/20 flex gap-3">
              <Database size={16} className="text-brand-primary mt-1" />
              <div>
                <strong className="block text-brand-ink font-semibold text-xs mb-1 font-serif tracking-wide text-brand-primary">State Integrity</strong>
                <p className="text-[11px] text-brand-ink-muted leading-relaxed">Save exact timer configurations without losing state upon closing.</p>
              </div>
            </div>
            <div className="p-4 bg-brand-surface-lowest rounded-none border border-brand-outline-variant/20 flex gap-3">
              <Type size={16} className="text-brand-secondary mt-1" />
              <div>
                <strong className="block text-brand-ink font-semibold text-xs mb-1 font-serif tracking-wide text-brand-primary">Resource Delivery</strong>
                <p className="text-[11px] text-brand-ink-muted leading-relaxed">System fonts or Google fonts cached locally for streamlined layout loads.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Third-party classifications */}
        <section className="space-y-4">
          <h3 className="font-serif text-lg font-light text-brand-ink flex items-center gap-3">
            <span className="w-6 h-6 border-b border-brand-primary/50 text-brand-primary flex items-center justify-center text-xs font-semibold font-serif italic">3</span>
            Classification and Details
          </h3>
          <p className="text-brand-ink-muted leading-relaxed pl-9">
            The following table classifies active storage layers or dependencies that may deploy analytical storage tags:
          </p>

          <div className="overflow-x-auto pl-9">
            <table className="w-full text-left border-collapse bg-brand-surface-lowest rounded-none overflow-hidden border border-brand-outline-variant/10 text-xs">
              <thead>
                <tr className="bg-brand-surface-variant/40 font-semibold text-brand-ink border-b border-brand-outline-variant/10">
                  <th className="p-3">Track / Item name</th>
                  <th className="p-3">Source Provider</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Lifespan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-outline-variant/10">
                {cookiesDataset.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-primary/5 transition-colors">
                    <td className="p-3 font-mono text-brand-primary font-semibold">{row.name}</td>
                    <td className="p-3 text-brand-ink">{row.provider}</td>
                    <td className="p-3 text-brand-ink-muted leading-relaxed max-w-xs">{row.purpose}</td>
                    <td className="p-3 font-medium text-brand-secondary">{row.type}</td>
                    <td className="p-3 text-brand-ink-muted font-medium">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Real-time Interaction Sandbox */}
        <section className="space-y-4 pt-4 border-t border-brand-outline-variant/20">
          <div className="bg-brand-surface-lowest p-6 rounded-none border border-brand-primary/20 space-y-4">
            <div className="flex items-start gap-3">
              <Info size={16} className="text-brand-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-serif text-base font-medium text-brand-primary mb-1">
                  Active Local Storage Inspector
                </h4>
                <p className="text-xs text-brand-ink-muted leading-relaxed">
                  To honor transparency, here is a functional inspector listing all cached metadata or variables stored in your browser context. Since Zyphen is stored locally, emptying this space resets local user configurations.
                </p>
              </div>
            </div>

            {/* Inspector Table */}
            <div className="bg-brand-bg rounded-none border border-brand-outline-variant/30 p-4 font-mono text-xs max-h-48 overflow-y-auto">
              <div className="flex justify-between items-center text-[10px] text-brand-ink-muted border-b border-brand-outline-variant/20 pb-2 mb-2 font-sans font-bold uppercase tracking-wider">
                <span>Storage Key</span>
                <span>Value</span>
              </div>
              {localKeys.length === 0 ? (
                <div className="text-center text-brand-ink-muted py-6 font-sans text-xs italic">
                  No active keys found in the current domain sandboxed storage.
                </div>
              ) : (
                <div className="space-y-2">
                  {localKeys.map((item) => (
                    <div key={item.key} className="flex justify-between items-start gap-4 break-all">
                      <span className="text-brand-primary font-semibold">{item.key}</span>
                      <span className="text-brand-ink-muted text-right max-w-[200px] sm:max-w-xs truncate">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={loadStorageItems}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-brand-surface-low hover:bg-brand-surface-variant border border-brand-outline-variant/30 font-semibold text-xs text-brand-ink uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
                id="refresh-storage-btn"
              >
                <RefreshCw size={12} />
                Refresh Keys
              </button>
              
              <button
                onClick={clearAllLocalPreferences}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-brand-tertiary hover:opacity-95 font-semibold text-xs text-white uppercase tracking-wider transition-all active:scale-95 shadow-sm cursor-pointer"
                id="clear-storage-btn"
              >
                <Trash2 size={12} />
                Clear Preferences
              </button>
            </div>

            {showNotification && (
              <p className="text-[11px] font-bold text-green-400 bg-green-950/35 px-3 py-1.5 rounded-none text-center animate-fade-in border border-green-800/40">
                ✓ Storage cleared successfully! Restart app configs to generate initial values.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
