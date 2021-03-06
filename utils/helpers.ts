import globals from "utils/globals";


declare global {
  interface Window {
    gtag :any;
  }
}

/**
 * Takes in coordinates and returns the US region
 * @param latitude
 * @param longitude
 * @returns {string} A string representation of the US region based on the given coordinates
 */
export function getRegion(latitude: number, longitude: number): string {
    if (longitude < -106.045228 && longitude > -124.551016 && latitude < 49.019984) {
        return "west";
    } else if (latitude <= 39.11542 && latitude > 24 && longitude < -59.305383) {
        return "south";
    } else if (longitude < -80.483568 && latitude < 49.024915) {
        return "midwest";
    } else if (longitude <= -59.305383 && latitude > 39.11542) {
        return "northeast";
    }

    return "unknown";
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url :any) => {
    window.gtag('config', globals.ga_tracking_id, {
      page_path: url,
    })
  }
  
  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  export const event = ({ action, category, label, value } :any) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
  