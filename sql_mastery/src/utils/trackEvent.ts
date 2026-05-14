import type { AppEventName } from '../constants/events';

export const trackEvent = (eventName: AppEventName, payload?: unknown): void => {
  if (!import.meta.env.DEV) return;
  if (payload === undefined) {
    console.debug('[event]', eventName);
    return;
  }
  console.debug('[event]', eventName, payload);
};
