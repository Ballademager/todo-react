<script>
  let { task, completed, id, deleteItem, toggleCompleted } = $props();

  function deleteThis() {
    deleteItem(id);
  }
</script>

<li class="li">
  <span class:completed>{task}</span>
  <button class="button" onclick={() => toggleCompleted(id)}>
    {completed ? "Undo" : "Yes?"}
  </button>
  <button class="button" onclick={deleteThis}>Delete</button>
</li>

<style>
  .completed {
    text-decoration: line-through;
  }

  .button {
    border-radius: 10px;
    background: var(--bg-slate);
    background-repeat: no-repeat;
    font-weight: 600;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 2px 6px;
    align-self: end;
    margin-bottom: 4px;
  }

  .li {
    display: grid;
    grid-template-columns: 1fr auto auto;
    padding-inline: 3rem 1rem;
    gap: 1rem;
    justify-items: start;
    align-items: end;
  }

  .li span {
    min-width: 0;
    line-height: 44px;
    overflow-wrap: anywhere;
  }

  @media (width < 466px) {
    .li {
      padding-inline: 2rem 0.5rem;
    }
  }
</style>
