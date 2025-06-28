<!--
  @fileoverview Animated border beam component that creates a traveling light effect around an element
  Perfect for highlighting primary interactive elements with Janet's brand colors
-->

<script lang="ts">
  import { cn } from "$lib/utils";

  /** Size of the beam in pixels */
  export let size = 400;
  /** Animation duration in seconds - slower for more elegant feel */
  export let duration = 8;
  /** Starting position anchor percentage */
  export let anchor = 90;
  /** Border width in pixels */
  export let borderWidth = 1.5;
  /** Gradient start color - Janet's warm purple */
  export let colorFrom = "#6A49D2";
  /** Gradient end color - Janet's atomic tangerine */
  export let colorTo = "#FD7542";
  /** Animation delay in seconds */
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
    "pointer-events-none absolute inset-[-1px] rounded-[inherit] [border:calc(var(--border-width)*1.5px)_solid_transparent]",

    // mask styles
    "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

    // pseudo styles
    "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
    className
  )}
></div>