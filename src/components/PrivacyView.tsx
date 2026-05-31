/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Calendar, 
  RefreshCw, 
  Bug, 
  Smartphone, 
  ExternalLink, 
  Link, 
  HardDrive, 
  ShieldCheck, 
  Trash2, 
  Check, 
  ShieldAlert, 
  BellRing, 
  AlarmClock, 
  Power, 
  Mail
} from 'lucide-react';

export default function PrivacyView() {


  // Helper to highlight matching text
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark key={i} className="bg-yellow-200 text-brand-ink rounded px-0.5 font-bold">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const sections = [
    {
      id: 'sec-1',
      num: '1',
      title: 'Information Collection and Use',
      content: (
        <div className="space-y-4">
          <p className="text-brand-ink-muted leading-relaxed">
            For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information.
          </p>
          
          <h3 className="font-sans text-sm font-bold text-brand-ink uppercase tracking-wider mt-6 mb-2">
            A. Information You Provide to Us
          </h3>
          <p className="text-brand-ink-muted leading-relaxed">
            Currently, <strong>Zyphen</strong> does not require you to create an account, provide an email address, or submit personally identifiable information (PII) directly to us. Any settings, preferences, or configurations you create within the app are saved <strong>locally on your device</strong> using Android's DataStore or Room database systems.
          </p>

          <h3 className="font-sans text-sm font-bold text-brand-ink uppercase tracking-wider mt-6 mb-2">
            B. Automatically Collected Information &amp; Edge Cases
          </h3>
          <p className="text-brand-ink-muted leading-relaxed">
            Even if an app does not explicitly ask for personal data, certain information may be collected automatically by the platform, the device, or third-party libraries:
          </p>

          <ul className="space-y-3 mt-4">
            <li className="flex items-start gap-4 bg-brand-surface-low/50 p-4 rounded-xl border border-brand-outline-variant/10 hover:border-brand-primary/20 transition-all duration-150">
              <div className="flex-shrink-0 text-brand-primary p-1 bg-white rounded-lg shadow-sm">
                <Bug size={18} />
              </div>
              <div>
                <strong className="text-brand-ink block mb-1 font-semibold text-sm">
                  Log Data and Crash Reports:
                </strong>
                <p className="text-xs text-brand-ink-muted leading-relaxed">
                  In the case of an error in the app, we may collect data and information (through third-party products like Google Play Console) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4 bg-brand-surface-low/50 p-4 rounded-xl border border-brand-outline-variant/10 hover:border-brand-primary/20 transition-all duration-150">
              <div className="flex-shrink-0 text-brand-primary p-1 bg-white rounded-lg shadow-sm">
                <Smartphone size={18} />
              </div>
              <div>
                <strong className="text-brand-ink block mb-1 font-semibold text-sm">
                  Device Information:
                </strong>
                <p className="text-xs text-brand-ink-muted leading-relaxed">
                  Hardware models, operating system and version, unique device identifiers, and mobile network information may be logged by underlying operating systems.
                </p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'sec-2',
      num: '2',
      title: 'Third-Party Services and Libraries',
      content: (
        <div className="space-y-4">
          <p className="text-brand-ink-muted leading-relaxed">
            The app does use third-party services that may collect information used to identify you. Link to privacy policies of third-party service providers used by the app:
          </p>

          <div className="flex flex-wrap gap-3 my-4">
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface-container rounded-full text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all text-xs font-semibold shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink size={14} />
              Google Play Services
            </a>
            <a 
              href="https://developers.google.com/fonts/faq/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface-container rounded-full text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all text-xs font-semibold shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink size={14} />
              Google Fonts
            </a>
          </div>

          <p className="text-xs bg-brand-surface-variant/30 p-4 rounded-xl border border-brand-outline-variant/20 text-brand-ink-muted">
            (Used for delivering typography. Google may collect IP addresses for font asset delivery).
          </p>

          <div className="mt-6 p-4 border-l-4 border-brand-tertiary bg-brand-tertiary-fixed text-brand-on-tertiary-fixed rounded-r-xl shadow-sm">
            <strong className="block mb-2 flex items-center gap-2 text-brand-on-tertiary-fixed font-bold">
              <Link size={16} />
              Note on Third-Party Links:
            </strong>
            <p className="text-xs leading-relaxed opacity-95">
              Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'sec-3',
      num: '3',
      title: 'Data Storage, Security, and Retention',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-brand-surface-lowest p-5 rounded-2xl ambient-shadow border border-brand-outline-variant/20 hover:border-brand-primary/20 transition-all">
              <h3 className="font-sans text-sm font-semibold text-brand-primary flex items-center gap-2 mb-3">
                <HardDrive size={16} />
                Local Storage
              </h3>
              <p className="text-xs text-brand-ink-muted leading-relaxed">
                All core app data, including your personal entries and preferences, are stored locally on your device's internal storage. We do not transmit this data to our servers. If you uninstall the app or clear the app's data, this locally stored information is permanently deleted.
              </p>
            </div>

            <div className="bg-brand-surface-lowest p-5 rounded-2xl ambient-shadow border border-brand-outline-variant/20 hover:border-brand-primary/20 transition-all">
              <h3 className="font-sans text-sm font-semibold text-brand-primary flex items-center gap-2 mb-3">
                <ShieldCheck size={16} />
                Data Security
              </h3>
              <p className="text-xs text-brand-ink-muted leading-relaxed">
                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. Since the app stores data locally, the security of that data relies heavily on the security of your device (e.g., using a screen lock, full-disk encryption provided by Android).
              </p>
            </div>

            <div className="bg-brand-surface-lowest p-5 rounded-2xl ambient-shadow border border-brand-outline-variant/20 hover:border-brand-primary/20 transition-all md:col-span-2">
              <h3 className="font-sans text-sm font-semibold text-brand-primary flex items-center gap-2 mb-3">
                <Trash2 size={16} />
                Data Retention
              </h3>
              <p className="text-xs text-brand-ink-muted leading-relaxed">
                Because we do not transmit your local app data to our servers, we do not retain it. Any crash logs or analytical data aggregated by Google Play Services are retained according to Google's data retention policies.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sec-4',
      num: '4',
      title: 'User Rights (GDPR, CCPA, and CPRA)',
      content: (
        <div className="space-y-4">
          <p className="text-brand-ink-muted leading-relaxed">
            Depending on your region, you may have specific rights regarding your personal data:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Right to Access and Portability',
              'Right to Rectification',
              'Right to Erasure ("Forgotten")',
              'Right to Restrict Processing',
              'Right to Object to Processing'
            ].map((right, index) => (
              <div key={index} className="flex items-center gap-2.5 bg-brand-surface-lowest p-3 rounded-xl border border-brand-outline-variant/30 hover:border-brand-secondary/40 transition-all duration-150">
                <div className="text-brand-secondary flex-shrink-0">
                  <Check size={16} className="stroke-[3]" />
                </div>
                <span className="font-semibold text-brand-ink text-xs">{right}</span>
              </div>
            ))}
            
            <div className="flex items-center gap-2.5 bg-brand-on-primary-container p-3 rounded-xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all duration-150">
              <div className="text-brand-primary flex-shrink-0">
                <ShieldAlert size={16} className="stroke-[2.5]" />
              </div>
              <span className="font-bold text-brand-primary text-xs">Do Not Sell My Info (CCPA)</span>
            </div>
          </div>

          <div className="bg-brand-surface-bright p-5 rounded-xl border-l-4 border-brand-secondary shadow-sm">
            <h4 className="font-sans text-sm font-semibold text-brand-ink mb-2 italic">
              How to exercise these rights:
            </h4>
            <p className="text-xs text-brand-ink-muted leading-relaxed">
              Because <strong>Zyphen</strong> stores your data locally on your device, you hold complete control over it. You can exercise your right to erasure or rectification simply by editing the data within the app or uninstalling the app, which deletes all associated local data. For any questions regarding other data (like crash logs), please contact us.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'sec-5',
      num: '5',
      title: "Children's Privacy (COPPA Compliance)",
      content: (
        <div className="space-y-4">
          <p className="text-brand-ink-muted leading-relaxed">
            These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
          </p>
        </div>
      )
    },
    {
      id: 'sec-6',
      num: '6',
      title: 'Permissions Requested by the App',
      content: (
        <div className="space-y-4">
          <p className="text-brand-ink-muted leading-relaxed">
            To provide its core functionality (like reminders and notifications), Zyphen requests the following device permissions. We only request permissions that are strictly necessary for the app to function:
          </p>

          <div className="space-y-4 mb-4">
            <div className="flex flex-col sm:flex-row gap-4 p-4 bg-brand-surface-lowest rounded-2xl ambient-shadow border border-brand-outline-variant/20 hover:border-brand-primary/20 transition-all duration-150">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-on-primary-container rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
                <BellRing size={20} />
              </div>
              <div>
                <h3 className="font-mono text-xs font-bold text-brand-ink flex items-center flex-wrap gap-2">
                  <span className="font-sans text-sm font-bold">Notifications</span> 
                  <span className="bg-brand-surface-variant px-2 py-0.5 rounded text-[10px] font-mono text-brand-ink-muted tracking-tight">POST_NOTIFICATIONS</span>
                </h3>
                <p className="text-xs text-brand-ink-muted mt-1 leading-relaxed">
                  Required to show you timely reminders and alerts from the app.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 p-4 bg-brand-surface-lowest rounded-2xl ambient-shadow border border-brand-outline-variant/20 hover:border-brand-primary/20 transition-all duration-150">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-surface-container rounded-xl flex items-center justify-center text-brand-secondary shadow-sm">
                <AlarmClock size={20} />
              </div>
              <div>
                <h3 className="font-mono text-xs font-bold text-brand-ink flex items-center flex-wrap gap-2">
                  <span className="font-sans text-sm font-bold">Alarms &amp; Reminders</span> 
                  <span className="bg-brand-surface-variant px-2 py-0.5 rounded text-[10px] font-mono text-brand-ink-muted tracking-tight">SCHEDULE_EXACT_ALARM</span>
                </h3>
                <p className="text-xs text-brand-ink-muted mt-1 leading-relaxed">
                  Required to ensure that your scheduled reminders fire exactly when you need them.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 p-4 bg-brand-surface-lowest rounded-2xl ambient-shadow border border-brand-outline-variant/20 hover:border-brand-primary/20 transition-all duration-150">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-tertiary-fixed rounded-xl flex items-center justify-center text-brand-tertiary shadow-sm">
                <Power size={20} />
              </div>
              <div>
                <h3 className="font-mono text-xs font-bold text-brand-ink flex items-center flex-wrap gap-2">
                  <span className="font-sans text-sm font-bold">Run at Startup</span> 
                  <span className="bg-brand-surface-variant px-2 py-0.5 rounded text-[10px] font-mono text-brand-ink-muted tracking-tight">RECEIVE_BOOT_COMPLETED</span>
                </h3>
                <p className="text-xs text-brand-ink-muted mt-1 leading-relaxed">
                  Required to reschedule your reminders and alarms silently in the background after you restart your device so you don't miss them.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs italic text-brand-secondary font-medium pl-2 border-l-2 border-brand-secondary/40">
            These permissions do not grant us access to your personal files, contacts, or location, and all reminder data remains stored locally on your device.
          </p>
        </div>
      )
    },
    {
      id: 'sec-7',
      num: '7',
      title: 'Changes to This Privacy Policy',
      content: (
        <div className="space-y-4">
          <p className="text-brand-ink-muted leading-relaxed">
            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this document.
          </p>
          <p className="text-brand-ink-muted leading-relaxed font-semibold">
            These changes are effective immediately after they are posted on this page.
          </p>
        </div>
      )
    },
    {
      id: 'sec-8',
      num: '8',
      title: 'Contact Us',
      content: (
        <div className="space-y-4">
          <p className="text-brand-ink-muted leading-relaxed">
            If you have any questions, concerns, or suggestions about our Privacy Policy, do not hesitate to contact us.
          </p>
          <div className="pt-2">
            <a 
              href="mailto:shivambeohar.dev@gmail.com"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 electric-gradient rounded-xl text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
              id="mail-link-btn"
            >
              <Mail size={16} />
              shivambeohar.dev@gmail.com
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Side dynamic directory panel (Table of Contents) */}
      <aside className="lg:col-span-1">
        {/* Index of chapters */}
        <div className="bg-brand-surface-lowest/70 p-5 rounded-none border border-brand-outline-variant/15 hidden lg:block sticky top-24 ambient-shadow">
          <h3 className="font-serif text-sm font-medium text-brand-ink tracking-wide uppercase mb-4 pb-2 border-b border-brand-outline-variant/10">
            Navigation Index
          </h3>
          <ul className="space-y-1">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="block text-xs font-medium py-1.5 px-2 rounded-none text-brand-ink-muted hover:text-brand-primary hover:bg-brand-primary/5 transition-all truncate"
                  id={`index-link-${sec.id}`}
                >
                  <span className="inline-block w-4 text-brand-primary font-serif italic font-semibold">{sec.num}</span>
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content view */}
      <div className="lg:col-span-3 space-y-12">
        {/* Intro statement */}
        <div className="bg-brand-surface-lowest rounded-none p-6 sm:p-8 ambient-shadow border border-brand-outline-variant/30 hover:border-brand-primary/20 transition-all leading-relaxed text-sm text-brand-ink">
          <p className="mb-4">
            <strong>Shivam Beohar</strong> ("we," "us," or "our") built the <strong>Zyphen</strong> app (the "Service") as a [Free] app. This SERVICE is provided by <strong>[Shivam Beohar]</strong> at no cost and is intended for use as is.
          </p>
          <p className="mb-4">
            This Privacy Policy is used to inform users ("you") regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. It is designed to comply with applicable privacy laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and Google Play Developer Policies.
          </p>
          <p className="text-brand-secondary font-bold">
            By choosing to use our Service, you agree to the collection and use of information in relation to this policy.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-16">
          {sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="scroll-mt-24 group">
              <div className="flex items-center gap-4 mb-5 pb-2 border-b border-brand-outline-variant/10">
                <div className="w-8 h-8 rounded-none border-t border-b border-brand-primary/50 flex items-center justify-center text-brand-primary font-serif italic text-sm font-semibold">
                  {sec.num}
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-light text-brand-ink tracking-wide group-hover:text-brand-primary transition-colors">
                  {sec.title}
                </h2>
              </div>
              <div className="pl-12 border-l border-brand-outline-variant/10 group-hover:border-brand-primary/30 transition-colors duration-300 pb-2">
                {sec.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
