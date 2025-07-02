<div class="relative z-1 mx-auto w-[min(100%,986px)] min-h-64">
  <div class="pt-0 pb-5 px-0">
    <a
      href="https://docs.ankiweb.net/background.html"
      aria-label="Anki Manual: Background"
      class="text-sm tracking-tight inline-flex items-center gap-2 rounded-[6rem] bg-subtle-surface w-fit px-3 py-1.5 hover:opacity-80"
    >
      <span class="font-medium">Powerful, Intelligent Flashcards</span>
      <svg height="3" width="3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
      </svg>
      <div class="flex items-center gap-1">
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="size-3"
        >
          <path
            fill-rule="evenodd"
            d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </a>
  </div>
  <h1 class="text-[2.5rem]/12 md:text-5xl/14 font-bold mb-4 text-black dark:text-foreground">
    Remembering is easier with <span class="dark:text-primary">Anki</span>
  </h1>
  <div>
    <p class="max-w-lg text-xl/snug">
      Anki is a flashcard program that helps you spend more time on challenging material, and less
      on what you already know.
    </p>
  </div>
  <div class="mt-7">
    <a
      href="#downloads"
      class="h-10 inline-flex items-center justify-center gap-2 rounded-[2.5rem] px-5 transition-all duration-100 ease-out bg-gradient-to-r from-primary-darker to-primary text-background hover:opacity-80"
      onclick={(event) => {
        event.preventDefault();
        document.querySelector('#downloads')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <span class="font-semibold text-lg tracking-tight">Download Anki</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="size-5">
        <path
          d="M4.5 10H16M16 10L11.5 5.5M16 10L11.5 14.5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
        </path>
      </svg>
    </a>
  </div>
</div>
