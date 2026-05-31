/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Mail, 
  HelpCircle, 
  FileCheck, 
  Info, 
  Copy, 
  Check, 
  Send, 
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import React, { useState } from 'react';
import { FAQItem, SupportTicket } from '../types';

export default function SupportView() {
  const [ticket, setTicket] = useState<SupportTicket>({
    name: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
    agreeToPrivacy: false
  });

  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Where is my personal data saved in Zyphen?',
      answer: 'All data you generate inside the Zyphen application—such as custom logs, reminders, schedules, and configurations—is stored strictly on your local device. We use Android Room DB and Jetpack DataStore sandbox storage. No files are transmitted to external servers.'
    },
    {
      id: 'faq-2',
      question: 'How do I exercise my right to erasure (GDPR / CCPA)?',
      answer: 'Since all information is held locally in your device custody, you have direct, instantaneous control. Simply clearing application cache/data from your phone settings or uninstalling the app permanently erases everything. For analytical data held by the Google Play Store console (crash logs), you can mail shivambeohar.dev@gmail.com.'
    },
    {
      id: 'faq-3',
      question: 'Why does Zyphen require SCHEDULE_EXACT_ALARM privileges?',
      answer: 'This background permission is critical to prompt reminders exactly at the user-specified second. Standard Android systems optimize batteries by bundling alarms, which might delay important alarms. Zyphen requests this specifically so time-sensitive prompts are fired without delay.'
    },
    {
      id: 'faq-4',
      question: 'Is my IP address tracked by Zyphen?',
      answer: 'Zyphen is a client-side offline app. However, static assets like typography are served via Google Fonts CDN, which may log incoming request IP addresses temporarily for resource delivery. This conforms directly to Google’s global privacy standards.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setTicket(prev => ({ ...prev, [name]: checked }));
    } else {
      setTicket(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticket.agreeToPrivacy) return;
    setIsSubmitted(true);
  };

  const handleCopyText = () => {
    const textToCopy = `
=== Zyphen Support Manifest ===
Category: ${ticket.category}
Name: ${ticket.name}
Email: ${ticket.email}
Subject: ${ticket.subject}
Message: ${ticket.message}
==============================
Submitted automatically on Zyphen Client Support Node.
    `;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMailTrigger = () => {
    const mailtoLink = `mailto:shivambeohar.dev@gmail.com?subject=[Zyphen Support] ${encodeURIComponent(ticket.subject)}&body=${encodeURIComponent(
      `Hello Shivam,\n\nI am reaching out regarding my inquiry:\n\nName: ${ticket.name}\nCategory: ${ticket.category}\n\nMessage:\n${ticket.message}\n\nBest regards,\n${ticket.name}`
    )}`;
    window.location.href = mailtoLink;
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(prev => (prev === id ? null : id));
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start max-w-[1100px] mx-auto">
      {/* FAQ Accordion Side */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-brand-surface-lowest p-6 rounded-none border border-brand-outline-variant/30 ambient-shadow">
          <div className="flex items-center gap-2.5 mb-5 pb-2 border-b border-brand-outline-variant/10">
            <HelpCircle className="text-brand-primary" size={18} />
            <h3 className="font-serif text-base font-medium text-brand-ink">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="space-y-3">
            {faqData.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="border border-brand-outline-variant/20 rounded-none overflow-hidden bg-brand-surface-low/30 active:scale-[0.99] transition-transform"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-3.5 text-left text-xs font-semibold uppercase tracking-wider text-brand-ink hover:text-brand-primary transition-colors focus:outline-none"
                    id={`faq-btn-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      size={14} 
                      className={`text-brand-ink-muted transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} 
                    />
                  </button>
                  {isOpen && (
                    <div className="p-3.5 pt-2 text-xs text-brand-ink-muted leading-relaxed bg-brand-bg/60 border-t border-brand-outline-variant/10 animate-fade-in font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact info info box */}
        <div className="bg-brand-surface-lowest p-6 rounded-none border border-brand-outline-variant/30 hover:border-brand-primary/20 transition-all duration-300 ambient-shadow space-y-3">
          <h4 className="font-serif font-semibold text-xs text-brand-primary uppercase tracking-wider">
            Direct Developer Communication
          </h4>
          <p className="text-xs text-brand-ink-muted leading-relaxed">
            Do not hesitate to reach out directly. Independent creator, Shivam Beohar, answers inquiries personally within 24-48 business hours.
          </p>
          <div className="text-xs font-semibold text-brand-secondary flex items-center gap-2 tracking-wide font-sans">
            <Mail size={13} />
            <span>shivambeohar.dev@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Ticket form Side */}
      <div className="lg:col-span-7">
        <div className="bg-brand-surface-lowest p-6 sm:p-8 rounded-none border border-brand-outline-variant/30 ambient-shadow">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-light text-brand-ink tracking-wide">
                  Contact Support Portal
                </h3>
                <p className="text-xs text-brand-ink-muted leading-relaxed">
                  Compose your GDPR request, bug report, or feedback below.
                </p>
              </div>

              {/* Grid 2 Columns */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-brand-ink-muted uppercase tracking-widest" htmlFor="support-name">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    id="support-name"
                    name="name"
                    value={ticket.name}
                    onChange={handleInputChange}
                    placeholder="Shivam Beohar"
                    className="w-full bg-brand-surface-low rounded-none px-3 py-2.5 text-xs border border-brand-outline-variant/25 focus:border-brand-primary focus:bg-brand-bg focus:outline-none transition-all text-brand-ink font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-brand-ink-muted uppercase tracking-widest" htmlFor="support-email">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    id="support-email"
                    name="email"
                    value={ticket.email}
                    onChange={handleInputChange}
                    placeholder="creator@zyphen.com"
                    className="w-full bg-brand-surface-low rounded-none px-3 py-2.5 text-xs border border-brand-outline-variant/25 focus:border-brand-primary focus:bg-brand-bg focus:outline-none transition-all text-brand-ink font-sans"
                  />
                </div>
              </div>

              {/* Inquiry type Category */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-brand-ink-muted uppercase tracking-widest" htmlFor="support-category">
                  Inquiry Category
                </label>
                <select
                  id="support-category"
                  name="category"
                  value={ticket.category}
                  onChange={handleInputChange}
                  className="w-full bg-brand-surface-low rounded-none px-3 py-2.5 text-xs border border-brand-outline-variant/25 focus:border-brand-primary focus:bg-brand-bg focus:outline-none transition-all text-brand-ink font-serif italic text-brand-primary font-medium"
                >
                  <option value="General Inquiry">General Inquiry / Help</option>
                  <option value="GDPR Erasure Request">GDPR Data Erasure ("Forgotten")</option>
                  <option value="CCPA Opt-Out">CCPA Do Not Sell My Info</option>
                  <option value="App Bug Report">App Bug / Functional crash</option>
                  <option value="Feature Suggestion">Feature Suggestion</option>
                </select>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-brand-ink-muted uppercase tracking-widest" htmlFor="support-subject">
                  Inquiry Subject
                </label>
                <input
                  required
                  type="text"
                  id="support-subject"
                  name="subject"
                  value={ticket.subject}
                  onChange={handleInputChange}
                  placeholder="Inquiry regarding local storage backup files"
                  className="w-full bg-brand-surface-low rounded-none px-3 py-2.5 text-xs border border-brand-outline-variant/25 focus:border-brand-primary focus:bg-brand-bg focus:outline-none transition-all text-brand-ink font-sans"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-brand-ink-muted uppercase tracking-widest" htmlFor="support-message">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  id="support-message"
                  name="message"
                  value={ticket.message}
                  onChange={handleInputChange}
                  placeholder="Explain your inquiry comprehensively here..."
                  className="w-full bg-brand-surface-low rounded-none px-3 py-2.5 text-xs border border-brand-outline-variant/25 focus:border-brand-primary focus:bg-brand-bg focus:outline-none transition-all text-brand-ink leading-relaxed font-sans"
                />
              </div>

              {/* Consent check */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  required
                  type="checkbox"
                  id="support-agree"
                  name="agreeToPrivacy"
                  checked={ticket.agreeToPrivacy}
                  onChange={handleInputChange}
                  className="rounded-none border-brand-outline-variant/50 text-brand-primary focus:ring-brand-primary mt-1 cursor-pointer bg-brand-bg"
                />
                <label htmlFor="support-agree" className="text-[11px] text-brand-ink-muted leading-relaxed cursor-pointer select-none">
                  I consent to sharing my diagnostic information with Creator Shivam Beohar and agree with Zyphen's Privacy Policy.
                </label>
              </div>

              {/* Submit triggers */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!ticket.agreeToPrivacy}
                  className={`w-full py-3.5 rounded-none font-bold text-xs uppercase tracking-widest text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
                    ticket.agreeToPrivacy 
                      ? 'electric-gradient hover:shadow-lg hover:opacity-95 cursor-pointer' 
                      : 'bg-brand-outline-variant/20 text-brand-ink-muted cursor-not-allowed'
                  }`}
                  id="support-submit-btn"
                >
                  <Send size={12} />
                  Compile &amp; Generate Ticket
                </button>
              </div>
            </form>
          ) : (
            // Form submitted ticket display
            <div className="space-y-6 animate-fade-in text-brand-ink">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-none bg-green-950/20 text-green-400 border border-green-800 flex items-center justify-center mx-auto shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-serif text-lg font-light tracking-wide text-brand-ink">
                  Inquiry Ticket Compiled!
                </h3>
                <p className="text-xs text-brand-ink-muted max-w-sm mx-auto leading-relaxed">
                  To preserve your offline privacy standards, Zyphen does not host central communication databases. Your request is compiled neatly into a local package below.
                </p>
              </div>

              {/* Generated Invoice/manifest card */}
              <div className="bg-brand-bg p-5 rounded-none border border-brand-outline-variant/30 space-y-4 font-mono text-xs shadow-inner">
                <div className="flex justify-between items-center text-[10px] font-sans font-bold text-brand-primary uppercase tracking-widest border-b border-brand-outline-variant/20 pb-2">
                  <span>Zyphen Client Manifest</span>
                  <span className="text-[10px] bg-brand-surface-lowest text-brand-primary px-2.5 py-0.5 rounded-none border border-brand-primary/40 font-semibold">PENDING</span>
                </div>

                <div className="grid grid-cols-3 gap-y-2 text-[11px] leading-relaxed">
                  <span className="text-brand-ink-muted">Inquiry category:</span>
                  <span className="col-span-2 font-bold text-brand-ink font-serif italic">{ticket.category}</span>

                  <span className="text-brand-ink-muted">Prepared user:</span>
                  <span className="col-span-2 font-bold text-brand-ink">{ticket.name}</span>

                  <span className="text-brand-ink-muted font-mono">User contact:</span>
                  <span className="col-span-2 text-brand-secondary font-semibold font-mono">{ticket.email}</span>

                  <span className="text-brand-ink-muted">Subject log:</span>
                  <span className="col-span-2 font-semibold text-brand-ink">{ticket.subject}</span>
                </div>

                <div className="pt-2 border-t border-brand-outline-variant/10 space-y-1">
                  <span className="text-[9px] font-bold text-brand-ink-muted uppercase tracking-wider">MESSAGE STATEMENT:</span>
                  <p className="text-[11px] text-brand-ink-muted max-h-32 overflow-y-auto leading-relaxed bg-brand-surface-lowest p-2.5 rounded-none border border-brand-outline-variant/10 font-sans">
                    {ticket.message}
                  </p>
                </div>
              </div>

              {/* Primary double button trigger */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleMailTrigger}
                  className="px-4 py-3 bg-brand-primary text-black hover:opacity-95 font-bold uppercase tracking-widest text-[10px] rounded-none shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  id="support-submit-mail-btn"
                >
                  <Send size={11} />
                  Send via Email Client
                </button>

                <button
                  type="button"
                  onClick={handleCopyText}
                  className="px-4 py-3 bg-brand-surface-lowest border border-brand-outline-variant/30 text-brand-ink hover:bg-brand-surface-low font-bold uppercase tracking-widest text-[10px] rounded-none flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer"
                  id="support-copy-btn"
                >
                  {copied ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
                  {copied ? 'Copied to Clipboard!' : 'Copy Manifest'}
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setTicket(prev => ({ ...prev, subject: '', message: '' }));
                  }}
                  className="text-xs font-semibold text-brand-secondary hover:underline cursor-pointer tracking-wide"
                  id="reset-form-btn"
                >
                  ← Compose another message / reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
