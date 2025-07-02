<script lang="ts">
  import DualHeader from '$lib/components/common/DualHeader.svelte';

  interface Advantage {
    id: string;
    title: string;
    description: string;
    icon: {
      viewBox: string;
      paths: string[];
    };
  }

  const advantages: Advantage[] = [
    {
      id: 'synchronization',
      title: 'Synchronization',
      description:
        'The free AnkiWeb synchronization service lets you sync your cards across devices.',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          'M2 14C2 14 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C19.6092 17.1187 20.4133 15.5993 20.7762 14M2 14V20M2 14H8M22 10C22 10 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C4.39076 6.88131 3.58669 8.40072 3.22383 10M22 10V4M22 10H16',
        ],
      },
    },
    {
      id: 'media-support',
      title: 'Media Support',
      description: 'Audio, images, videos, and scientific markup can be used in your flashcards.',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          'M12.5 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H17C17.93 21 18.395 21 18.7765 20.8978C19.8117 20.6204 20.6204 19.8117 20.8978 18.7765C21 18.395 21 17.93 21 17M19 8V2M16 5H22M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5ZM14.99 11.9181L6.53115 19.608C6.05536 20.0406 5.81747 20.2568 5.79643 20.4442C5.77819 20.6066 5.84045 20.7676 5.96319 20.8755C6.10478 21 6.42628 21 7.06929 21H16.456C17.8951 21 18.6147 21 19.1799 20.7582C19.8894 20.4547 20.4547 19.8894 20.7582 19.1799C21 18.6147 21 17.8951 21 16.456C21 15.9717 21 15.7296 20.9471 15.5042C20.8805 15.2208 20.753 14.9554 20.5733 14.7264C20.4303 14.5442 20.2412 14.3929 19.8631 14.0905L17.0658 11.8527C16.6874 11.5499 16.4982 11.3985 16.2898 11.3451C16.1061 11.298 15.9129 11.3041 15.7325 11.3627C15.5279 11.4291 15.3486 11.5921 14.99 11.9181Z',
        ],
      },
    },
    {
      id: 'customization',
      title: 'Customization',
      description: 'Easily change your flashcard layouts and the timing of their reviews.',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          'M2 12C2 17.5228 6.47715 22 12 22C13.6569 22 15 20.6569 15 19V18.5C15 18.0356 15 17.8034 15.0257 17.6084C15.2029 16.2622 16.2622 15.2029 17.6084 15.0257C17.8034 15 18.0356 15 18.5 15H19C20.6569 15 22 13.6569 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z',
          'M7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13Z',
          'M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9Z',
          'M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7C9 7.55228 9.44772 8 10 8Z',
        ],
      },
    },
    {
      id: 'optimization',
      title: 'Optimization',
      description: 'Anki can handle decks of 100,000+ cards with no problems.',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          'M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z',
        ],
      },
    },
    {
      id: 'add-ons',
      title: 'Add-ons',
      description: 'Install add-ons to extend Anki with new features and functionality.',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          'M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M14 20.889L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7986 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52346 17.2909 3.37368 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42757 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37368 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7986 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42757 21 7.59889 21 7.94153L21 12.5001M7.5 4.50008L16.5 9.50008M19 21.0001V15.0001M16 18.0001H22',
        ],
      },
    },
  ];
</script>

{#snippet advantageCard({ title, description, icon }: Advantage)}
  <div class="gap-3 flex flex-col">
    <div class="flex items-center gap-3">
      <svg
        class="size-6 md:size-7 text-primary"
        viewBox={icon.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {#each icon.paths as path}
          <path
            d={path}
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        {/each}
      </svg>
      <h3 class="text-lg md:text-xl font-medium capitalize">{title}</h3>
    </div>
    <p class="text-subtle leading-snug md:text-lg tracking-wide">{description}</p>
  </div>
{/snippet}

<section class="relative z-1 mx-auto w-[min(100%,986px)] pt-12">
  <DualHeader title="advantages">
    {#snippet subtitle()}
      <p>Here are a few reasons why users love Anki.</p>
    {/snippet}
  </DualHeader>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {#each advantages as advantage (advantage.id)}
      {@render advantageCard(advantage)}
    {/each}
  </div>
</section>
