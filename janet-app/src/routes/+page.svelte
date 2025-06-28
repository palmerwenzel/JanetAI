<script lang="ts">
  import Input from "$lib/components/Input.svelte";

  let value = "";
</script>

<div class="dark text-foreground min-h-screen flex flex-col items-center justify-center p-4">
  <div class="w-full max-w-lg">
    <Input 
      type="text" 
      placeholder="Ask Janet anything..." 
      bind:value
    />
  </div>
</div>
