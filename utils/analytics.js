export const trackEvent = (eventName, eventData = {}) => {
  try {
    // Google Tag Manager / dataLayer
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: eventName,
      ...eventData,
    })

    // Mock GA4
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventData)
    }

    // Console verification
    console.log('[Analytics]', eventName, eventData)
  } catch (error) {
    console.error('[Analytics Error]', error)
  }
}