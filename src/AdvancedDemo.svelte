<script>
  import { writable } from "svelte/store";
  import SimpleSelections from "./SimpleSelections.svelte";
  import SimpleTypeahead from "./SimpleTypeahead.svelte";
  const items = writable([]);
  let selectedOptions = [];
  let searchTerm = "";
  // $: console.log(`selectedOptions`, selectedOptions);
  $: console.log(`searchTerm`, searchTerm);
  fetch("/api/users/")
    .then((resp) => resp.json())
    .then((resp) =>
      resp.map((r) => ({
        name: `${r.name} ${r.surname}`,
        value: `${r.name}_${r.surname}`,
      }))
    )
    .then((resp) => items.set(resp));
</script>

<h1>More advanced typeahead with async search function selections</h1>

<SimpleTypeahead {items} bind:selectedOptions bind:value={searchTerm} />
<SimpleSelections bind:items={selectedOptions} />
