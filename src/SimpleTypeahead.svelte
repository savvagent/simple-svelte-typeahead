<script>
  import { isNotEmpty } from "./empty";
  import { writable } from "svelte/store";

  export let disabled = false;
  export let filtered = [];
  export let items = writable([]);
  export let limit = 5;
  export let placeholder = "placeholder";
  export let selectedOptions = [];
  export let value = "";

  let currentIndex = 0;
  let hovered = null;
  let selectedIndex = 0;

  const clear = () => {
    currentIndex = 0;
    selectedIndex = 0;
    filtered = [];
    hovered = null;
    value = "";
  };

  const selectNextIndex = () => {
    currentIndex = selectedIndex;
    const nextIndex = ++currentIndex;
    if (nextIndex > filtered.length && filtered.length !== 1) return;
    selectedIndex = nextIndex;
  };

  const selectPreviousIndex = () => {
    currentIndex = selectedIndex;
    const previousIndex = --currentIndex;
    if (previousIndex < 0) return;
    selectedIndex = previousIndex;
  };

  const setSelectedOption = (index) => {
    selectedOptions = [...selectedOptions, filtered[index || selectedIndex]];
    clear();
  };

  const clickHandler = (ev) => {
    setSelectedOption(hovered);
  };

  const onKeydown = (ev) => {
    const { code } = ev;
    if (code === "ArrowDown") selectNextIndex();
    else if (code === "ArrowUp") selectPreviousIndex();
    else if (code === "Enter") setSelectedOption();
    else if (code === "Escape") clear();
  };

  $: filtered = isNotEmpty(value)
    ? $items
        .sort((a, b) => (a.name > b.name ? 1 : 0))
        .filter((item) => new RegExp(`${value}`, "i").test(item.name))
        .filter((item, i) => !selectedOptions?.[i]?.name?.includes(item.name))
        .filter((item, i) => i < limit)
    : [];

  $: console.log(`value`, value);
  $: console.log(`$items`, $items);
  $: console.log(`filtered`, filtered);
  $: console.log(`selectedOptions`, selectedOptions);
</script>

<div class="container">
  <input
    bind:value
    {disabled}
    {placeholder}
    on:keydown={onKeydown}
    type="text"
  />
  <ul>
    {#each filtered as option, i}
      <li
        on:click={clickHandler}
        on:mouseover={() => (hovered = i)}
        class:selected={selectedIndex === i}
      >
        <span>{option.name}</span>
      </li>
    {/each}
  </ul>
</div>

<style lang="less">
  .container {
    display: flex;
    flex-direction: column;
    font-family: var(--font-family, sans-serif);
    font-size: var(--font-size, 1em);
  }
  input {
    border-radius: var(--input-border-radius, 3px);
    border-top: var(--input-border, 1px solid #ccc);
    border-right: var(--input-border, 1px solid #ccc);
    border-left: var(--input-border, 1px solid #ccc);
    border-bottom: 0;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    padding: 0.5rem;
  }

  ul {
    border: var(--input-border, 1px solid #ccc);
    border-top: 0;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0.4rem 0.5rem;
    &.selected,
    &:hover {
      background-color: var(--selected-background-color, #ff0000);
      color: var(--selected-foregroud-color, white);
      cursor: pointer;
    }
  }
</style>
