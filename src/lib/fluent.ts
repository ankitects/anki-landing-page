import { FluentBundle, FluentResource } from '@fluent/bundle';
import { acceptedLanguages, negotiateLanguages } from '@fluent/langneg';
import type { RequestEvent } from '@sveltejs/kit';
import resourcesEn from '../translations/en.ftl';
import resourcesTh from '../translations/th.ftl';

const defaultLocale = 'en';

const resources: Record<string, FluentResource> = {
  en: resourcesEn,
  th: resourcesTh,
};

export function generateBundles(locale: string): FluentBundle[] {
  const bundle = new FluentBundle(locale);
  bundle.addResource(resources[locale]);
  return [bundle];
}

export function negotiateLocale(ev: RequestEvent): string {
  const accepted = acceptedLanguages(ev.request.headers.get('accept-language') ?? '');
  return (
    negotiateLanguages(accepted, Object.keys(resources), {
      defaultLocale,
      strategy: 'lookup',
    }).at(0) ?? defaultLocale
  );
}
