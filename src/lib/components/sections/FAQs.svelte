<script lang="ts">
  import { slide } from 'svelte/transition';

  interface FAQ {
    id: string;
    question: string;
    answer: string;
  }

  const faqs: FAQ[] = [
    {
      id: 'what-is-spaced-repetition',
      question: 'What is spaced repetition?',
      answer:
        "Spaced repetition is a learning technique where you review material at increasing intervals. Anki schedules your reviews based on when you're likely to forget information, making learning more efficient than traditional cramming.",
    },
    {
      id: 'why-not-all-cards',
      question: "Why isn't Anki showing me all my cards?",
      answer:
        "Anki uses spaced repetition to optimize your learning. It strategically determines which cards you see based on when you're likely to forget them, rather than showing all cards at once. This approach helps you remember large amounts of material for a long time.",
    },
    {
      id: 'how-many-new-cards',
      question: 'How many new cards should I study per day?',
      answer:
        'By default, Anki shows a maximum of 20 new cards daily. This prevents overwhelming your review schedule, since each new card requires follow-up reviews in subsequent days. You can adjust this limit based on your learning capacity.',
    },
    {
      id: 'when-to-review',
      question: 'When should I review my cards?',
      answer:
        "Unless you have an upcoming exam, follow Anki's scheduling recommendations rather than reviewing cards multiple times yourself. Research shows it's more efficient to wait for the optimal review time than to view the same content repeatedly.",
    },
  ];

  let expandedId: string | null = $state(null);

  function toggleFAQ(id: string) {
    expandedId = expandedId === id ? null : id;
  }
</script>

{#snippet faqItem(id: string, question: string, answer: string)}
  <div class="border-b border-foreground/[13%] pb-4 last:border-b-0">
    <button
      onclick={() => toggleFAQ(id)}
      class="w-full flex items-center justify-between py-4 text-left hover:opacity-80 transition-opacity"
      aria-expanded={expandedId === id}
      aria-controls={`faq-content-${id}`}
    >
      <h4 class="text-lg md:text-xl font-medium text-foreground">
        {question}
      </h4>
      <div class="flex-shrink-0 ml-4">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="size-6 text-primary transition-transform duration-200 {expandedId === id
            ? 'rotate-45'
            : ''}"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </button>

    {#if expandedId === id}
      <div
        id={`faq-content-${id}`}
        class="pb-4 text-base text-subtle leading-relaxed"
        transition:slide={{ duration: 200 }}
      >
        {answer}
      </div>
    {/if}
  </div>
{/snippet}

<section
  class="relative z-1 mx-auto w-[min(100%,986px)] border-b border-t border-foreground/[13%] py-12 my-8 lg:my-16 lg:py-24"
>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
    <div class="col-span-1 md:col-span-4">
      <h2
        class="text-[2.5rem] leading-[135%] tracking-tight font-semibold place-left text-center md:text-left"
      >
        FAQs
      </h2>
    </div>

    <div class="col-span-1 md:col-span-8 space-y-4">
      {#each faqs as faq}
        {@render faqItem(faq.id, faq.question, faq.answer)}
      {/each}
    </div>
  </div>
</section>
