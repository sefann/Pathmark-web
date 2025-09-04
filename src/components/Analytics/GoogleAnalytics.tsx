'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

// Form submission tracking function
export const trackFormSubmission = (formName: string, formData: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'Contact Form',
      event_label: formName,
      form_name: formName,
      form_subject: formData.subject,
      form_email_domain: formData.email?.split('@')[1],
      custom_parameter_1: formData.name,
    });
  }
};

// Form interaction tracking
export const trackFormInteraction = (action: string, formName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_interaction', {
      event_category: 'Contact Form',
      event_label: `${formName}_${action}`,
      form_name: formName,
      interaction_type: action,
    });
  }
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
