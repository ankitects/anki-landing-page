<script lang="ts">
  import DualHeader from '$lib/components/common/DualHeader.svelte';
  import { cubicIn } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  type Testimonial = {
    quote: string;
    author: string;
    link?: string;
  };

  let index: number = $state(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        'The single biggest change that Anki brings about is that it means memory is no longer a haphazard event, to be left to chance. Rather, it guarantees I will remember something, with minimal effort. That is, Anki makes memory a choice.',
      author: 'Michael A. Nielsen, "Augmenting Long-term Memory"',
      link: 'https://augmentingcognition.com/ltm.html',
    },
    {
      quote:
        'No other application [...] comes remotely close to Anki in terms of the number and power of features, flexibility in study, or implementation of spaced repetition.',
      author: 'K. M. Lawson, "Anki All The Way"',
      link: 'https://huginn.net/foolsworkshop/reviews/index.html%3fp=124.html',
    },
    {
      quote:
        "... consistent use of Anki has opened more doors for me intellectually than I could have imagined two years ago. And being a poor student, I'll be forever grateful that you've provided this software open-source and free of charge.",
      author: 'Keldin, via Email',
    },
  ];

  const changeTestimonial = (direction: 'next' | 'prev') => {
    index = {
      next: (index + 1) % testimonials.length,
      prev: (index - 1 + testimonials.length) % testimonials.length,
    }[direction];
  };
</script>

{#snippet testimonialAuthor(testimonial: Testimonial)}
  {testimonial.author}
  {#if testimonial.link}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="size-4 lg:size-5 stroke-3 inline ml-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  {/if}
{/snippet}

<section class="relative z-1 mx-auto w-[min(100%,986px)] pt-12">
  <DualHeader title="testimonials">
    {#snippet subtitle()}
      <p>See what people are saying about Anki.</p>
    {/snippet}
  </DualHeader>
  <div>
    <div
      class="relative flex flex-col w-full min-h-96 dark:bg-primary rounded-lg p-8 lg:px-16 lg:py-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
    >
      <div
        class="absolute top-8 right-8 lg:top-12 lg:right-16 flex justify-end gap-4 dark:text-background"
      >
        <button
          onclick={() => changeTestimonial('prev')}
          aria-label="Previous testimonial"
          class="hover:opacity-40 hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="size-6 lg:size-7 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          onclick={() => changeTestimonial('next')}
          aria-label="Next testimonial"
          class="hover:opacity-40 hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="size-6 lg:size-7 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
      <div class="grid grid-cols-8 lg:grid-cols-7 grow">
        {#key index}
          <div
            class="col-span-5 lg:col-span-4 flex h-fit"
            in:fade={{ duration: 350, easing: cubicIn }}
          >
            <div class="min-w-fit dark:text-background font-bold text-md lg:text-2xl mt-auto">
              {#if testimonials[index].link}
                <a
                  href={testimonials[index].link}
                  class="hover:opacity-60 transition-all duration-200 ease-in-out"
                >
                  {@render testimonialAuthor(testimonials[index])}
                </a>
              {:else}
                <span>
                  {@render testimonialAuthor(testimonials[index])}
                </span>
              {/if}
            </div>
          </div>
          <div
            class="col-span-8 flex flex-col justify-center gap-2 lg:gap-6"
            in:fade={{ duration: 350, easing: cubicIn }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-8 lg:size-12 dark:text-background"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179"
              />
            </svg>
            <span class="dark:text-background font-medium text-lg lg:text-3xl h-fit">
              {testimonials[index].quote}
            </span>
          </div>
        {/key}
      </div>
    </div>
  </div>
</section>
