// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import '@nubolab-ffwd/svelte-fluent/types';
import { SvelteFluent } from '@nubolab-ffwd/svelte-fluent';

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      locale: string;
      fluent: SvelteFluent;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
