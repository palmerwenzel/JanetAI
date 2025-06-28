<!--
  @fileoverview Enhanced input component with animated BorderBeam effect
  Creates a stunning AI-style input field perfect for Janet's primary interaction
-->

<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import BorderBeam from "./BorderBeam.svelte";

  interface $$Props extends HTMLInputAttributes {
    /** Show the animated border beam effect */
    showBeam?: boolean;
  }

  let { showBeam = true, ...rest }: $$Props = $props();
</script>

<div class="relative flex h-12 w-full rounded-lg border border-input bg-black/20 backdrop-blur-sm">
  {#if showBeam}
    <BorderBeam 
      size={80} 
      duration={8} 
      colorFrom="#6A49D2" 
      colorTo="#FD7542"
      borderWidth={1.5}
    />
  {/if}
  
  <input
    class="flex-1 bg-transparent px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground outline-none border-none focus:outline-none focus:ring-0 focus:border-none focus:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 rounded-lg"
    {...rest}
  />
</div>