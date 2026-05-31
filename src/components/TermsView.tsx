/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Scale, 
  UserCheck, 
  ShieldAlert, 
  Ban, 
  Cpu, 
  FileCheck, 
  Globe, 
  RefreshCw, 
  Mail,
  Search
} from 'lucide-react';
import { useState } from 'react';

export default function TermsView() {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      id: 'terms-1',
      num: '1',
      title: 'Agreement to Terms',
      icon: Scale,
      content: (
        <p className="text-brand-ink-muted leading-relaxed">
          By downloading, installing, or accessing the <strong>Zyphen</strong> mobile application, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using the service and must uninstall the application immediately.
        </p>
      )
    },
    {
      id: 'terms-2',
      num: '2',
      title: 'Eligibility & Age Limits',
      icon: UserCheck,
      content: (
        <p className="text-brand-ink-muted leading-relaxed">
          The Service is intended for users who are at least 13 years of age. If you are under 13, you may not download or use the Service. By accessing Zyphen, you represent and warrant that you meet this age requirement and hold full legal capacity to accept these conditions.
        </p>
      )
    },
    {
      id: 'terms-3',
      num: '3',
      title: 'Free License of Use',
      icon: FileCheck,
      content: (
        <div className="space-y-3">
          <p className="text-brand-ink-muted leading-relaxed">
            We grant you a personal, non-exclusive, non-transferable, revocable license to use Zyphen strictly for your personal, non-commercial purposes on compatible mobile devices owned or controlled by you.
          </p>
          <div className="bg-brand-surface-low p-4 rounded-xl border border-brand-outline-variant/20 text-xs text-brand-ink-muted">
            <strong>License Limitations:</strong> You may not rent, lease, lend, sell, redistribute, or sublicense this mobile application.
          </div>
        </div>
      )
    },
    {
      id: 'terms-4',
      num: '4',
      title: 'Intellectual Property Rights',
      icon: Cpu,
      content: (
        <p className="text-brand-ink-muted leading-relaxed">
          The Zyphen name, brand, logo, application designs, software code, databases, documentation, and graphical assets are the sole property of <strong>Shivam Beohar</strong> and are protected by international trademark, copyright, and competition law. No license, license grant, or transfer of ownership is implied.
        </p>
      )
    },
    {
      id: 'terms-5',
      num: '5',
      title: 'Prohibited Practices & Restrictions',
      icon: Ban,
      content: (
        <div className="space-y-4">
          <p className="text-brand-ink-muted leading-relaxed">
            You agree not to engage in any unauthorized activity that violates the integrity of the application. Explicitly prohibited acts include:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Decompiling or reverse-engineering code',
              'Scraping application database structures',
              'Sublicensing copy versions of Zyphen',
              'Disrupting device sensors or APIs',
              'Bypassing startup security layers',
              'Using Zyphen for any harmful or illegal act'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-brand-surface-lowest p-3 rounded-lg border border-brand-outline-variant/30">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <span className="text-xs font-semibold text-brand-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'terms-6',
      num: '6',
      title: 'Absence of Warranties ("As Is")',
      icon: ShieldAlert,
      content: (
        <div className="space-y-3 text-brand-ink-muted text-sm">
          <p className="leading-relaxed">
            THE APPLICATION IS PROVIDED TO YOU "AS IS" AND "AS AVAILABLE", WITH ALL FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY KIND.
          </p>
          <p className="leading-relaxed text-xs">
            To the maximum extent permitted by applicable law, Shivam Beohar explicitly disclaims all warranties, whether express, implied, statutory, or otherwise, regarding Zyphen, including merchantability, fitness for a particular purpose, non-infringement, and warrants that Zyphen will meet your requirements or run without interruption.
          </p>
        </div>
      )
    },
    {
      id: 'terms-7',
      num: '7',
      title: 'Limitation of Liability',
      icon: ShieldAlert,
      content: (
        <p className="text-brand-ink-muted leading-relaxed text-sm">
          In no event shall Shivam Beohar be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data, device bricking, or system downtime) arising out of or in any way related to the use of or inability to use the Zyphen app.
        </p>
      )
    },
    {
      id: 'terms-8',
      num: '8',
      title: 'Governing Law',
      icon: Globe,
      content: (
        <p className="text-brand-ink-muted leading-relaxed">
          These Terms of Service, and your use of Zyphen, are governed by and construed in accordance with the laws of Shivam Beohar's jurisdiction, without regard to its conflict of law principles.
        </p>
      )
    },
    {
      id: 'terms-9',
      num: '9',
      title: 'Revisions & Updates',
      icon: RefreshCw,
      content: (
        <p className="text-brand-ink-muted leading-relaxed">
          We reserves the right, at our sole discretion, to modify or replace these Terms at any time. We will indicate revisions by updating the "Last Updated" status. Continued use of Zyphen following revisions constitutes active acceptance of the modified conditions.
        </p>
      )
    }
  ];

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Sidebar navigation */}
      <aside className="lg:col-span-1 space-y-6">
        <div className="bg-brand-surface-lowest p-5 rounded-2xl border border-brand-outline-variant/20 ambient-shadow">
          <h3 className="font-sans text-xs font-bold text-brand-ink uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Search size={14} className="text-brand-primary" />
            Filter Terms
          </h3>
          <input
            type="text"
            placeholder="Type keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-brand-surface-low rounded-xl px-3 py-2 text-xs border border-transparent focus:border-brand-primary focus:bg-white focus:outline-none transition-all text-brand-ink"
            id="terms-search-input"
          />
        </div>

        <div className="bg-brand-surface-lowest/70 p-5 rounded-2xl border border-brand-outline-variant/10 hidden lg:block sticky top-24">
          <h3 className="font-sans text-xs font-bold text-brand-ink uppercase tracking-wider mb-4">
            Terms Index
          </h3>
          <ul className="space-y-1">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="block text-xs font-medium py-1.5 px-2 rounded-lg text-brand-ink-muted hover:text-brand-primary hover:bg-brand-surface-low transition-colors truncate"
                  id={`terms-index-link-${sec.id}`}
                >
                  <span className="inline-block w-4 text-brand-primary font-bold">{sec.num}</span>
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Content Canvas */}
      <div className="lg:col-span-3 space-y-12">
        <div className="bg-brand-surface-lowest rounded-2xl p-6 sm:p-8 ambient-shadow border border-brand-outline-variant/20 tracking-wide text-brand-ink text-sm">
          <p className="leading-relaxed">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before utilizing the <strong>Zyphen</strong> mobile application built and provided by <strong>Shivam Beohar</strong>. Your access to and use of this tool is conditioned on your strict acceptance of and compliance with these policies.
          </p>
        </div>

        <div className="space-y-12">
          {sections
            .filter(sec => sec.title.toLowerCase().includes(searchTerm.toLowerCase()) || sec.id.includes(searchTerm.toLowerCase()))
            .map((sec) => {
              const Icon = sec.icon;
              return (
                <section key={sec.id} id={sec.id} className="scroll-mt-24 group">
                  <div className="flex items-center gap-4 mb-5 pb-2 border-b border-brand-outline-variant/10 animate-fade-in">
                    <div className="w-8 h-8 rounded-none border-t border-b border-brand-primary/50 flex items-center justify-center text-brand-primary font-serif italic text-sm font-semibold">
                      {sec.num}
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl font-light text-brand-ink tracking-wide flex items-center gap-2.5 group-hover:text-brand-primary transition-colors">
                      <Icon size={16} className="text-brand-primary opacity-80" />
                      {sec.title}
                    </h2>
                  </div>
                  <div className="pl-12 border-l border-brand-outline-variant/10 group-hover:border-brand-primary/30 transition-colors duration-300 pb-2">
                    {sec.content}
                  </div>
                </section>
              );
            })}
        </div>

        <div className="bg-brand-surface-container-low p-6 rounded-2xl border border-brand-outline-variant/30 text-center space-y-3">
          <h3 className="font-sans font-bold text-base text-brand-ink">Have questions regarding our Terms?</h3>
          <p className="text-xs text-brand-ink-muted max-w-lg mx-auto leading-relaxed">
            We are fully transparent with our terms and configurations. Reach out anytime if you need clarification regarding safety, licenses, or distributions.
          </p>
          <div className="pt-2">
            <a 
              href="mailto:shivambeohar.dev@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-primary text-white hover:bg-brand-primary-container font-semibold rounded-xl text-xs shadow-sm transition-all hover:scale-[1.02]"
              id="terms-contact-btn"
            >
              <Mail size={14} />
              Contact Shivam
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
