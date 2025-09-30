import { sequence } from '@sveltejs/kit/hooks';
import { type Handle } from '@sveltejs/kit';
import { generateBundles, negotiateLocale } from '$lib/fluent';
import { createSvelteFluent } from '@nubolab-ffwd/svelte-fluent';

const preloadFonts: Handle = async ({ event, resolve }) => {
  const response = await resolve(event, {
    preload: ({ type }) => type === 'font',
  });
  event.locals.locale = negotiateLocale(event);
  event.locals.fluent = createSvelteFluent(generateBundles(event.locals.locale));

  return response;
};

export const handle: Handle = sequence(preloadFonts);
