<script lang="ts">
  import { Localized } from '@nubolab-ffwd/svelte-fluent';
  import type { Snippet } from 'svelte';

  type DualHeader = {
    title: string;
    subtitle: Snippet;
  };

  let { title, subtitle }: DualHeader = $props();
</script>

<hgroup class="relative mx-auto text-center md:max-w-2xl mt-12 mb-16 md:mb-24 scroll-mt-24">
  <h2 {title} class="text-[2.5rem] leading-[135%] tracking-tight font-semibold">
    <Localized id={title} />
  </h2>
  <div class="text-xl text-subtle leading-[135%] mt-3 font-medium">
    {@render subtitle()}
  </div>
</hgroup>
