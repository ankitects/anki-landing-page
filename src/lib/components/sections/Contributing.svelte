<script lang="ts">
  import DualHeader from '$lib/components/common/DualHeader.svelte';
  import LinkCard from '$lib/components/common/LinkCard.svelte';
  import { Localized } from '@nubolab-ffwd/svelte-fluent';

  type ContributingLinkCard = {
    title: string;
    description: string;
    href: string;
  };

  const contributingCards: ContributingLinkCard[] = [
    {
      title: 'open-source',
      description: 'open-source-description',
      href: 'https://github.com/ankitects/anki/blob/main/docs/contributing.md',
    },
    {
      title: 'share-decks',
      description: 'share-decks-description',
      href: 'https://docs.ankiweb.net/contrib#sharing-decks-publicly',
    },
    {
      title: 'translate-anki',
      description: 'translate-anki-description',
      href: 'https://translating.ankiweb.net/intro.html',
    },
  ];
</script>

<section class="relative z-1 mx-auto w-[min(100%,986px)] pt-12">
  <DualHeader id="contributing">
    {#snippet subtitle()}
      <p>
        <Localized
          id="anki-is-a-community-project-where-anyone-can-make-contributions-to-help-improve-everyone-experience"
        />
      </p>
    {/snippet}
  </DualHeader>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    {#each contributingCards as { title, description, href }}
      <LinkCard {title} {description} {href} />
    {/each}
  </div>
</section>
