/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ScreenType = 'privacy';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SupportTicket {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  agreeToPrivacy: boolean;
}
