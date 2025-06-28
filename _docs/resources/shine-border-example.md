ShineBorderExample.svelte
<script>
  // Scroll below to see the original Component file
  import ShineBorder from "../ShineBorder.svelte";
</script>

<div class="flex justify-center items-center w-full min-h-52">
  <ShineBorder class="text-center text-2xl font-bold capitalize" color="white">
    Shine
  </ShineBorder>
</div>
Original Component
Default
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
ShineBorder.svelte
<script lang="ts">
  import { cn } from "$lib/utils";

  type TColorProp = string | string[];

  export let borderRadius: number = 8;
  export let borderWidth: number = 1;
  export let duration: number = 14;
  export let color: TColorProp = ["#4FF9FF"];
  let className: string = "";
  export { className as class };
</script>

<div
  style="
      --border-radius: {borderRadius}px;
    "
  class={cn(
    "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[var(--border-radius)] bg-white p-3 text-black dark:bg-black dark:text-white",
    className
  )}
>
  <div
    style="
        --border-width: {borderWidth}px;
        --border-radius: {borderRadius}px;
        --shine-pulse-duration: {duration}s;
        --mask-linear-gradient: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        --background-radial-gradient: radial-gradient(transparent, transparent, {Array.isArray(
      color
    )
      ? color.join(',')
      : color}, transparent, transparent);
      "
    class="before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[var(--border-radius)] before:p-[var(--border-width)] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%] before:[mask:var(--mask-linear-gradient)] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]"
  ></div>
  <!-- This is Default Slot -->
  <slot>Default</slot>
</div>
tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
    },
  },
};