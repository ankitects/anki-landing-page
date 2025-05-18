<script lang="ts">
  import { base } from '$app/paths';

  type MenuOption = {
    href: string;
    text: string;
  };

  const options: MenuOption[] = [
    { text: 'Docs', href: 'https://docs.ankiweb.net/' },
    { text: 'Forums', href: 'https://forums.ankiweb.net/' },
    { text: 'AnkiWeb', href: 'https://ankiweb.net/' },
    { text: 'Add-Ons', href: 'https://ankiweb.net/shared/addons' },
    { text: 'Shared Decks', href: 'https://ankiweb.net/shared/decks' },
  ];
</script>

<header
  class="bg-background/90 backdrop-blur-lg sticky inset-x-0 top-0 z-10 border-b border-foreground/[13%]"
>
  <div class="max-w-348 mx-auto">
    <div class="flex h-16 items-center justify-between gap-8 px-6">
      <div class="flex gap-4">
        <a
          href="#top"
          class="flex items-center gap-2 shrink-0 [&>*]:pointer-events-none [&>*]:select-none"
        >
          <img src="{base}/logo.svg" alt="Logo" class="size-7" />
          <span class="font-bold text-foreground text-xl leading-none tracking-widest"> Anki </span>
        </a>
      </div>
      <div class="flex items-center h-full max-[832px]:hidden pr-8">
        {#each options as { text, href }}
          <a
            class="px-3 select-none transition-all duration-150 ease-out flex items-center text-foreground h-full hover:shadow-[inset_0_-2px_var(--color-primary)]"
            target="_blank"
            rel="noopener noreferrer"
            {href}
          >
            {text}
          </a>
        {/each}
        <a
          aria-label="GitHub repository"
          href="https://github.com/ankitects/anki"
          target="_blank"
          rel="noopener noreferrer"
          class="px-3 py-2 group"
        >
          <svg viewBox="0 0 20 20" class="size-5 fill-foreground group-hover:fill-primary">
            <path
              d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0020 10c0-5.525-4.475-10-10-10z"
            >
            </path>
          </svg>
        </a>
        <a
          href="#downloads"
          class="ml-3 rounded hover:opacity-80 bg-gradient-to-r from-primary-darker to-primary text-background h-12 flex items-center px-4 font-bold leading-none cursor-pointer transition-all duration-300 ease-out"
        >
          Download Anki
        </a>
      </div>
      <div class="flex items-center gap-2.5 min-[832px]:hidden">
        <button
          type="button"
          class="relative inline-grid size-7 place-items-center rounded-md text-foreground"
          aria-label="Navigation"
          popovertarget="menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-5 fill-foreground"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          id="menu"
          popover="auto"
          role="menu"
          class="fixed top-0 left-0 size-full bg-background z-20 p-20"
        >
          <button
            popovertarget="menu"
            popovertargetaction="hide"
            aria-label="Close menu"
            class="text-foreground absolute top-6 right-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-8"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <nav class="flex flex-col gap-4 h-full">
            {#each options as { text, href }}
              <a
                class="w-fit select-none transition-all gap-1 duration-150 ease-out text-3xl flex items-center text-foreground hover:shadow-[inset_0_-2px_#7EBBE5]"
                {href}
              >
                {text}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            {/each}
            <a
              href="#downloads"
              onclick={() => {
                document.getElementById('menu')?.hidePopover();
              }}
              class="text-center mt-auto rounded hover:opacity-80 bg-gradient-to-r from-primary-darker to-primary text-background py-4 text-lg flex items-center justify-center font-semibold leading-none cursor-pointer transition-all duration-300 ease-out"
            >
              Download Anki
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  #menu {
    &:popover-open {
      animation: fadeIn 0.3s forwards ease-in;
    }
  }
</style>
