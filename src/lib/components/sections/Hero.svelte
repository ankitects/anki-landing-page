<section class="flex items-center justify-between min-w-full py-20">
  <div class="flex flex-col max-w-[768px] sm:pr-12 gap-14 xl:gap-20">
    <div class="flex flex-col gap-9">
      <h1
        class="font-semibold text-5xl md:text-7xl 2xl:text-8xl 2xl:tracking-[1.78px] 2xl:leading-[89px]"
      >
        Make learning easier with <span class="text-primary">Anki</span>
      </h1>
      <p class="text-2xl md:text-4xl text-neutral tracking-[1.02px]">
        The flashcard application that makes sure you only practice the things you're about to
        forget.
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-5 sm:gap-9">
      <div class="bg-secondary">
        <a
          href="#downloads"
          onclick={(event) => {
            event.preventDefault();
            document.querySelector('#downloads')?.scrollIntoView({ behavior: 'smooth' });
          }}
          class="bg-primary aspect-[16/5] w-40 md:w-56 px-3 lg:px-8 border-2 border-primary text-background flex justify-center items-center text-xl md:text-2xl font-bold hover:opacity-80 transition-all duration-200"
        >
          Download
        </a>
      </div>
      <a
        href="https://docs.ankiweb.net/background.html"
        aria-label="Anki Manual: Background"
        target="_blank"
        rel="noopener noreferrer"
        class="aspect-[16/5] w-40 md:w-56 px-3 lg:px-8 text-white border-2 border-white/[13%] flex justify-center items-center text-xl md:text-2xl font-bold hover:opacity-60 transition-all duration-200"
      >
        + Learn more
      </a>
    </div>
  </div>
</section>
