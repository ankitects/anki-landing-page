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

  let scrollY = $state(0);

  let isMenuOpen = $state(false);
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
  const closeMenu = () => {
    isMenuOpen = false;
  };
</script>

<svelte:window bind:scrollY />

<header class="fixed top-0 left-0 right-0 z-50">
  <div
    class="mx-auto w-full max-w-[1082px] px-6 md:px-12 flex items-center transition-all duration-500 ease-[linear(0,_0.178_4.5%,_0.336_9%,_0.477_13.6%,_0.604_18.4%,_0.713_23.3%,_0.762_25.8%,_0.806_28.3%,_0.847_30.9%,_0.884_33.5%,_0.917_36.2%,_0.946_38.9%,_0.969_41.3%,_0.989_43.8%,_1.006_46.4%,_1.02_49%,_1.032_51.7%,_1.041_54.5%,_1.048_57.3%,_1.051_60.3%,_1.053_65%,_1.048_70.2%,_1.039_75.7%,_1.008_91%,_1.002_95.7%,_1)] border-subtle/12 bg-background"
    class:pt-1={scrollY < 12}
    class:md:pt-6={scrollY < 12}
    class:border-b={scrollY > 6}
  >
    <div class="flex h-14 items-center justify-between w-full">
      <div class="flex gap-4">
        <a
          href="#top"
          class="flex items-center gap-1.5 shrink-0 [&>*]:pointer-events-none [&>*]:select-none"
        >
          <img src="{base}/logo.svg" alt="Logo" class="size-6" />
          <span class="font-semibold text-foreground text-xl tracking-wide">Anki</span>
        </a>
      </div>
      <div class="flex items-center h-full max-[832px]:hidden pr-8">
        {#each options as { text, href }}
          <a
            class="px-3 select-none transition-all duration-150 ease-out flex items-center text-foreground h-full hover:shadow-[inset_0_-2px_var(--color-primary)]"
            {href}
          >
            {text}
          </a>
        {/each}
        <a
          aria-label="GitHub repository"
          href="https://github.com/ankitects/anki"
          class="px-3 py-2 group pr-6"
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
          class="rounded-[2rem] px-4 py-1.5 font-semibold tracking-tight transition-all duration-100 ease-out bg-gradient-to-r from-primary-darker to-primary text-background hover:opacity-80"
        >
          Download Anki
        </a>
      </div>
      <div class="flex items-center gap-2.5 min-[832px]:hidden">
        <button
          type="button"
          class="relative inline-grid size-7 place-items-center rounded-md text-foreground"
          aria-label="Navigation"
          onclick={toggleMenu}
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
        {#if isMenuOpen}
          <div
            id="menu"
            role="menu"
            class="fixed top-0 left-0 size-full bg-background z-20 p-20 menu-open"
          >
            <button
              onclick={closeMenu}
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
                onclick={closeMenu}
                class="text-center mt-auto rounded hover:opacity-80 bg-gradient-to-r from-primary-darker to-primary text-background py-4 text-lg flex items-center justify-center font-semibold leading-none cursor-pointer transition-all duration-300 ease-out"
              >
                Download Anki
              </a>
            </nav>
          </div>
        {/if}
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
  .menu-open {
    animation: fadeIn 0.3s forwards ease-in;
  }
</style>
