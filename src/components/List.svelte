<script>
  import ListItem from "./ListItem.svelte";
  import Form from "./Form.svelte";

  let { items, deleteItem, toggleCompleted, addItem } = $props();
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
  <div class="noteblock lg:justify-self-end">
    <h2 class="font-semibold text-2xl">My ToDo list</h2>
    <ul class="contents">
      <li class="li font-bold">
        <p>Task:</p>
        <p>Done</p>
        <p>Delete</p>
      </li>
      {#each items.filter((i) => i.completed === false) as item (item.id)}
        <ListItem {...item} {deleteItem} {toggleCompleted} />
      {/each}
      <Form {addItem} />
      <div class="vertline"></div>
    </ul>
  </div>
  <div class="noteblock lg:justify-self-start">
    <h2 class="font-semibold text-2xl">Completed tasks</h2>
    <ul class="contents">
      <li class="li font-bold">
        <p>Task:</p>
        <p>Done</p>
        <p>Delete</p>
      </li>
      {#each items.filter((i) => i.completed) as item (item.id)}
        <ListItem {...item} {deleteItem} {toggleCompleted} />
      {/each}
      <div class="vertline"></div>
    </ul>
  </div>
</div>

<style>
  .noteblock {
    position: relative;
    display: grid;
    width: 28rem;
    grid-auto-rows: minmax(44px, auto);
    grid-template-columns: 1fr;
    align-content: start;
    min-height: calc(13 * 44px);
    background: var(--paper-clr);
    box-shadow: 2px 2px 3px gray;
    background-image: linear-gradient(to bottom, var(--lines-clr, #51d3ef) 1px, transparent 1px);
    background-size: 100% 44px;
    background-position: 0 43px;
    align-items: end;
    padding-bottom: 1rem;
  }

  .noteblock h2:first-child {
    grid-column: 1/-1;
    place-self: end center;
  }

  .noteblock :global(li) {
    /* margin-bottom: 3px; */
  }

  @media (width < 466px) {
    .noteblock {
      width: 100%;
    }
  }

  .vertline {
    position: absolute;
    background-color: var(--vert-clr, #ff1b17);
    width: 2px;
    height: 100%;
    margin-left: 38px;
    z-index: 1;
  }

  @media (width < 466px) {
    .vertline {
      margin-left: 24px;
    }
  }

  .li {
    display: grid;
    grid-template-columns: 1fr auto auto;
    padding-inline: 3rem 1rem;
    gap: 1rem;
    justify-items: start;
  }
  .li p:not(:first-child) {
    padding-inline: 4px;
  }

  @media (width < 466px) {
    .li {
      padding-inline: 2rem 0.5rem;
    }
  }
</style>
