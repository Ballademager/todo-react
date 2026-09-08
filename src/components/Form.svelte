<script>
  let { addItem } = $props();

  let task = $state("");

  function handleSubmit(e) {
    e.preventDefault();
    addItem({
      task,
      completed: false,
      id: crypto.randomUUID(),
    });
    task = ""; // clear input
  }
</script>

<form class="form" onsubmit={handleSubmit}>
  <label class="contents" for="task">
    <input
      id="task"
      name="task"
      type="text"
      placeholder="New task here.."
      required
      bind:value={task}
    />
  </label>
  <button class="bg-slate-300 rounded-lg py-1 px-2" type="submit">Add task</button>
</form>

<style>
  .form {
    display: grid;
    align-self: stretch;
    grid-template-columns: 1fr auto;
    gap: 3rem;
    padding-inline: 2.5rem 1rem;
  }
  .form label {
    display: grid;
  }

  .form input {
    background: color-mix(in srgb, var(--paper-clr) 30%, white 70%);
    border-radius: 5px;
    padding-inline-start: 0.5rem;
    height: 32px;
    align-self: center;
  }

  .form button {
    grid-column: 2/-1;
    justify-self: center;
    align-self: end;
    margin-bottom: 4px;
    padding: 2px 8px;
    color: black;
    font-weight: 600;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background: var(--body-bg-clr);
    background-repeat: no-repeat;
  }

  @media (width < 466px) {
    .form {
      padding-inline: 2rem 0.5rem;
      grid-template-columns: 1fr auto;
      gap: 1rem;
    }
  }
</style>
