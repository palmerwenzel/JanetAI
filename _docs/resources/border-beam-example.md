BorderBeamExample.svelte
<script>
  import BorderBeam from "./BorderBeam.svelte";
</script>

<article
  class="flex max-w-xl flex-col items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-background"
>
  <BorderBeam size={150} duration={12} />
  <div class="flex items-center gap-x-4 text-xs">
    <time datetime="2020-03-16" class="text-gray-300">June 7, 2024</time>
    <a
      href="https://github.com/SikandarJODD"
      class="relative z-10 rounded-full bg-transparent px-3 py-1.5 font-medium text-gray-200 border border-gray-100"
      >Svelte-Components</a
    >
  </div>
  <div class="group relative">
    <h3
      class="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-50"
    >
      <a href="/">
        <span class="absolute inset-0"></span>
        Animation Svelte
      </a>
    </h3>
    <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
      Welcome to Svelte Animation website. This website includes Qualtiy
      Tailwind CSS and Framer Motion Components. Inspired from <span
        class="text-gray-300 underline underline-offset-2">Magic UI</span
      >
      and <span class="text-gray-300 underline underline-offset-2">Luxe</span>
      Componenets.
    </p>
  </div>
  <div class="relative mt-8 flex items-center gap-x-4">
    <img
      src="https://avatars.githubusercontent.com/u/93428946?v=4"
      alt="bhide"
      class="h-10 w-10 rounded-full bg-gray-50"
    />
    <div class="text-sm leading-5">
      <p class="font-semibold text-white">
        <a href="https://github.com/SikandarJODD">
          <span class="absolute inset-0"></span>
          Sikandar Bhide
        </a>
      </p>
      <p class="text-gray-500">Svelte Developer</p>
    </div>
  </div>
</article>
Component Usage
Copy the below component code and paste it. Checkout Above Example for Usage

Install Dependencies
npm i clsx tailwind-merge
lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

 export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
 }
BorderBeam.svelte
<script lang="ts">
  import { cn } from "$lib/utils";

  export let size = 200;
  export let duration = 15;
  export let anchor = 90;
  export let borderWidth = 1.5;
  export let colorFrom = "#ffaa40";
  export let colorTo = "#9c40ff";
  export let delay = 0;
  let delaySec = delay + "s";

  let className: any = "";
  export { className as class };
</script>

<div
  style:--border-width={borderWidth}
  style:--size={size}
  style:--color-from={colorFrom}
  style:--color-to={colorTo}
  style:--delay={delaySec}
  style:--anchor={anchor}
  style:--duration={duration}
  class={cn(
    "pointer-events-none absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",

    // mask styles
    "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

    // pseudo styles
    "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
    className
  )}
></div>
tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
};