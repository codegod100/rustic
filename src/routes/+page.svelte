<script lang="ts">
  import { onMount } from "svelte";
  export let data: { welcome: string; cpu_count: number; now: Date };
  import { invalidateAll } from "$app/navigation";
  import { source } from "sveltekit-sse";
  const value = source("/time").select("message");
</script>

{data.welcome} is a rust string
{data.cpu_count} cpus exist on this system The time is now: {new Date(
  $value,
).toLocaleString()}
