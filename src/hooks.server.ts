import { generateBundles, negotiateLocale } from '$lib/fluent';
import type { Handle } from '@sveltejs/kit';
import { createSvelteFluent } from '@nubolab-ffwd/svelte-fluent';
import { sequence } from '@sveltejs/kit/hooks';

const fluentHandler: Handle = async ({ event, resolve }) => {
  event.locals.locale = negotiateLocale(event);
  event.locals.fluent = createSvelteFluent(generateBundles(event.locals.locale));

  return resolve(event);
};

const preloadFonts: Handle = async ({ event, resolve }) => {
  const response = await resolve(event, {
    preload: ({ type }) => type === 'font'
  });
  return response;
};

export const handle: Handle = sequence(fluentHandler, preloadFonts);