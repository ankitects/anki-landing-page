<script lang="ts">
  import { base } from '$app/paths';
  import { Localized } from '@nubolab-ffwd/svelte-fluent';

  type LinkCard = {
    title: string;
    description: string;
    href: string;
  };

  let { title, description, href }: LinkCard = $props();
</script>

<a
  {href}
  class="group flex flex-col justify-between px-9 py-6 hover:bg-subtle-surface rounded-lg border border-subtle/12"
>
  <div class="flex items-start justify-between mb-5">
    <h3 class="flex flex-row items-center text-2xl font-medium">
      <Localized id={title} />&nbsp;&nbsp;&nbsp;<img
        src="{base}/icons/link-arrow.svg"
        alt="outlink"
        class="size-6"
      />
    </h3>
  </div>
  <p class="text-subtle leading-snug tracking-wide">
    <Localized id={description} />
  </p>
</a>
