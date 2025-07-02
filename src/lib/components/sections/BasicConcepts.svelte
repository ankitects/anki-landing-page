<script>
  import { base } from '$app/paths';
  import DualHeader from '$lib/components/common/DualHeader.svelte';
</script>

<section class="relative z-1 mx-auto w-[min(100%,986px)] pt-12">
  <DualHeader title="basic concepts">
    {#snippet subtitle()}
      <p>Anki supports complex workflows, but getting started is easy.</p>
    {/snippet}
  </DualHeader>
  <div class="flex flex-col items-center gap-6 md:gap-20 md:flex-row">
    <img
      src="{base}/graphics/deck-graphic-light.svg"
      alt="deck-graphic-light"
      class="aspect-5/3 grow md:max-w-[35%] border-2 border-black/[13%] dark:hidden"
    />
    <img
      src="{base}/graphics/deck-graphic-dark.svg"
      alt="deck-graphic-dark"
      class="aspect-5/3 grow md:max-w-[35%] hidden dark:inline"
    />
    <div class="w-full flex flex-col gap-2 mt-6 md:mt-0">
      <h3 class="text-2xl font-medium capitalize">Decks</h3>
      <p class="text-lg text-subtle tracking-wide leading-snug">
        Decks are groups of flashcards that allow you to study specific parts of your collection
        instead of everything all at once. Create a new deck and add some flashcards to get started.
      </p>
    </div>
  </div>
  <div class="mt-12 flex flex-col items-center gap-6 md:gap-20 md:flex-row-reverse">
    <img
      src="{base}/graphics/review-graphic-light.svg"
      alt="review-graphic-light"
      class="aspect-5/3 grow md:max-w-[35%] border-2 border-black/[13%] dark:hidden"
    />
    <img
      src="{base}/graphics/review-graphic-dark.svg"
      alt="review-graphic-dark"
      class="aspect-5/3 grow md:max-w-[35%] hidden dark:inline"
    />
    <div class="w-full flex flex-col gap-2 mt-6 md:mt-0">
      <h3 class="text-2xl font-medium capitalize">Reviews</h3>
      <p class="text-lg text-subtle tracking-wide leading-snug">
        When you're ready, start reviewing your flashcards. Rate your recall with the most suitable
        option and Anki will schedule the next review for when you're most likely to forget the
        information.
      </p>
    </div>
  </div>
</section>
