<script>
  import { states } from "./states";
  import { writable } from "svelte/store";
  import SimpleSelections from "./SimpleSelections.svelte";
  import SimpleTypeahead from "./SimpleTypeahead.svelte";
  const items = writable(states);
  let selectedOptions = [];
  let searchTerm = "";
  $: console.log(`selectedOptions`, selectedOptions);
  $: console.log(`searchTerm`, searchTerm);
  // $: console.log(`items`, items);
</script>

<h1>Simple typeahead with selections</h1>

<SimpleTypeahead
  {items}
  bind:selectedOptions
  bind:value={searchTerm}
  placeholder="Search for US states"
/>
<SimpleSelections bind:items={selectedOptions} />
