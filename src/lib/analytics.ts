export const analytics = {
  // Analytics providers
  providers: {
    google: 'Google Analytics',
    mixpanel: 'Mixpanel',
    amplitude: 'Amplitude',
    hotjar: 'Hotjar',
  },
  // Events to track
  events: {
    pageView: 'page_view',
    buttonClick: 'button_click',
    formSubmit: 'form_submit',
    quoteRequest: 'quote_request',
    phoneCall: 'phone_call',
    emailClick: 'email_click',
  },
  // Conversion goals
  goals: {
    quoteRequest: 'quote_request',
    phoneCall: 'phone_call',
    emailContact: 'email_contact',
    servicePageView: 'service_page_view',
  },
} as const;
