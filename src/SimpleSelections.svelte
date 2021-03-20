<script>
  export let disabled = false;
  export let items = [];

  let del = (value) => {
    items = items.filter((item) => item.value !== value);
  };
</script>

<div class="container" class:borderless={!items.length}>
  {#each items as item, i}
    <div class="item">
      <span class="name">{item.name}</span>
      <button {disabled} on:click={() => del(item.value)} class="delete">
        &times;
      </button>
    </div>
  {/each}
</div>

<style lang="less">
  .container {
    display: flex;
    font-family: var(--font-family, Arial, Helvetica, sans-serif);
    font-size: var(--font-size, 0.9em);
    padding: 0.25em 0;
    border-width: var(--container-border-width, 1px);
    border-style: var(--container-border-style, solid);
    border-color: var(--container-border-color, #ccc);
    &.borderless {
      border: 0;
    }
  }
  span {
    display: block;
  }
  .item {
    align-items: center;
    background: var(--item-background, #ff0000);
    border-color: (var(--item-border-color, #ff0000));
    border-radius: var(--item-border-radius, 20px);
    border-style: solid;
    border-width: 1px;
    color: var(--item-color, #ffffff);
    display: flex;
    font-size: 1.1em;
    justify-content: space-between;
    margin: 0;
    padding: 0.1em 0.5em;
  }
  .name {
    flex: 1;
  }
  .delete {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--item-color, #fff);
    margin: 0;
    outline: none;
    padding: 0;
    padding-left: 0.5em;
    &[disabled] {
      cursor: not-allowed;
    }
  }
</style>
