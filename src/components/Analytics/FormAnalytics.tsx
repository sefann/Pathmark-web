'use client';

import { trackFormSubmission, trackFormInteraction } from './GoogleAnalytics';

interface FormAnalyticsProps {
  formName: string;
  onFormStart?: () => void;
  onFormSubmit?: (data: any) => void;
  onFormError?: (error: any) => void;
}

export const useFormAnalytics = ({ formName, onFormStart, onFormSubmit, onFormError }: FormAnalyticsProps) => {
  
  const trackFormStart = () => {
    trackFormInteraction('start', formName);
    onFormStart?.();
  };

  const trackFormSubmit = (formData: any) => {
    trackFormSubmission(formName, formData);
    onFormSubmit?.(formData);
  };

  const trackFormError = (error: any) => {
    trackFormInteraction('error', formName);
    onFormError?.(error);
  };

  const trackFormFieldFocus = (fieldName: string) => {
    trackFormInteraction(`field_focus_${fieldName}`, formName);
  };

  const trackFormFieldBlur = (fieldName: string) => {
    trackFormInteraction(`field_blur_${fieldName}`, formName);
  };

  return {
    trackFormStart,
    trackFormSubmit,
    trackFormError,
    trackFormFieldFocus,
    trackFormFieldBlur,
  };
};

// Simple form analytics without Google Analytics
export const trackFormSubmissionSimple = (formData: any) => {
  // Log to console for development
  console.log('Form Submission Analytics:', {
    timestamp: new Date().toISOString(),
    formData: {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      hasPhone: !!formData.phone,
      messageLength: formData.message?.length || 0,
    },
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    url: window.location.href,
  });

  // You can also send to your own analytics endpoint
  // fetch('/api/analytics/form-submission', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData)
  // });
};
