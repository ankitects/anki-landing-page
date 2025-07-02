<script lang="ts">
  import type { Snippet } from 'svelte';

  type DualHeader = {
    title: string;
    subtitle: Snippet;
  };

  let { title, subtitle }: DualHeader = $props();

  const id = $derived(title.toLowerCase().replace(/\s/g, '-'));
</script>

<hgroup class="relative mx-auto text-center md:max-w-2xl mt-12 mb-16 md:mb-24 scroll-mt-24">
  <h2 {id} class="text-[2.5rem] leading-[135%] tracking-tight font-semibold capitalize">{title}</h2>
  <div class="text-xl text-subtle leading-[135%] mt-3 font-medium">
    {@render subtitle()}
  </div>
</hgroup>
